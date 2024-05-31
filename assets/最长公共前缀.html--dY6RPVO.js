import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as t}from"./app-jkSPntuB.js";const e={},p=t(`<h1 id="最长公共前缀" tabindex="-1"><a class="header-anchor" href="#最长公共前缀" aria-hidden="true">#</a> 最长公共前缀</h1><p>编写一个函数来查找字符串数组中的最长公共前缀。</p><p>如果不存在公共前缀，返回空字符串 &quot;&quot;。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>示例 1：

输入：strs = [&quot;flower&quot;,&quot;flow&quot;,&quot;flight&quot;]
输出：&quot;fl&quot;
示例 2：

输入：strs = [&quot;dog&quot;,&quot;racecar&quot;,&quot;car&quot;]
输出：&quot;&quot;
解释：输入不存在公共前缀。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="任意两个开始比对获取公共前缀" tabindex="-1"><a class="header-anchor" href="#任意两个开始比对获取公共前缀" aria-hidden="true">#</a> 任意两个开始比对获取公共前缀</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">strs</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">longestCommonPrefix</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">strs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">getComPrefix</span><span class="token punctuation">(</span><span class="token parameter">str1<span class="token punctuation">,</span> str2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>i <span class="token operator">&lt;</span> str1<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;</span> str2<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> str1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> str2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            i<span class="token operator">++</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 如果没有公共前缀，返回空字符串</span>
        <span class="token keyword">return</span> i <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> str1<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 假定第一个就是最短字符串</span>
    <span class="token keyword">let</span> commonPrefix <span class="token operator">=</span> strs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> str <span class="token keyword">of</span> strs<span class="token punctuation">)</span><span class="token punctuation">{</span>
        commonPrefix <span class="token operator">=</span> <span class="token function">getComPrefix</span><span class="token punctuation">(</span>commonPrefix<span class="token punctuation">,</span> str<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> commonPrefix
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","最长公共前缀.html.vue"]]);export{d as default};
