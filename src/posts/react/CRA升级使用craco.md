# create-react-app升级

## react-scripts运行方式

老项目中使用 `node scripts/start.js`启动程序，调查了很久，应该是在后续脚手架cra升级的时候，对这部分也进行了修改

直接对react-scripts进行升级之后，项目直接使用 `react-scripts`也可以完成对项目的启动，但是我这里的项目使用的是less框架，所以还需要处理css编译问题，暂且略过这个问题。

直接运行项目会发现之前的eslint会有配置冲突，二者均使用了`react`这个扩展，故而出现下面的问题：
`ERROR in Plugin "react" was conflicted between ".eslintrc.json" and "BaseConfig » "..\react-app\node_modules\eslint-config-react-app\base.js".`

[github问题链接1](https://github.com/facebook/create-react-app/issues/11825)
[github冲突链接2](https://github.com/reactjs/react.dev/issues/4186)

## craco 提升对脚手架的拓展

一开始找的[文章](https://dev.to/ryandunn/how-to-use-tailwind-with-create-react-app-and-postcss-with-no-hassle-2i09)说这个可以对`tailwindcss`的使用有解决方案,但是实际中使用结果还是无法解决问题。

后面看了关于[v2版本的文档](https://v2.tailwindcss.com/docs/guides/create-react-app)感觉好像也是能解决。

但后续发现这个可以在不将脚手架进行`enject`的情况下调整配置文件，故而就保留了这个的使用

```js
const CracoLessPlugin = require("craco-less");
const WebpackBar = require('webpackbar')

module.exports = {
  // 使用插件解决less问题
  plugins: [{ plugin: CracoLessPlugin }],
  webpack: {
    plugins: [
      // 对打包进度进行扩展
      new WebpackBar({
        profile: true
      }),
    ]
  }
};
```

## tailwindcss的使用

使用v3版本就简单多了，按照[官方文档](https://tailwindcss.com/docs/guides/create-react-app)直接一步步配置即可
