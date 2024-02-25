---
icon: javascript
date: 2022-06-30
category:
  - JavaScript
tag:
  - File
star: true
sticky: true
---
# 文件上传

## 文件上传demo
接下来看一个简单的文件上传的例子：

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="image_uploads">Choose images to upload (PNG, JPG)</label>
    <input type="file" id="image_uploads" name="image_uploads" accept=".jpg, .jpeg, .png" multiple>
  </div>
  <div class="preview">
    <p>No files currently selected for upload</p>
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

```jsx
const input = document.querySelector('input');
const preview = document.querySelector('.preview');
input.style.opacity = 0; // 如果设置为 visibility: hidden 或者 display: none，会导致label不能交互
```

为input框添加事件

```jsx
input.addEventListener('change', updateImageDisplay);
```

```jsx
function updateImageDisplay() {
  while(preview.firstChild) {
  // 每次调用清空preview子节点
    preview.removeChild(preview.firstChild);
  }
  const curFiles = input.files; // 直接可以通过input获取到文件
  if(curFiles.length === 0) { // 未选中文件
    const para = document.createElement('p');
    para.textContent = 'No files currently selected for upload';
    preview.appendChild(para);
  } else {
    const list = document.createElement('ol');
    preview.appendChild(list);
    for(const file of curFiles) { // 遍历所选中的文件
      const listItem = document.createElement('li');
      const para = document.createElement('p');
      if(validFileType(file)) { // 这里省略文件类型校验
        para.textContent = `File name ${file.name}, file size ${returnFileSize(file.size)}.`;
        const image = document.createElement('img');
        image.src = URL.createObjectURL(file); // 文件预览关键节点
        listItem.appendChild(image);
        listItem.appendChild(para);
      } else {
        para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
        listItem.appendChild(para);
      }
      list.appendChild(listItem);
    }
  }
}
```
本例中文件预览使用了`URL.createObjectURL(file)`将文件转换为url，预览文件

## 大文件分片上传
File **是特殊类型的Blob**，故而可以调用文件的slice方法将大文件进行切割。

```jsx
const file = new File(["a".repeat(1000000)], "test.txt");
const chunkSize = 40000; // 切片大小
const url = "https://httpbin.org/post";
async function chunkedUpload() {
  for (let start = 0; start < file.size; start += chunkSize) {
      const chunk = file.slice(start, start + chunkSize + 1);
      const fd = new FormData();
      fd.append("data", chunk);
      fd.append("hash", start);
      await fetch(url, { method: "post", body: fd }).then((res) =>
        res.text()
      );
  }
}
```

## 结束上传之后，发送合并切片请求

前端主动通知服务端进行合并

## 上传进度

fetch 中实现不了请求进度，（下载都可以实现进度获取）

## 断点续传

断点续传的原理在于前端/服务端需要记住已上传的切片：
- 前端使用 localStorage 记录已上传的切片 hash

- 服务端保存已上传的切片 hash，前端每次上传前向服务端获取已上传的切片

## web-worker生成hash

根据文件内容生成 hash，用到另一个库 spark-md5，它可以根据文件内容计算出文件的 hash 值




