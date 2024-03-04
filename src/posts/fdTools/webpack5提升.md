# webpack5提升

## 持久化缓存cache

将构建过程的 webpack 模板进行缓存，大幅提升二次构建速度、打包速度，当构建突然中断，二次进行构建时，可以直接从缓存中拉取

### 过时的dll(暂时这么认为)

辅助配置 dll 的插件 `autodll-webpack-plugin`，结果上面直接写了 webpack5 开箱即用的持久缓存是比 `dll`更优的解决方案。

### 无需使用cache-loader

同样的cache-loader也无需引入

## 减少loader的使用

### 资源模块（asset module）

一种模块类型，它允许使用资源文件（字体，图标等）而无需配置额外 loader。

在 webpack 5 之前，通常使用：

- `raw-loader `将文件导入为字符串
- `url-loader `将文件作为 data URI 内联到 bundle 中
- `file-loader` 将文件发送到输出目录

资源模块类型(asset module type)，通过添加 4 种新的模块类型，来替换所有这些 loader：

- asset/resource 发送一个单独的文件并导出 URL。之前通过使用 file-loader 实现。
- asset/inline 导出一个资源的 data URI。之前通过使用 url-loader 实现。
- asset/source 导出资源的源代码。之前通过使用 raw-loader 实现。
- asset 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 url-loader，并且配置资源体积限制实现。

### 为loader指定include

指定 include，减少 loader 应用范围，仅应用于最少数量的必要模块

## 优化解析

- 减少 `resolve.modules`, `resolve.extensions`, `resolve.mainFiles`, `resolve.descriptionFiles` 中条目数量，因为他们会增加文件系统调用的次数。
- 如果不使用 symlinks（例如 npm link 或者 yarn link），可以设置 `resolve.symlinks: false`。

### extensions

根据项目中的文件类型，定义 extensions，以覆盖 webpack 默认的 extensions，加快解析速度。

由于 webpack 的解析顺序是从左到右，因此要将使用频率高的文件类型放在左侧
```js
module.exports = {
    resolve: {
        extensions: ['.tsx', '.js'], // 项目只有这两种类型的文件
    }
}
```

### modules

modules 表示 webpack 解析模块时需要解析的目录。指定目录可以缩小解析范围，加快解析速度

```js
module.exports = {
    modules: [
      'node_modules',
       paths.appSrc,
    ]
}
```

### symlinks

如果项目不使用 symlinks（例如 npm link 或者 yarn link），可以设置 resolve.symlinks: false，减少解析工作量

## 多进程

### htread-loader

通过 thread-loader 将耗时的 loader 放在一个独立的 worker 池中运行，加快 loader 构建速度。

### happyPack

happypack 同样是用来设置多线程，但是在 webpack5 就不要再使用 happypack 了，官方也已经不再维护了

## devtool

不同的 devtool 设置会导致性能差异。

- "eval" 具有最好的性能，但并不能帮助转译代码。
- 如果能接受稍差一些的映射质量，可以使用 cheap-source-map 变体配置提高性能。
- 使用 eval-source-map 变体配置进行增量编译。

## 减小打包体积

减少编译结果的整体大小以提高构建性能。尽量保持 chunk 体积小。

- 使用数量更少/体积更小的库
- 在多页面应用程序中使用 SplitChunksPlugin。
- 在多页面应用程序中使用 SplitChunksPlugin，并开启 async 模式。
- 移除未使用的代码。
- 只编译当前正在开发的那些代码。

###  TerserWebpackPlugin 来压缩 JS

webpack v5 开箱即带有最新版本的 terser-webpack-plugin

```js
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
```

### CssMinimizerWebpackPlugin 压缩 CSS

这个插件使用 cssnano 优化和压缩 CSS。

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  optimization: {
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
```

### Tree Shaking

#### sideEffects

```
{
  "name": "your-project",
  "sideEffects": false
}
```
#### 按需引入 
webpack5 sideEffects 只能清除无副作用的引用，而有副作用的引用则只能通过优化引用方式来进行 Tree Shaking。

##### lodash

lodash-es 替代 lodash，实现按需引入

#### purgecss-webpack-plugin 对 CSS Tree Shaking