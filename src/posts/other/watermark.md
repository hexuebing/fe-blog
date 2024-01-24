---
icon: safe
date: 2021-07-23
category:
  - CLI
tag:
  - 水印
star: true
sticky: true
---

# 网页水印

```jsx
const waterMarkConfig = {
  text: 'zhangzhengyi-张正义-特勤一队-0000000-142230199999999999',
  opacity: 0.1,
  xCount: 9,
  yCount: 4,
  angle: -30
}
const {innerHeight, innerWidth} = window
function createWaterMark() {
  const {text, opacity, xCount, yCount, angle} = waterMarkConfig
  const canvas = document.createElement('canvas');
  canvas.width = innerWidth/xCount;
  canvas.height = innerHeight/yCount;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, innerWidth/xCount, innerHeight/yCount);
  ctx.fillStyle = '#000';
  ctx.globalAlpha = opacity;
  ctx.font = `16px serif`
  ctx.rotate(Math.PI / 180 * angle);
  const textArr = text.split('-')
  const offsetTop = (innerHeight/yCount - textArr.length * 20)/2
  for (let i = 0; i < textArr.length; i++) {
    ctx.fillText(textArr[i], 0, offsetTop+20*i)
  }
  return canvas.toDataURL();
}
const watermakr = document.createElement('div');
watermakr.className = 'watermark';
watermakr.style.backgroundImage = `url(${createWaterMark()})`
document.body.appendChild(watermakr);

// 观察器的配置（需要观察什么变动）
const config = { attributes: true, childList: true, subtree: true };
// 当观察到变动时执行的回调函数
const callback = function (mutationsList, observer) {
  // Use traditional 'for loops' for IE 11
  for (let mutation of mutationsList) {
    mutation.removedNodes.forEach(function (item) {
      if (item === watermakr) {
        console.log('发现被删除')
        document.body.appendChild(watermakr);
      }
    });
  }
};
// 监听元素
const targetNode = document.body;
// 创建一个观察器实例并传入回调函数
const observer = new MutationObserver(callback);
// 以上述配置开始观察目标节点
observer.observe(targetNode, config);
```

```css
.watermark {
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  pointer-events: none;
  background-repeat: repeat;
}
```