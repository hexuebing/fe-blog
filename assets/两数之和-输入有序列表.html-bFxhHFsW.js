import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-cQ6ZO-Pe.js";const t={},p=e(`<h1 id="两数之和-输入有序列表" tabindex="-1"><a class="header-anchor" href="#两数之和-输入有序列表" aria-hidden="true">#</a> 两数之和-输入有序列表</h1><p>以长度为 2 的整数数组 [index1, index2] 的形式返回这两个整数的下标 index1 和 index2。</p><ul><li><p>你可以假设每个输入 只对应唯一的答案 ，而且你 不可以 重复使用相同的元素。</p></li><li><p>你所设计的解决方案必须只使用常量级的额外空间。</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>示例 1：

输入：numbers = [2,7,11,15], target = 9
输出：[1,2]
解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。
示例 2：

输入：numbers = [2,3,4], target = 6
输出：[1,3]
解释：2 与 4 之和等于目标数 6 。因此 index1 = 1, index2 = 3 。返回 [1, 3] 。
示例 3：

输入：numbers = [-1,0], target = -1
输出：[1,2]
解释：-1 与 0 之和等于目标数 -1 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><p>双指针移动：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">numbers<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> end <span class="token operator">=</span> numbers<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>start <span class="token operator">&lt;</span> end<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">const</span> count <span class="token operator">=</span> numbers<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">+</span> numbers<span class="token punctuation">[</span>end<span class="token punctuation">]</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>count <span class="token operator">===</span> target<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span>start<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> end<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>count <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> start<span class="token operator">++</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>count <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> end<span class="token operator">--</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),i=[p];function o(l,c){return s(),a("div",null,i)}const d=n(t,[["render",o],["__file","两数之和-输入有序列表.html.vue"]]);export{d as default};
