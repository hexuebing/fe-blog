import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-eAFVDXBg.js";const t={},p=e(`<p>这是一道经典的链表问题，考察的是链表的操作技巧，特别是指针的修改和反转。为了满足进阶要求（使用 $O(1)$ 额外内存空间），我们将采用迭代法来实现。</p><h3 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h3><p>这道题可以拆解为以下几个步骤：</p><ol><li><strong>哨兵节点</strong>：为了方便处理头节点翻转后的连接问题，我们创建一个哨兵节点，将其 <code>next</code> 指向 <code>head</code>。</li><li><strong>分组遍历</strong>：我们需要遍历链表，每次找到一组 $k$ 个节点。 <ul><li>在翻转之前，先检查剩余节点是否足够 $k$ 个。如果不够，直接结束。</li><li>如果足够，记录这组节点的起始位置（<code>start</code>）和结束位置（<code>end</code>），以及下一组的起始位置。</li></ul></li><li><strong>翻转链表</strong>：对这 $k$ 个节点进行翻转。</li><li><strong>重新连接</strong>：将翻转后的子链表接回原链表中。 <ul><li>前一组的尾节点指向翻转后的头节点。</li><li>翻转后的尾节点指向下一组的头节点。</li></ul></li><li><strong>循环推进</strong>：更新指针，继续处理下一组。</li></ol><h3 id="javascript-代码实现" tabindex="-1"><a class="header-anchor" href="#javascript-代码实现" aria-hidden="true">#</a> JavaScript 代码实现</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseKGroup</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1. 创建哨兵节点，统一处理头节点翻转的情况</span>
    <span class="token keyword">const</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// before 指向上一组翻转后的尾节点（初始为 dummy）</span>
    <span class="token keyword">let</span> before <span class="token operator">=</span> dummy<span class="token punctuation">;</span>
    <span class="token comment">// prevStart 用于遍历链表，指向当前组的第一个节点</span>
    <span class="token keyword">let</span> prevStart <span class="token operator">=</span> head<span class="token punctuation">;</span>
    
    <span class="token keyword">while</span> <span class="token punctuation">(</span>prevStart<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 2. 检查剩余节点是否足够 k 个</span>
        <span class="token keyword">let</span> tail <span class="token operator">=</span> prevStart<span class="token punctuation">;</span>
        <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">// 统计剩余节点数量</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>count <span class="token operator">&lt;</span> k <span class="token operator">&amp;&amp;</span> tail<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            tail <span class="token operator">=</span> tail<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token comment">// 如果不足 k 个，保持原有顺序，直接结束</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&lt;</span> k<span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
        
        
        <span class="token comment">// 3. 翻转 k 个节点</span>
        <span class="token comment">// 翻转后，cur 变为当前组的尾节点，prev 变为当前组的头节点</span>
        <span class="token keyword">let</span> prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> current <span class="token operator">=</span> prevStart<span class="token punctuation">;</span>
        <span class="token comment">// 临时保存下一组的起始位置，翻转结束后 current 会到达这里</span>
        <span class="token keyword">let</span> nextGroupStart <span class="token operator">=</span> tail<span class="token punctuation">;</span> 
        
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> k<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 标准翻转逻辑：保存下一个 -&gt; 改指针 -&gt; 移动 prev -&gt; 移动 current</span>
            <span class="token keyword">let</span> nextTemp <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            current<span class="token punctuation">.</span>next <span class="token operator">=</span> prev<span class="token punctuation">;</span>
            prev <span class="token operator">=</span> current<span class="token punctuation">;</span>
            current <span class="token operator">=</span> nextTemp<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 循环结束后：</span>
        <span class="token comment">// prev 指向翻转后的头节点（原第 k 个节点）</span>
        <span class="token comment">// prevStart 指向翻转后的尾节点（原第 1 个节点）</span>
        
        
        <span class="token comment">// 4. 将翻转后的子链表接回原链表</span>
        <span class="token comment">// 上一组的尾节点指向翻转后的头节点</span>
        before<span class="token punctuation">.</span>next <span class="token operator">=</span> prev<span class="token punctuation">;</span>
        <span class="token comment">// 翻转后的尾节点指向下一组的头节点</span>
        prevStart<span class="token punctuation">.</span>next <span class="token operator">=</span> nextGroupStart<span class="token punctuation">;</span>
        
        
        <span class="token comment">// 5. 更新指针，准备下一轮</span>
        <span class="token comment">// pre 更新为当前组的尾节点</span>
        before <span class="token operator">=</span> prevStart<span class="token punctuation">;</span>
        <span class="token comment">// cur 更新为下一组的头节点</span>
        prevStart <span class="token operator">=</span> nextGroupStart<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h3><ul><li><strong>时间复杂度</strong>：$O(n)$，其中 $n$ 是链表的节点总数。虽然我们有两层循环，但内层循环用于检查长度和翻转，每个节点只会被访问常数次。</li><li><strong>空间复杂度</strong>：$O(1)$。我们只使用了几个固定的指针变量（<code>dummy</code>, <code>pre</code>, <code>cur</code>, <code>prev</code> 等），没有使用额外的数组或递归栈空间，满足进阶要求。</li></ul>`,8),o=[p];function c(l,i){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","25.K 个一组翻转链表.html.vue"]]);export{d as default};
