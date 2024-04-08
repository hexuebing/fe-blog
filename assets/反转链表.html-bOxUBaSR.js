import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-_iK3flsE.js";const t="/fe-blog/assets/rev1ex1-Q34OTktd.jpeg",c={},i=e('<h1 id="反转链表" tabindex="-1"><a class="header-anchor" href="#反转链表" aria-hidden="true">#</a> 反转链表</h1><p>给定单链表的头节点 head ，请反转链表，并返回反转后的链表的头节点。</p><figure><img src="'+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseList</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>head <span class="token operator">||</span> <span class="token operator">!</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token keyword">return</span> head
    <span class="token keyword">let</span> cur <span class="token operator">=</span> head
    <span class="token keyword">let</span> pre <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token comment">// 定义上一个节点，开始的时候为null</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">// 保存下一个节点</span>
        <span class="token keyword">const</span> next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next
      <span class="token comment">// 让本节点指向上一个节点，断开与原先的指向</span>
        cur<span class="token punctuation">.</span>next <span class="token operator">=</span> pre
      <span class="token comment">// 上一个节点改为本节点</span>
        pre <span class="token operator">=</span> cur
      <span class="token comment">// 本节点改为下个节点</span>
        cur <span class="token operator">=</span> next
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> pre
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="为何返回返回pre节点" tabindex="-1"><a class="header-anchor" href="#为何返回返回pre节点" aria-hidden="true">#</a> 为何返回返回<code>pre</code>节点？</h2><p>比如最后一次循环是<code>cur</code>是<code>节点5</code>，运行完毕<code>pre</code>将会保存<code>5节点</code>, <code>cur</code>保存的是<code>null</code>节点</p>`,8),o=[i];function p(l,d){return s(),a("div",null,o)}const v=n(c,[["render",p],["__file","反转链表.html.vue"]]);export{v as default};
