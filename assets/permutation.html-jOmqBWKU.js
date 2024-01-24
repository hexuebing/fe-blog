import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as t}from"./app-QWuBgRdG.js";const e={},p=t(`<h1 id="无重复字符串的排列组合" tabindex="-1"><a class="header-anchor" href="#无重复字符串的排列组合" aria-hidden="true">#</a> 无重复字符串的排列组合</h1><p>编写一种方法，计算某字符串的所有排列组合，字符串每个字符均不相同。</p><p>示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 输入：S = &quot;qwe&quot;
 输出：[&quot;qwe&quot;, &quot;qew&quot;, &quot;wqe&quot;, &quot;weq&quot;, &quot;ewq&quot;, &quot;eqw&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">/**
 * @param {string} S
 * @return {string[]}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">permutation</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">S</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token constant">S</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> length <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">function</span> <span class="token function">travel</span><span class="token punctuation">(</span><span class="token parameter">str<span class="token punctuation">,</span> strArr <span class="token operator">=</span> arr<span class="token punctuation">,</span> deep <span class="token operator">=</span> <span class="token number">0</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>deep <span class="token operator">===</span> length<span class="token punctuation">)</span><span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        strArr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index<span class="token punctuation">,</span> array</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">travel</span><span class="token punctuation">(</span>str <span class="token operator">+</span> item<span class="token punctuation">,</span> array<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">!==</span> item<span class="token punctuation">)</span><span class="token punctuation">,</span> deep<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">travel</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> result
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[p];function c(i,l){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","permutation.html.vue"]]);export{k as default};
