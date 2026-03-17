import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as p}from"./app-eAFVDXBg.js";const e={},t=p(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isValid</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1. 奇数长度直接判断为 false (优化步骤)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>length <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    <span class="token comment">// 2. 定义括号的映射关系： key 为右括号，value 为对应的左括号</span>
    <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;)&#39;</span><span class="token operator">:</span> <span class="token string">&#39;(&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;]&#39;</span><span class="token operator">:</span> <span class="token string">&#39;[&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;}&#39;</span><span class="token operator">:</span> <span class="token string">&#39;{&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 3. 初始化栈</span>
    <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 4. 遍历字符串</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> char <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果 map[char] 存在，说明当前字符是右括号</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> topElement <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

            <span class="token comment">// 检查栈顶的左括号是否与当前右括号匹配</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>topElement <span class="token operator">!==</span> map<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 如果不是右括号，说明是左括号，压入栈中</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 5. 遍历结束后，如果栈为空，说明全部匹配成功</span>
    <span class="token keyword">return</span> stack<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[t];function c(l,i){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","20.有效的括号.html.vue"]]);export{k as default};
