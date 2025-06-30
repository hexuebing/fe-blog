import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as t}from"./app-3sod6nVV.js";const p={},e=t(`<h1 id="实现文字输入效果" tabindex="-1"><a class="header-anchor" href="#实现文字输入效果" aria-hidden="true">#</a> 实现文字输入效果</h1><p>border-color 使用动画控制显示与否，实现文字输入效果。</p><p>示例代码：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Pure CSS Typing animation.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>typing步进动画控制文字显示，cursor-blink动画控制光标闪烁</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">body </span><span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h1 </span><span class="token punctuation">{</span>
    <span class="token property">font</span><span class="token punctuation">:</span> bold 200% Consolas<span class="token punctuation">,</span> Monaco<span class="token punctuation">,</span> monospace<span class="token punctuation">;</span>
    <span class="token property">border-right</span><span class="token punctuation">:</span> 0.1em solid<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 16.5em<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 26ch<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 2em 1em<span class="token punctuation">;</span>
    <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">animation</span><span class="token punctuation">:</span> typing 3s <span class="token function">steps</span><span class="token punctuation">(</span>26<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">,</span>
        cursor-blink 0.3s step-end infinite alternate<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> typing</span> <span class="token punctuation">{</span>
    <span class="token keyword">from</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> cursor-blink</span> <span class="token punctuation">{</span>
    <span class="token selector">50% </span><span class="token punctuation">{</span>
        <span class="token property">border-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[e];function o(i,l){return s(),a("div",null,c)}const d=n(p,[["render",o],["__file","文字输入效果.html.vue"]]);export{d as default};
