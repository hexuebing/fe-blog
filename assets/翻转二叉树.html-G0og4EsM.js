import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as e,f as a}from"./app-l-ToBhzm.js";const i={},t=a(`<h1 id="反转二叉树" tabindex="-1"><a class="header-anchor" href="#反转二叉树" aria-hidden="true">#</a> 反转二叉树</h1><p>翻转一棵二叉树。</p><p>示例：</p><p>输入：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>     4
   /   \\
  2     7
 / \\   / \\
1   3 6   9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>     4
   /   \\
  7     2
 / \\   / \\
9   6 3   1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>先序遍历解决问题，后序遍历也可解决</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */</span>
<span class="token comment">/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">invertTree</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token keyword">let</span> temp <span class="token operator">=</span> root<span class="token punctuation">.</span>left
    root<span class="token punctuation">.</span>left <span class="token operator">=</span> root<span class="token punctuation">.</span>right
    root<span class="token punctuation">.</span>right <span class="token operator">=</span> temp
    <span class="token comment">// [root.left, root.right] = [root.right, root.left]</span>
    <span class="token function">invertTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
    <span class="token function">invertTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
    <span class="token keyword">return</span> root
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),l=[t];function o(r,c){return s(),e("div",null,l)}const u=n(i,[["render",o],["__file","翻转二叉树.html.vue"]]);export{u as default};
