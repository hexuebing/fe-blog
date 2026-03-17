import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as t}from"./app-eAFVDXBg.js";const e={},p=t(`<p>这是一个经典的“双指针”问题。我们可以使用两个指针，一个从数组开头开始（左指针），一个从数组末尾开始（右指针），互相交换元素，然后向中间移动，直到两个指针相遇。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>character<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span> Do not return anything, modify s in-place instead.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseString</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 初始化左指针在起始位置，右指针在末尾位置</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> right <span class="token operator">=</span> s<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 当左指针小于右指针时，持续交换</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 使用 ES6 的解构赋值语法交换元素，简单且直观</span>
        <span class="token punctuation">[</span>s<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> s<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>s<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">,</span> s<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 移动指针</span>
        left<span class="token operator">++</span><span class="token punctuation">;</span>
        right<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[p];function o(l,i){return s(),a("div",null,c)}const k=n(e,[["render",o],["__file","344.反转字符串.html.vue"]]);export{k as default};
