import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as t}from"./app-eAFVDXBg.js";const e={},p=t(`<h3 id="方案一-暴力解法-修正你的代码" tabindex="-1"><a class="header-anchor" href="#方案一-暴力解法-修正你的代码" aria-hidden="true">#</a> 方案一：暴力解法（修正你的代码）</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">maxSlidingWindow</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">&gt;=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>nums<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> right <span class="token operator">=</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    
    <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 使用 slice 获取窗口（不修改原数组），然后求最大值</span>
        <span class="token keyword">const</span> window <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>window<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        left<span class="token operator">++</span><span class="token punctuation">;</span>
        right<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方案二-单调队列-最优解-o-n" tabindex="-1"><a class="header-anchor" href="#方案二-单调队列-最优解-o-n" aria-hidden="true">#</a> 方案二：单调队列（最优解，O(n)）</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>=== 单调队列解法原理 ===

维护一个单调递减的双端队列（存索引）
队列特点：
  1. 队列只维护索引，队首永远是当前窗口最大值的索引
  2. 新元素入队前，先移除所有比它小的元素
  3. 移除已出窗口的元素（队首索引 &lt; i-k+1）

--- 处理 nums[0] = 1 ---
  入队索引 0，队列: [0]

--- 处理 nums[1] = 3 ---
  移除队尾 0（值 1 &lt; 3）
  入队索引 1，队列: [1]

--- 处理 nums[2] = -1 ---
  入队索引 2，队列: [1, 2]
  窗口: [1, 3, -1], 最大值: 3 (索引 1)

--- 处理 nums[3] = -3 ---
  入队索引 3，队列: [1, 2, 3]
  窗口: [3, -1, -3], 最大值: 3 (索引 1)

--- 处理 nums[4] = 5 ---
  移除队首 1（已出窗口）
  移除队尾 3（值 -3 &lt; 5）
  移除队尾 2（值 -1 &lt; 5）
  入队索引 4，队列: [4]
  窗口: [-1, -3, 5], 最大值: 5 (索引 4)

--- 处理 nums[5] = 3 ---
  入队索引 5，队列: [4, 5]
  窗口: [-3, 5, 3], 最大值: 5 (索引 4)

--- 处理 nums[6] = 6 ---
  移除队尾 5（值 3 &lt; 6）
  移除队尾 4（值 5 &lt; 6）
  入队索引 6，队列: [6]
  窗口: [5, 3, 6], 最大值: 6 (索引 6)

--- 处理 nums[7] = 7 ---
  移除队尾 6（值 6 &lt; 7）
  入队索引 7，队列: [7]
  窗口: [3, 6, 7], 最大值: 7 (索引 7)

最终结果: [3, 3, 5, 5, 6, 7]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 单调队列解法（推荐）
 * 时间复杂度: O(n)
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxSlidingWindow</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">&gt;=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>nums<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> deque <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">// 双端队列，存储索引</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1. 移除已出窗口的元素（队首索引 &lt; i-k+1）</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>deque<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> deque<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> i <span class="token operator">-</span> k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            deque<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token comment">// 2. 移除比当前元素小的元素（维护单调递减）</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>deque<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>deque<span class="token punctuation">[</span>deque<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            deque<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token comment">// 3. 当前索引入队</span>
        deque<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 4. 窗口形成后，记录最大值（队首）</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>deque<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="复杂度对比" tabindex="-1"><a class="header-anchor" href="#复杂度对比" aria-hidden="true">#</a> 复杂度对比</h2><table><thead><tr><th>方法</th><th>时间复杂度</th><th>空间复杂度</th></tr></thead><tbody><tr><td>暴力解法</td><td>O(n×k)</td><td>O(1)</td></tr><tr><td>单调队列</td><td>O(n)</td><td>O(k)</td></tr><tr><td><strong>单调队列的核心思想</strong>：每个元素最多入队一次、出队一次，所以总时间复杂度是 O(n)！</td><td></td><td></td></tr></tbody></table>`,7),i=[p];function c(o,l){return s(),a("div",null,i)}const r=n(e,[["render",c],["__file","239.滑动窗口最大值.html.vue"]]);export{r as default};
