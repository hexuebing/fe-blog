import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,f as t}from"./app-rgmlk_XC.js";const p={},e=t(`<h1 id="脚本defer-async" tabindex="-1"><a class="header-anchor" href="#脚本defer-async" aria-hidden="true">#</a> 脚本defer &amp; async</h1><h1 id="defer" tabindex="-1"><a class="header-anchor" href="#defer" aria-hidden="true">#</a> defer</h1><p><code>defer</code> 特性告诉浏览器不要等待脚本。相反，浏览器将继续处理 HTML，构建 DOM。脚本会“在后台”下载，然后 <strong>等 DOM 构建完成后，脚本才会执行</strong>。</p><p>换句话说：</p><ul><li>具有 <code>defer</code> 特性的脚本不会阻塞页面。</li><li>具有 <code>defer</code> 特性的脚本总是要等到 DOM 解析完毕，但在 <code>DOMContentLoaded</code> 事件之前执行。</li></ul><aside> 💡 \`defer\` 特性仅适用于外部脚本 </aside><p>具有**<code>defer</code>特性的脚本保持其相对顺序**，就像常规脚本一样。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">defer</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://javascript.info/article/script-async-defer/long.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">defer</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://javascript.info/article/script-async-defer/small.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>defer 特性除了告诉浏览器“不要阻塞页面”之外，还可以确保脚本执行的相对顺序。因此，即使 small.js 先加载完成，它也需要等到 long.js 执行结束才会被执行。</p><h1 id="async" tabindex="-1"><a class="header-anchor" href="#async" aria-hidden="true">#</a> async</h1><p><code>async</code> 特性意味着脚本是完全独立的：</p><ul><li>浏览器不会因 <code>async</code> 脚本而阻塞（与 <code>defer</code> 类似）。</li><li>其他脚本不会等待 <code>async</code> 脚本加载完成，同样，<code>async</code> 脚本也不会等待其他脚本。</li><li><code>DOMContentLoaded</code> 和异步脚本不会彼此等待： <ul><li><code>DOMContentLoaded</code> 可能会发生在异步脚本之前（如果异步脚本在页面完成后才加载完成）</li><li><code>DOMContentLoaded</code> 也可能发生在异步脚本之后（如果异步脚本很短，或者是从 HTTP 缓存中加载的）</li></ul></li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>...content before scripts...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;DOMContentLoaded&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;DOM ready!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">async</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://javascript.info/article/script-async-defer/long.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">async</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://javascript.info/article/script-async-defer/small.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>...content after scripts...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>谁先加载完毕谁先执行</p><p>比较适合广告加载，这不依赖我们的脚本，可以在加载完毕执行。</p><h1 id="动态脚本" tabindex="-1"><a class="header-anchor" href="#动态脚本" aria-hidden="true">#</a> 动态脚本</h1><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">let</span> script <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;script&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
script<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&quot;/article/script-async-defer/long.js&quot;</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>script<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// (*)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>它们不会等待任何东西，也没有什么东西会等它们。</li><li>先加载完成的脚本先执行（“加载优先”顺序）。</li></ul><p>显示设置 <code>script.async = false</code> 则按照 defer 规则，顺序执行。</p>`,19),c=[e];function o(l,i){return n(),a("div",null,c)}const d=s(p,[["render",o],["__file","script.html.vue"]]);export{d as default};