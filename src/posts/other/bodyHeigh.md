---
icon: css
date: 2022-01-21
category:
  - CSS
tag:
  - heigh
star: true
sticky: true
---
# height：100%不生效

```html
<body>
    <div style="width:100%;height:100%;background-color:blueviolet;">
    width:100%;height:100%;
    </div>
</body>
//宽100%，我们现在看到的高是属于font-size的（文字撑开的高度），而不是100%；
```

%是一个相对父元素计算得来的高度

要想使他有效，我们需要设置父元素的height;要特别注意的一点是，在<body>之中的元素的父元素并不仅仅只是<body>，还包括了<html>