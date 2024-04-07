# Rollup + Babel打包JS库

[原文连接](https://luo3.org.cn/posts/learn/develop-and-distributing-js-library-using-rollup-and-babel/#%E9%85%8D%E7%BD%AE-babel)

## 初始化项目

```shell
yarn init
```

## 配置Babel

安装Babel和TS

- `@babel/core` Babel 核心包
- `@babel/cli` Babel 命令行工具
- `@babel/preset-env` Babel 兼容性整合包
- `@babel/preset-typescript` Babel TypeScript 整合包
- `typescript` TypeScript 编译器工具

```shell
yarn add -D @babel/core @babel/cli @babel/preset-env @babel/preset-typescript typescript

# 安装完毕后，初始化 TS 配置
yarn tsc --init
```

配置`babel.config.json`

```js
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-typescript"
  ]
}
```

测试配置生效与否：
```ts
const fn: Function = () => 1
```
Babel 默认**只编译 JS 代码**，所以要增加参数 `--extensions` 让 Babel 识别 TS
```shell
yarn babel --extensions '.ts' ./index.ts
```

## 源码

`src/utils.ts`
```ts
/** 保留N位小数，不执行四舍五入，保留0位小数=取整 */
export function formatDecimal(dec: number, fixes: number) {
  //...
}
```

`src/unit-transform.ts`
```ts
import { formatDecimal } from './utils';
type TransformOptions = {
  scale?: number;
  unit: 'c' | 'f';
};
export function createUnitTransform(opts: TransformOptions) {
  //...
}
```

入口文件`src/index.ts`
```ts
export * from './utils'
export * from './unit-transform'
export { createUnitTransform as default } from './unit-transform'
```

对开发者而言，这样更方便使用
```js
// import { formatDecimal, createUnitTransform } from 'unit-transform'
// import createUnitTransform from 'unit-transform' 这里等同于 default
```

## 进行打包输出

### Babel编译CJS
`babel.config.json` 只能配置单个输出，为了能针对特定的配置而生成不同的代码，这里要用到 `.babelrc.json` 配置文件，它的格式和 `babel.config.json` 一样。
```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-typescript"
  ]
}
```
显式指定配置，目标位置 `dist/cjs`，编译 `src/` 的代码，同时生成 SourceMap
```shell
yarn babel --config-file ./.babelrc.cjs.json --extensions '.ts' -d dist/cjs/ src/

# 编译完毕，会在 dist/cjs 看到结果
# dist/cjs/index.js 由于是 CJS 格式，可以通过 node 命令行直接引用
# 例子: node -e 'console.log(require("./dist/cjs"))
```

### Babel编译ESM

如果不用 TypeScript，源代码就是一份 ES Module 格式的代码,所以 Babel 在这里再编译一次可以视为仅仅把 TypeScript 转换成 JavaScript。

`.babelrc.esm.json`配置文件：
```json
{
  "presets": [
    ["@babel/preset-env", {
      "modules": false
    }],
    "@babel/preset-typescript"
  ]
}
```
显式指定配置，目标位置 `dist/esm`，编译 `src/` 的代码，同时生成 SourceMap
```shell
yarn babel --config-file ./.babelrc.esm.json --extensions '.ts' --source-maps -d dist/esm/ src/

# 编译完毕，会在 dist/esm 看到结果
# dist/esm 并不是兼容 Node 的版本，所以只能通过支持 ESM 的工具识别，如: webpack
```
### Rollup+Babel打包UMD

安装Rollup：
- `rollup` Rollup 核心包
- `@rollup/plugin-node-resolve` 能让 Rollup 引用其他模块的插件
- `@rollup/plugin-babel` 能让 Rollup 借助 Babel 编译的插件
- `@rollup/plugin-typescript` 能让 Rollup 启动时读取 TypeScript 配置文件
- `rollup-plugin-terser` 能让 Rollup 对输出结果进行 Terser 压缩的插件
- `rollup-plugin-bundle-size` 能让 Rollup 显示 gzip 压缩前后代码大小的插件

```shell
yarn add -D rollup @rollup/plugin-node-resolve @rollup/plugin-babel @rollup/plugin-typescript rollup-plugin-terser rollup-plugin-bundle-size
```
Rollup 可以支持 TypeScript，故直接使用 TypeScript 编写配置，避开不必要的错误
新建`rollup.config.ts`
```ts
import { defineConfig } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
// @ts-ignore
import bundleSize from 'rollup-plugin-bundle-size'

export default defineConfig({
  input: './src/index.ts',
  output: [
    {
      file: './dist/unit_transform.umd.js',
      format: 'umd',
      name: 'unit_transform', // umd 导出的名称
      sourcemap: 'inline', // 把 SourceMap 写在目标代码里面
    },
    {
      file: './dist/unit_transform.umd.min.js',
      format: 'umd',
      name: 'unit_transform',
      plugins: [terser()],  //经过 Terser 压缩的 UMD 代码
    },
  ],
  plugins: [
    bundleSize(), // e.g. 命令行附带 unit_transform.umd.js: 2.91 kB → 923 B (gzip)
    nodeResolve({ extensions: ['.ts'] }),
    babel({ extensions: ['.ts'] }),
  ],
})
```
`@rollup/plugin-babel` 在 Rollup 运行时会读取 Babel 默认配置文件，如根目录的 `babel.config.json`

注意 `nodeResolve` 和 `babel`，甚至 `Rollup` 本身只识别 `.js 代码`，对于 TypeScript 项目，要配置 `extensions` 让它们识别 `TS 文件`。

执行打包
```shell
yarn rollup -c rollup.config.ts --configPlugin typescript

# 打包完成，在 dist/ 看到结果
# 挑其中一份 UMD 代码，复制到浏览器 Console 执行
# 即可通过 unit_transform、window.unit_transform 调用模块
# 其中变量 unit_transform 即是 UMD 导出的名称
```

## 生成`.d.ts`类型声明文件

修改`tsconfig.json`

- `rootDir` 相对于 src/ 生成
- `declaration` 启用生成 .d.ts
- `emitDeclarationOnly` 仅生成 .d.ts ，不生成JS (JS 部分已经由 Babel 生成了)

- `declarationDir` 生成 .d.ts 的目标目录
- `include` 仅对 src/ 内的 TS 生成 .d.ts (编译器将专注 src/ 生成，忽略根目录和测试目录的 TS 文件)

```json
{
  "compilerOptions": {
    ...
+   "rootDir": "./src",
+   "declaration": true,
+   "emitDeclarationOnly": true,
+   "declarationDir": "./dist/types",
  },
+ "include": ["./src"]
}
```
执行：

```shell
yarn tsc

# 生成完毕，结果存放 dist/types 
```

## 生成CJS根入口

根目录增加index.js
```js
// 在此之前，CommonJS 需要包名和路径引用:
// const unit_transform = require('unit_transform/dist/cjs')

module.exports = require('./dist/cjs')
module.exports.default = require('./dist/cjs').default
// 此时，CommonJS 可以通过包名直接引用:
// const unit_transform = require('unit_transform')
```

同时应该把入口写在 package.json 里面:
```json
{
  ...
+ "main": "dist/cjs/index.js",
  ...
}
```
## 生成ESM根入口

对于 ES Module，webpack 会读取 package.json 中的 module 作为模块入口。

```json
{
  ...
  "main": "dist/cjs/index.js",
+ "module": "dist/esm/index.js",
+ "sideEffects": false,
  ...
}
```

## 生成类型声明入口

```json
{
  ...
  "main": "dist/cjs/index.js",
  "module": "dist/esm/index.js",
  "sideEffects": false,
+ "types": "dist/types/index.d.ts",
  ...
}
```

## 为Husky增加配置

```shell
yarn husky add .husky/pre-commit "yarn build && git add dist/"
```