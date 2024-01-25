---
icon: javascript
date: 2022-06-30
category:
  - JavaScript
tag:
  - requestAnimationFrame
star: true
sticky: true
---

# requestAnimationFrame动画

```jsx
function animate({timing, draw, duration}) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction 从 0 增加到 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // 计算当前动画状态
    let progress = timing(timeFraction);

    draw(progress); // 绘制

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}
```

`animate` 函数接受 3 个描述动画的基本参数：

- **`duration`** 动画总时间，比如 `1000`。

- **`timing(timeFraction)`** 时序函数，类似 CSS 属性 `transition-timing-function`，传入一个已过去的时间与总时间之比的小数（`0` 代表开始，`1` 代表结束），返回动画完成度（类似 Bezier 曲线中的 `y`）。

- **`draw(progress)`** 获取动画完成状态并绘制的函数。值 `progress = 0` 表示开始动画状态，`progress = 1` 表示结束状态。