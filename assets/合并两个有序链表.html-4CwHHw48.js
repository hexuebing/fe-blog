import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-Vn4mHkA_.js";const t="/fe-blog/assets/list1-Nl9li2f-.png",p={},o=e('<h1 id="合并两个有序链表" tabindex="-1"><a class="header-anchor" href="#合并两个有序链表" aria-hidden="true">#</a> 合并两个有序链表</h1><p>将两个升序链表合并为一个新的 <strong>升序</strong> 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。</p><figure><img src="'+t+`" alt="示例" tabindex="0" loading="lazy"><figcaption>示例</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>列表节点</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">list1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">list2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">mergeTwoLists</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">list1<span class="token punctuation">,</span> list2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">traverse</span><span class="token punctuation">(</span><span class="token parameter">list1<span class="token punctuation">,</span> list2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>list1 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> list2
        <span class="token keyword">if</span><span class="token punctuation">(</span>list2 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> list1
        <span class="token keyword">let</span> list<span class="token punctuation">;</span>          <span class="token comment">// 定义一个节点，将较小值赋给此节点</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>list1<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> list2<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">{</span>
            list <span class="token operator">=</span> list1
            list<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">traverse</span><span class="token punctuation">(</span>list1<span class="token punctuation">.</span>next<span class="token punctuation">,</span> list2<span class="token punctuation">)</span> <span class="token comment">// 将赋值后的节点的下个节点，和未赋值的节点放入递归</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            list <span class="token operator">=</span> list2
            list<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">traverse</span><span class="token punctuation">(</span>list1<span class="token punctuation">,</span> list2<span class="token punctuation">.</span>next<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> list
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">traverse</span><span class="token punctuation">(</span>list1<span class="token punctuation">,</span> list2<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="虚拟头节点" tabindex="-1"><a class="header-anchor" href="#虚拟头节点" aria-hidden="true">#</a> 虚拟头节点</h2><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">mergeTwoLists</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">list1<span class="token punctuation">,</span> list2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 设计一个虚拟的头节点，返回的时候将头节点的next返回即可</span>
    <span class="token keyword">let</span> p1 <span class="token operator">=</span> list1<span class="token punctuation">,</span> p2 <span class="token operator">=</span> list2<span class="token punctuation">,</span> p <span class="token operator">=</span> head
    <span class="token keyword">while</span><span class="token punctuation">(</span>p1 <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> p2 <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> p2<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">{</span>
            p<span class="token punctuation">.</span>next <span class="token operator">=</span> p1
            p1 <span class="token operator">=</span> p1<span class="token punctuation">.</span>next
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            p<span class="token punctuation">.</span>next <span class="token operator">=</span> p2
            p2 <span class="token operator">=</span> p2<span class="token punctuation">.</span>next
        <span class="token punctuation">}</span>
        p <span class="token operator">=</span> p<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>p1 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> p<span class="token punctuation">.</span>next <span class="token operator">=</span> p2
    <span class="token keyword">if</span><span class="token punctuation">(</span>p2 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> p<span class="token punctuation">.</span>next <span class="token operator">=</span> p1
    <span class="token keyword">return</span> head<span class="token punctuation">.</span>next
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),l=[o];function i(c,u){return s(),a("div",null,l)}const k=n(p,[["render",i],["__file","合并两个有序链表.html.vue"]]);export{k as default};
