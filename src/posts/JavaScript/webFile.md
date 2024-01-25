---
icon: javascript
date: 2022-06-30
category:
  - JavaScript
tag:
  - FileReader
star: true
sticky: true
---

# Web使用File

## 访问文件

```html
<input type="file" id="input">
```

使用传统的 DOM 选择器访问一个被选择的 FileList，它包含了用户所选文件的 File对象

```jsx
const selectedFile = document.getElementById('input').files
```

### chang事件访问

```jsx
<input type="file" id="input" onchange="handleFiles(this.files)">
```

## 遍历被选择文件

DOM 提供 FileList 对象列出了用户选择的所有文件，每一个文件被指定为一个 File 对象。

访问文件数量：

```jsx
const numFiles = files.length;
```

也可像遍历数组一样访问每一个 File 对象

> File对象有三个属性
> 
- `name` 不含路径的文件名
- `size` 以字节数为单位
- `type` 文件的MIME类型 image/png

## 隐藏file input元素

通过给 input 元素添加 display:none 的样式，再调用 <input> 元素的 click() 方法来实现

```jsx
<input
  type="file"
  id="input"
  multiple
  style="display: none;"
  onchange="changeHandler(this.files)"
/>
<button onclick="clickHandler()">选取文件</button>
<script>
  function clickHandler() {
    const selectedFile = document.getElementById("input");
    selectedFile.click();
  }
  function changeHandler(fileList) {
    console.log(fileList);
  }
</script>
```

## 拖放文件

创建一个drop区域，添加drop事件

```jsx
let dropbox;

dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);
```

```jsx
function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  var dt = e.dataTransfer;
  var files = dt.files;

  handleFiles(files);
}
```

从事件中获取到了dataTransfer 这个域，然后从中得到文件列表

## 显示图片缩略图

### FileReader读取文件

```jsx
function handleFiles(files) {
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    var imageType = /^image\//;

    if (!imageType.test(file.type)) {
      continue;
    }

    var img = document.createElement("img");
    img.classList.add("obj");
    img.file = file; // 方便拿到实际上传的图片
    preview.appendChild(img); // 假设"preview"就是用来显示内容的div

    var reader = new FileReader();
    reader.onload = (function(aImg) { 
			return function(e) { 
				// e.target 指向的是FileReader实例
				aImg.src = e.target.result;
			}; 
		})(img);
    reader.readAsDataURL(file);
  }
}
```

`FileReader.readAsDataURL()` 开始读取Blob中内容，一旦完成，result属性将包含一个`data:` URL格式的Base64字符串

`FileReader.onload` 该事件在读取完毕之后触发

### 对象url显示缩略图

当你需要在HTML中通过URL来引用一个File对象时，你可以创建一个对象URL

```jsx
var objectURL = window.URL.createObjectURL(fileObj);
```

```jsx
function handleFiles(files) {
    if (!files.length) {
        fileList.innerHTML = "<p>No files selected!</p>";
    } else {
        fileList.innerHTML = "";
        var list = document.createElement("ul");
        fileList.appendChild(list);
        for (var i = 0; i < files.length; i++) {
            var li = document.createElement("li");
            list.appendChild(li);
            var img = document.createElement("img");
            img.src = window.URL.createObjectURL(files[i]);
            img.height = 60;
            img.onload = function () {
                window.URL.revokeObjectURL(this.src);
            }
            li.appendChild(img);
            var info = document.createElement("span");
            info.innerHTML = files[i].name + ": " + files[i].size + " bytes";
            li.appendChild(info);
        }
    }
}
```