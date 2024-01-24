---
icon: npm
date: 2022-06-17
category:
  - CLI
tag:
  - NPM
star: true
sticky: true
---
# NPM 版本管理

## npm install 问题

package.json中对应版本前为`^` 符号，这样就可能存在本次安装的包版本有升级。

升级从左向右的第一个不为0的版本

> 注意：以上说法不一定正确，持保留意见。可能是版本升级
> 

## 标准版本
| Syntax | Description | 版本示例 |
| --- | ----------- | --- |
| New product | Start with 1.0.0 | 1.0.0 |
| Patch release | Increment the third digit（位数） | 1.0.1 |
| Minor （次要）release | Increment the middle digit and reset last digit to zero | 1.1.0 |
| Major（重大） release | Increment the first digit and reset middle and last digits to zero | 2.0.0 |

## 先行版本

---

先行版本号可以加到“主版本号.次版本号.修订号”的后面，先加上一个连接号再加上一连串以句点分隔的标识符和版本编译信息。

内部版本(`alpha`):

公测版本(`beta`):

正式版本的候选版本`rc`: 即 `Release candiate`

```bash
$ npm view vue versions

  '2.6.13',         '2.6.14',               '3.0.0-alpha.0',
  '3.0.0-alpha.1',  '3.0.0-alpha.2',        '3.0.0-alpha.3',
    ...
  '3.0.0-alpha.13', '3.0.0-beta.1',         '3.0.0-beta.2',
  '3.0.0-beta.3',   '3.0.0-beta.4',         '3.0.0-beta.5',
    ...
  '3.0.0-beta.24',  '3.0.0-rc.1',           '3.0.0-rc.2',
    ...
  '3.0.0-rc.12',    '3.0.0-rc.13',          '3.0.0',
  '3.0.1',          '3.0.2',                '3.0.3',
    ...
  '3.0.10',         '3.0.11',               '3.1.0-beta.1',
  '3.1.0-beta.2',   '3.1.0-beta.3',         '3.1.0-beta.4',
  '3.1.0-beta.5',   '3.1.0-beta.6',         '3.1.0-beta.7',
  '3.1.0',          '3.1.1'
```

## 依赖版本管理


版本号中引用了 `~` 和 `^` 符号：

- `~`: 当安装依赖时获取到有新版本时，安装到 `x.y.z` 中 `z` 的最新的版本。即保持主版本号、次版本号不变的情况下，保持修订号的最新版本。
- `^`: 当安装依赖时获取到有新版本时，安装到 `x.y.z` 中 `y` 和 `z` 都为最新版本。 即保持主版本号不变的情况下，保持次版本号、修订版本号为最新版本。

在 `package.json` 文件中最常见的应该是 `"yargs": "^14.0.0"` 这种格式的 依赖, 因为我们在使用 `npm install package` 安装包时，`npm` 默认安装当前最新版本，然后在所安装的版本号前加 `^` 号。

注意，当主版本号为 `0` 的情况，会被认为是一个不稳定版本，情况与上面不同：

- 主版本号和次版本号都为 `0`: `^0.0.z`、`~0.0.z` 都被当作固定版本，安装依赖时均不会发生变化。
- 主版本号为 `0`: `^0.y.z` 表现和 `~0.y.z` 相同，只保持修订号为最新版本。

小提示：

```bash
# 查看仓库所有版本
npm view vue versions

# 查看过期的库
npm outdated

# 升级库
npm update
```