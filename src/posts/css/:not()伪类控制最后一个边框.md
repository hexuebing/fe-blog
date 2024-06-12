# :not()伪类控制最后一个边框.md

CSS 否定伪类，:not(X)，是以一个简单的以选择器X为参数的功能性标记函数。它匹配不符合参数选择器X描述的元素。

所有li元素通过右边框分割

```html
<ul>
    <li>右边框</li>
    <li>右边框</li>
    <li>右边框</li>
    <li>右边框</li>
</ul>
```

```scss
ul {
    margin: 50px auto;
    width: 400px;
    height: 48px;
    font-size: 24px;
    display: flex;
    flex-direction: row;
}

ul li {
    width: 100px;
    line-height: 48px;
    text-align: center;   
}

ul li:not(:last-child) {
    border-right: 1px solid #666;
}
```