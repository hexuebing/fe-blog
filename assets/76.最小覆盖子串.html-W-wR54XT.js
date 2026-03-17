import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as p}from"./app-eAFVDXBg.js";const t={},e=p(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">t</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minWindow</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> need <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token comment">//需要覆盖的字符串频数</span>
    <span class="token keyword">let</span> window <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token comment">//滑动窗口的字符串频数</span>
    <span class="token comment">//统计t中字符频数</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> a <span class="token keyword">of</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        need<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>need<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//左右指针</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> valid <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//滑动窗口中能覆盖的字符种类数</span>
    <span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span><span class="token comment">//最小覆盖子串的起始索</span>
        len <span class="token operator">=</span> Number<span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">;</span><span class="token comment">//最小覆盖子串长度</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//进入滑动窗口右边的字符</span>
        <span class="token keyword">let</span> c <span class="token operator">=</span> s<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
        right<span class="token operator">++</span><span class="token punctuation">;</span><span class="token comment">//右移窗口</span>
        <span class="token comment">//如果当前字符在need字符中 更新window中字符数</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>need<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            window<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>window<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token comment">//如果当前窗口和需要的字符数量一致时，字符种类+1</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">==</span> need<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                valid<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//字符种类与需要的字符个数一致时，就收缩窗口</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>valid <span class="token operator">==</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>need<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//当前窗口长度小于之前窗口的长度len 更新最小覆盖子串的起始位置和长度</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left <span class="token operator">&lt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                start <span class="token operator">=</span> left<span class="token punctuation">;</span>
                len <span class="token operator">=</span> right <span class="token operator">-</span> left<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">let</span> d <span class="token operator">=</span> s<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//需要被移除的字符</span>
            left<span class="token operator">++</span><span class="token punctuation">;</span><span class="token comment">//左移窗口 从窗口中移除字符</span>
            <span class="token comment">//如果在需要的字符中 更新window中字符数</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>need<span class="token punctuation">[</span>d<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//如果当前窗口和需要的字符数量一致时，字符种类-1</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">[</span>d<span class="token punctuation">]</span> <span class="token operator">==</span> need<span class="token punctuation">[</span>d<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    valid<span class="token operator">--</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                window<span class="token punctuation">[</span>d<span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//没有找到覆盖子串 返回&#39;&#39; 否则返回覆盖子串</span>
    <span class="token keyword">return</span> len <span class="token operator">==</span> Number<span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span> <span class="token operator">?</span> <span class="token string">&quot;&quot;</span> <span class="token operator">:</span> s<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","76.最小覆盖子串.html.vue"]]);export{r as default};
