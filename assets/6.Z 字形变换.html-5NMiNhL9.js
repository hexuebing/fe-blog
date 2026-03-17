import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as p}from"./app-eAFVDXBg.js";const e={},t=p(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">numRows</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">convert</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> numRows</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 修复：如果行数为1，直接返回原字符串，避免后续索引越界</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>numRows <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> s<span class="token punctuation">;</span>

    <span class="token comment">// 优化：直接初始化字符串数组，省去最后的 flat 操作</span>
    <span class="token keyword">const</span> rows <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>numRows<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">let</span> curRow <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">// 优化：变量名改为 goingDown，语义更清晰</span>
    <span class="token keyword">let</span> goingDown <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> 

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> char <span class="token operator">=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        rows<span class="token punctuation">[</span>curRow<span class="token punctuation">]</span> <span class="token operator">+=</span> char<span class="token punctuation">;</span> <span class="token comment">// 直接拼接字符串</span>
        
        <span class="token comment">// 在到达顶部或底部时改变方向</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>curRow <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> curRow <span class="token operator">===</span> numRows <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            goingDown <span class="token operator">=</span> <span class="token operator">!</span>goingDown<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token comment">// 根据方向更新行号</span>
        curRow <span class="token operator">+=</span> goingDown <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 直接拼接所有行</span>
    <span class="token keyword">return</span> rows<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[t];function c(l,i){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","6.Z 字形变换.html.vue"]]);export{k as default};
