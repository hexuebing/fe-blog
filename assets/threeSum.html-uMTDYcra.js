import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as t}from"./app-YoTPqgcu.js";const p={},o=t(`<h1 id="三数之和" tabindex="-1"><a class="header-anchor" href="#三数之和" aria-hidden="true">#</a> 三数之和</h1><p>给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。</p><p>注意：答案中不可以包含重复的三元组。</p><p>示例：</p><p>给定数组 nums = [-1, 0, 1, 2, -1, -4]，</p><p>满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">function</span> <span class="token function">threeSum</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
	<span class="token keyword">const</span> newNums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>nums<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span>val1<span class="token punctuation">,</span> val2<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> val1 <span class="token operator">-</span> val2<span class="token punctuation">)</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> newNums<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> newNums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">let</span> left <span class="token operator">=</span> i
		<span class="token keyword">let</span> min <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
		<span class="token keyword">let</span> right <span class="token operator">=</span> newNums<span class="token punctuation">.</span>length <span class="token operator">-</span><span class="token number">1</span>
		<span class="token keyword">while</span><span class="token punctuation">(</span>min <span class="token operator">&lt;</span> right<span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>newNums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">+</span> newNums<span class="token punctuation">[</span>min<span class="token punctuation">]</span> <span class="token operator">+</span> newNums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> right<span class="token operator">--</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>newNums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">+</span> newNums<span class="token punctuation">[</span>min<span class="token punctuation">]</span> <span class="token operator">+</span> newNums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> min<span class="token operator">++</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>newNums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">+</span> newNums<span class="token punctuation">[</span>min<span class="token punctuation">]</span> <span class="token operator">+</span> newNums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>newNums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> newNums<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">,</span> newNums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">const</span> <span class="token function-variable function">threeSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">debugger</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> newNums <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">val1<span class="token punctuation">,</span> val2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> val1 <span class="token operator">-</span> val2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> newNums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> target <span class="token operator">=</span> newNums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> start <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> 
		<span class="token keyword">let</span> end <span class="token operator">=</span> newNums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>newNums<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">+</span> newNums<span class="token punctuation">[</span>end<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> start<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>newNums<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">+</span> newNums<span class="token punctuation">[</span>end<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> end<span class="token operator">--</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>newNums<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">+</span> newNums<span class="token punctuation">[</span>end<span class="token punctuation">]</span> <span class="token operator">===</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>target<span class="token punctuation">,</span> newNums<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">,</span> newNums<span class="token punctuation">[</span>end<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newNums<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">===</span> newNums<span class="token punctuation">[</span>start <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> start<span class="token operator">++</span><span class="token punctuation">;</span>
        start<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newNums<span class="token punctuation">[</span>end<span class="token punctuation">]</span> <span class="token operator">===</span> newNums<span class="token punctuation">[</span>end <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> end<span class="token operator">--</span><span class="token punctuation">;</span>
        end<span class="token operator">--</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),e=[o];function c(u,l){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","threeSum.html.vue"]]);export{r as default};