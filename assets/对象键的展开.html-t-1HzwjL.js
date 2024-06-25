import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as t}from"./app-fAYvzdnY.js";const p={},e=t(`<h1 id="对象键的展开" tabindex="-1"><a class="header-anchor" href="#对象键的展开" aria-hidden="true">#</a> 对象键的展开</h1><p>记录一道面试题，当时竟然没做出来：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token string-property property">&quot;A.B.C.D&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
	<span class="token string-property property">&quot;A.B.E.F&quot;</span><span class="token operator">:</span><span class="token number">2</span>
<span class="token punctuation">}</span>
<span class="token comment">// 写一个方法实现如下结果</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token constant">A</span><span class="token operator">:</span><span class="token punctuation">{</span>
		<span class="token constant">B</span><span class="token operator">:</span><span class="token punctuation">{</span>
			<span class="token constant">C</span><span class="token operator">:</span><span class="token punctuation">{</span>
				<span class="token constant">D</span><span class="token operator">:</span><span class="token number">1</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token constant">E</span><span class="token operator">:</span><span class="token punctuation">{</span>
				<span class="token constant">F</span><span class="token operator">:</span><span class="token number">2</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">parseObject</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> keys <span class="token operator">=</span> key<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> target <span class="token operator">=</span> result<span class="token punctuation">;</span> <span class="token comment">// 这个是重点</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> keys<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> k <span class="token operator">=</span> keys<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> keys<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                target<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                target<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> target<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
                target <span class="token operator">=</span> target<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">// 将新对象赋值给target，让下次直接能访问新对象的属性</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;A.B.C.D&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;A.B.E.F&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> parsedObj <span class="token operator">=</span> <span class="token function">parseObject</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>parsedObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","对象键的展开.html.vue"]]);export{k as default};
