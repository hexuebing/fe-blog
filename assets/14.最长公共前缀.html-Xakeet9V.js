import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as t}from"./app-eAFVDXBg.js";const p={},e=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**

* <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">strs</span>

* <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>

*/</span>

<span class="token keyword">var</span> <span class="token function-variable function">longestCommonPrefix</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">strs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span>strs<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
	
	<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
	
	<span class="token keyword">const</span> length <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token operator">...</span>strs<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span>
	
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	
		<span class="token keyword">const</span> char <span class="token operator">=</span> strs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span>
		
		<span class="token keyword">const</span> isAll <span class="token operator">=</span> strs<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> char<span class="token punctuation">)</span>
		
		<span class="token keyword">if</span> <span class="token punctuation">(</span>isAll<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		
			result <span class="token operator">+=</span> char
		
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		
			<span class="token keyword">break</span>
		
		<span class="token punctuation">}</span>
	
	<span class="token punctuation">}</span>
	
	<span class="token keyword">return</span> result

<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","14.最长公共前缀.html.vue"]]);export{k as default};
