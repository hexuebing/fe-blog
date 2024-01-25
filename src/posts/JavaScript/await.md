---
icon: javascript
date: 2022-01-16
category:
  - JavaScript
tag:
  - await
star: true
sticky: true
---
# await串联/并联

## await 串联→等待

```jsx
async function series() {
  await wait(500);
  await wait(500);
  return "done!";
}
```

以上代码执行完毕需要 1000 毫秒

## await 并联

```jsx
async function parallel() {
  const wait1 = wait(500);
  const wait2 = wait(500);
  await wait1;
  await wait2;
  return "done!";
}
```

以上代码只需 500 毫秒就可执行完毕, await同时执行

## 🙅‍♂️示例

```jsx
async function logInOrder(urls) {
  for (const url of urls) {
    const response = await fetch(url);
    console.log(await response.text());
  }
}
```

第二次获取要等到第一次获取读取完毕才能开始，以此类推。 其执行效率要比并行执行获取的 Promise 示例低得多。