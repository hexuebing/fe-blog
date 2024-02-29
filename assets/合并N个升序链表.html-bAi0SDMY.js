import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-PFd3fDwj.js";const t={},p=e(`<h1 id="合并n个升序链表" tabindex="-1"><a class="header-anchor" href="#合并n个升序链表" aria-hidden="true">#</a> 合并N个升序链表</h1><p>给你一个链表数组，每个链表都已经按升序排列。</p><p>请你将所有链表合并到一个升序链表中，返回合并后的链表。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：lists = [[1,4,5],[1,3,4],[2,6]]
输出：[1,1,2,3,4,4,5,6]
解释：链表数组如下：
[
  1-&gt;4-&gt;5,
  1-&gt;3-&gt;4,
  2-&gt;6
]
将它们合并到一个有序链表中得到。
1-&gt;1-&gt;2-&gt;3-&gt;4-&gt;4-&gt;5-&gt;6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>链表节点：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="思路分析" tabindex="-1"><a class="header-anchor" href="#思路分析" aria-hidden="true">#</a> 思路分析</h2><ul><li>虚拟一个头节点，到时候返回next</li><li>用一个数组将所有的链表的头都放入，并根据val来排序</li><li>不断的将数组中的第一个shift出来并连到虚拟头上面，如果这个值next有值则继续push到数组中，重新排序。直到数组为空</li></ul><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">mergeKLists</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">lists</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> p <span class="token operator">=</span> head
    <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
		<span class="token comment">// 将所有链表的头放入数组中</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> node <span class="token keyword">of</span> lists<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token comment">// 如果是空链表不放入</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>node <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token keyword">const</span> <span class="token function-variable function">sort</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node1<span class="token punctuation">,</span> node2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> node1<span class="token punctuation">.</span>val <span class="token operator">-</span> node2<span class="token punctuation">.</span>val
    arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>sort<span class="token punctuation">)</span> <span class="token comment">// 排序</span>

    <span class="token keyword">while</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">const</span> minNode <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        p<span class="token punctuation">.</span>next <span class="token operator">=</span> minNode
        <span class="token keyword">if</span><span class="token punctuation">(</span>minNode<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>minNode<span class="token punctuation">.</span>next<span class="token punctuation">)</span>
            arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>sort<span class="token punctuation">)</span> <span class="token comment">// 排序</span>
        <span class="token punctuation">}</span>
        p <span class="token operator">=</span> p<span class="token punctuation">.</span>next <span class="token comment">// 指针向后移动</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> head<span class="token punctuation">.</span>next
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[p];function i(c,l){return s(),a("div",null,o)}const r=n(t,[["render",i],["__file","合并N个升序链表.html.vue"]]);export{r as default};
