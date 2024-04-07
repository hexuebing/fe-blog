# 外部扩展（Externals）

externals 配置选项提供了「从输出的 bundle 中排除依赖」的方法。

通常对 library 开发人员来说是最有用的

## 将chunk-vendors.js中的vue和elementUI剔除

```js
module.exports={
    configureWebpack:{
        externals: {
            'element-ui': 'ELEMENT',
            'vue': 'Vue',
        }
    }
}
```

将这些依赖放到CDN
```html
<body>
    <div id="app"></div>
    <script src="https://cdn.bootcdn.net/ajax/libs/vue/2.6.11/vue.runtime.min.js"></script>
    <script src="https://unpkg.com/element-ui@2.10.1/lib/index.js"></script>
</body>
```