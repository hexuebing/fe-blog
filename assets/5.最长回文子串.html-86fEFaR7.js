import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as t}from"./app-eAFVDXBg.js";const p={},e=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">longestPalindrome</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> s<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> maxLength <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token comment">// 辅助函数：从中心向两边扩展</span>
    <span class="token comment">// left: 左边界索引, right: 右边界索引</span>
    <span class="token keyword">function</span> <span class="token function">expandAroundCenter</span><span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 当左右不越界且字符相等时，向外扩展</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> right <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">===</span> s<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            left<span class="token operator">--</span><span class="token punctuation">;</span>
            right<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 循环结束时，s[left] !== s[right]，或者越界</span>
        <span class="token comment">// 回文串的长度 = (right - 1) - (left + 1) + 1 = right - left - 1</span>
        <span class="token keyword">return</span> right <span class="token operator">-</span> left <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 情况1：以当前字符为中心（处理奇数长度，如 &quot;aba&quot;）</span>
        <span class="token keyword">let</span> len1 <span class="token operator">=</span> <span class="token function">expandAroundCenter</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 情况2：以当前字符和下一个字符之间为中心（处理偶数长度，如 &quot;abba&quot;）</span>
        <span class="token keyword">let</span> len2 <span class="token operator">=</span> <span class="token function">expandAroundCenter</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 取两种情况中的最大长度</span>
        <span class="token keyword">let</span> len <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>len1<span class="token punctuation">,</span> len2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 如果发现了更长的回文串，更新起始位置和最大长度</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">&gt;</span> maxLength<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            maxLength <span class="token operator">=</span> len<span class="token punctuation">;</span>
            <span class="token comment">// 根据长度和中心点计算起始索引</span>
            <span class="token comment">// 举例：i=2, len=5 (abcba), start = 2 - 2 = 0</span>
            <span class="token comment">// 举例：i=2, len=4 (abba), start = 2 - 1 = 1</span>
            start <span class="token operator">=</span> i <span class="token operator">-</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> start <span class="token operator">+</span> maxLength<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","5.最长回文子串.html.vue"]]);export{k as default};
