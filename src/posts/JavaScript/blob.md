---
icon: javascript
date: 2022-01-16
category:
  - JavaScript
tag:
  - Blob
star: true
sticky: true
---

# Blob

## Blob是什么 ？

不可变的，类似文件对象的原始数据

```jsx
const blob = new Blob(blobParts, options)
```

1. `blobParts`: 可以是`Blob`、`ArrayBuffer`、`ArrayBufferView`、`DOMString`（会被编码）等构成的数组
2. `options`：{[ type, [ending] ]}
    - `type`默认为“”，是内容的MIME类型。
    - `ending`默认为“transparent”，用于指定包含`\n` 字符串如何写入。

例如：

```jsx
// 从字符串创建 Blob
let blob = new Blob(["<html>…</html>"], {type: 'text/html'});
// 请注意：第一个参数必须是一个数组 [...]
```

```jsx
// 从类型化数组（typed array）和字符串创建 Blob
let hello = new Uint8Array([72, 101, 108, 108, 111]); // 二进制格式的 "hello"

let blob = new Blob([hello, ' ', 'world'], {type: 'text/plain'});
```

## 提取`blob`片段

```jsx
blob.slice([byteStart], [byteEnd], [contentType]);
```

<aside>
💡 Blob 对象不可改变

</aside>

这种行为类似于 JavaScript 字符串：

我们无法更改字符串中的字符，但可以生成一个新的改动过的字符串。

## Blob用作URL下载

文件下载：

```jsx
<!-- download 特性（attribute）强制浏览器下载而不是导航 -->
<a download="hello.txt" href='#' id="link">Download</a>

<script>
let blob = new Blob(["Hello, world!"], {type: 'text/plain'});

link.href = URL.createObjectURL(blob);
</script>
```

在 Javascript 中动态创建一个链接，通过 link.click() 模拟一个点击，然后便自动下载了

```jsx
let link = document.createElement('a');
link.download = 'hello.txt';

let blob = new Blob(['Hello, world!'], {type: 'text/plain'});

link.href = URL.createObjectURL(blob);

link.click();

URL.revokeObjectURL(link.href);
```

`URL.createObjectURL` 传入一个 `Blob`，并为其创建一个唯一的 URL，形式为 `blob:<origin>/<uuid>`

```jsx
blob:https://javascript.info/1e67e00e-860d-40a5-89ae-6ab0cbee6273
```

`URL.revokeObjectURL(url)` 从内部映射中移除引用，因此允许 `Blob` 被删除（如果没有其他引用的话），并释放内存。

## Blob转为base64

`base64`这种编码将**二进制数据**表示为一个**由 0 到 64 的 ASCII 码**组成的字符串，非常安全且“可读“

```jsx
let link = document.createElement('a');
link.download = 'hello.txt';

let blob = new Blob(['Hello, world!'], {type: 'text/plain'});

let reader = new FileReader();
reader.readAsDataURL(blob); // 将 Blob 转换为 base64 并调用 onload

reader.onload = function() {
  link.href = reader.result; // data url
  link.click();
};
```

<aside>
💡 对大的 Blob 进行编码时，性能和内存会有损耗

</aside>

## Image 转为 blob

图像操作是通过canvas元素来实现

1. `canvas.drawImage` 绘制图像
2. `canvas.toBlob()` 创建一个blob

```jsx
// 获取任何图像
let img = document.querySelector('img');

// 生成同尺寸的 <canvas>
let canvas = document.createElement('canvas');
canvas.width = img.clientWidth;
canvas.height = img.clientHeight;

let context = canvas.getContext('2d');

// 向其中复制图像（此方法允许剪裁图像）
context.drawImage(img, 0, 0);
// 我们 context.rotate()，并在 canvas 上做很多其他事情

// toBlob 是异步操作，结束后会调用 callback
canvas.toBlob(function(blob) {
  // blob 创建完成，下载它
  let link = document.createElement('a');
  link.download = 'example.png';

  link.href = URL.createObjectURL(blob);
  link.click();

  // 删除内部 blob 引用，这样浏览器可以从内存中将其清除
  URL.revokeObjectURL(link.href);
}, 'image/png');
```

不喜欢callback，可以这么改写

```jsx
let blob = new Promise(reslove => canvas.toBlob(reslove, 'image/png'))
```

对于页面截屏，我们可以使用诸如 https://github.com/niklasvh/html2canvas 之类的库

## Blob 转为 ArrayBuffer

如果需要执行低级别的操作，则可使用 `FileReader` 从 `blob` 中获取最低级别的 `ArrayBuffer`

```jsx
// 从 blob 获取 arrayBuffer
let fileReader = new FileReader();

fileReader.readAsArrayBuffer(blob);

fileReader.onload = function(event) {
  let arrayBuffer = fileReader.result; // 拿到了blob对应的arrayBuffer
};
```