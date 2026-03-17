import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as t}from"./app-eAFVDXBg.js";const p={},e=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**

* <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">path</span>

* <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>

*/</span>

<span class="token keyword">var</span> <span class="token function-variable function">simplifyPath</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token keyword">const</span> arr <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span><span class="token operator">!</span>item<span class="token punctuation">)</span>
	
	<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
	
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> p <span class="token keyword">of</span> arr<span class="token punctuation">)</span><span class="token punctuation">{</span>
	
		<span class="token keyword">if</span><span class="token punctuation">(</span>p <span class="token operator">===</span> <span class="token string">&#39;..&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		
			result<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		
		<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>p <span class="token operator">===</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 如果是.不需要处理</span>
		
			<span class="token keyword">continue</span><span class="token punctuation">;</span>
		
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
		
			result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
		
		<span class="token punctuation">}</span>
	
	<span class="token punctuation">}</span>
	
	<span class="token keyword">return</span> <span class="token string">&#39;/&#39;</span><span class="token operator">+</span>result<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span><span class="token operator">!</span>item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","71.简化路径.html.vue"]]);export{k as default};
