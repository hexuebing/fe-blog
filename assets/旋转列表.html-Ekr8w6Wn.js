import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,f as e}from"./app-JuczZiah.js";const t="/fe-blog/assets/rotate1-XCoYPXeq.jpeg",p={},o=e('<h1 id="旋转列表" tabindex="-1"><a class="header-anchor" href="#旋转列表" aria-hidden="true">#</a> 旋转列表</h1><p>给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。</p><figure><img src="'+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1,2,3,4,5], k = 2
输出：[4,5,1,2,3]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解法" tabindex="-1"><a class="header-anchor" href="#解法" aria-hidden="true">#</a> 解法</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">rotateRight</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>head <span class="token operator">||</span> <span class="token operator">!</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span> head<span class="token punctuation">}</span>
    <span class="token comment">// 连接成环</span>
    <span class="token keyword">let</span> tail <span class="token operator">=</span> head
    <span class="token keyword">let</span> length <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// 注意这里要先计数1</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>tail<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">{</span>
        tail <span class="token operator">=</span> tail<span class="token punctuation">.</span>next
        length<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    tail<span class="token punctuation">.</span>next <span class="token operator">=</span> head

    <span class="token keyword">let</span> newTail <span class="token operator">=</span> head
    k <span class="token operator">=</span> k <span class="token operator">%</span> length
    <span class="token comment">// 移动 5-2 -1 次，移动到 指向3</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length <span class="token operator">-</span> k<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        newTail <span class="token operator">=</span> newTail<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token comment">// 让头指向 3的next，并将3的next指向null</span>
    head <span class="token operator">=</span> newTail<span class="token punctuation">.</span>next
    newTail<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">return</span> head
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[o];function i(c,r){return a(),s("div",null,l)}const k=n(p,[["render",i],["__file","旋转列表.html.vue"]]);export{k as default};
