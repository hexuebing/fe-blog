---
icon: javascript
date: 2022-06-21
category:
  - JavaScript
tag:
  - FileReader
star: true
sticky: true
---
# 脚本defer & async

# defer

`defer` 特性告诉浏览器不要等待脚本。相反，浏览器将继续处理 HTML，构建 DOM。脚本会“在后台”下载，然后 **等 DOM 构建完成后，脚本才会执行**。

换句话说：

- 具有 `defer` 特性的脚本不会阻塞页面。
- 具有 `defer` 特性的脚本总是要等到 DOM 解析完毕，但在 `DOMContentLoaded` 事件之前执行。

<aside>
💡 `defer` 特性仅适用于外部脚本

</aside>

具有**`defer`特性的脚本保持其相对顺序**，就像常规脚本一样。

```html
<script defer src="https://javascript.info/article/script-async-defer/long.js"></script>
<script defer src="https://javascript.info/article/script-async-defer/small.js"></script>
```

defer 特性除了告诉浏览器“不要阻塞页面”之外，还可以确保脚本执行的相对顺序。因此，即使 small.js 先加载完成，它也需要等到 long.js 执行结束才会被执行。

# async

`async` 特性意味着脚本是完全独立的：

- 浏览器不会因 `async` 脚本而阻塞（与 `defer` 类似）。
- 其他脚本不会等待 `async` 脚本加载完成，同样，`async` 脚本也不会等待其他脚本。
- `DOMContentLoaded` 和异步脚本不会彼此等待：
    - `DOMContentLoaded` 可能会发生在异步脚本之前（如果异步脚本在页面完成后才加载完成）
    - `DOMContentLoaded` 也可能发生在异步脚本之后（如果异步脚本很短，或者是从 HTTP 缓存中加载的）

```html
<p>...content before scripts...</p>

<script>
  document.addEventListener('DOMContentLoaded', () => alert("DOM ready!"));
</script>

<script async src="https://javascript.info/article/script-async-defer/long.js"></script>
<script async src="https://javascript.info/article/script-async-defer/small.js"></script>

<p>...content after scripts...</p>
```

谁先加载完毕谁先执行

比较适合广告加载，这不依赖我们的脚本，可以在加载完毕执行。

# 动态脚本

```jsx
let script = document.createElement('script');
script.src = "/article/script-async-defer/long.js";
document.body.append(script); // (*)
```

- 它们不会等待任何东西，也没有什么东西会等它们。
- 先加载完成的脚本先执行（“加载优先”顺序）。

显示设置 `script.async = false` 则按照 defer 规则，顺序执行。