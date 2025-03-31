import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-cHUT35sX.js";const t="/fe-blog/assets/connectNode-UOQmsert.png",i={},o=e(`<h1 id="二叉树结点指向右侧节点" tabindex="-1"><a class="header-anchor" href="#二叉树结点指向右侧节点" aria-hidden="true">#</a> 二叉树结点指向右侧节点</h1><p>给定一个 <strong>完美二叉树</strong> ，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。</p><p>初始状态下，所有 next 指针都被设置为 NULL。</p><figure><img src="`+t+`" alt="图例" tabindex="0" loading="lazy"><figcaption>图例</figcaption></figure><p>输入：root = [1,2,3,4,5,6,7] 输出：[1,#,2,3,#,4,5,6,7,#] 解释：给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。序列化的输出按层序遍历排列，同一层节点由 next 指针连接，&#39;#&#39; 标志着每一层的结束。</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */</span>

<span class="token comment">/**
 * @param {Node} root
 * @return {Node}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">connect</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token function">connectTwo</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
    <span class="token keyword">return</span> root
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">connectTwo</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>left <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

    left<span class="token punctuation">.</span>next <span class="token operator">=</span> right
    <span class="token function">connectTwo</span><span class="token punctuation">(</span>left<span class="token punctuation">.</span>left<span class="token punctuation">,</span> left<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
    <span class="token function">connectTwo</span><span class="token punctuation">(</span>right<span class="token punctuation">.</span>left<span class="token punctuation">,</span> right<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
		
		<span class="token comment">// 跨父节点链接</span>
    <span class="token function">connectTwo</span><span class="token punctuation">(</span>left<span class="token punctuation">.</span>right<span class="token punctuation">,</span> right<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),l=[o];function c(p,u){return s(),a("div",null,l)}const v=n(i,[["render",c],["__file","二叉树节点指向右侧节点.html.vue"]]);export{v as default};
