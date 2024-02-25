# HTTP请求取消

## XMLHttpRequest

```js
const xhr = new XMLHttpRequest();
xhr.open('GET', '<http://127.0.0.1:3000/api/get>', true);
xhr.send();
setTimeout(() => {
	 xhr.abort();
}, 1000);
```

## Fetch请求

当 fetch 请求初始化时，我们将 AbortSignal 作为一个选项传递进入请求的选项对象中（下面的 {signal}）。这将 signal 和 controller 与 fetch 请求相关联，并且允许我们通过调用 AbortController.abort() 去中止它
```js
let controller;
const url = "video.mp4";

const downloadBtn = document.querySelector(".download");
const abortBtn = document.querySelector(".abort");

downloadBtn.addEventListener("click", fetchVideo);

abortBtn.addEventListener("click", () => {
  if (controller) {
    controller.abort();
    console.log("中止下载");
  }
});

function fetchVideo() {
  controller = new AbortController();
  const signal = controller.signal;
  fetch(url, { signal })
    .then((response) => {
      console.log("下载完成", response);
    })
    .catch((err) => {
      console.error(`下载错误：${err.message}`);
    });
}
```

## 取消Axios请求

```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user', {
  cancelToken: source.token
}).catch(function(thrown) {
  if(axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // 处理错误
  }
});

// 取消请求
source.cancel('Operation canceled by the user.');
```

## Promise取消

在原生的JavaScript Promise规范中，并没有提供内置的取消Promise的方法。一旦创建了一个Promise对象，就无法直接取消它。

结合使用Promise和`AbortController`，通过AbortController的abort()方法来取消Promise。

```js
const controller = new AbortController();
const signal = controller.signal;

const myPromise = new Promise((resolve, reject) => {
    // 异步操作
    const timeoutId = setTimeout(() => {
        resolve('Operation successful');
    }, 2000);

    // 监听abort事件
    signal.addEventListener('abort', () => {
        clearTimeout(timeoutId);
        reject('Operation cancelled');
    });
});

// 取消Promise
controller.abort();

myPromise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error); // 输出 "Operation cancelled"
});
```