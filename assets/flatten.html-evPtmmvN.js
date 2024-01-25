import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-Zl87ItOl.js";const t="/fe-blog/assets/flatten1-9CKWOoT1.png",i="/fe-blog/assets/flatten2-FcIursRw.png",l={},o=e('<h1 id="二叉树展开为列表" tabindex="-1"><a class="header-anchor" href="#二叉树展开为列表" aria-hidden="true">#</a> 二叉树展开为列表</h1><p>给你二叉树的根结点 root ，请你将它展开为一个单链表：</p><p>展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。 展开后的单链表应该与二叉树 先序遍历 顺序相同。</p><figure><img src="'+t+`" alt="转换" tabindex="0" loading="lazy"><figcaption>转换</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = [1,2,5,3,4,null,6]
输出：[1,null,2,null,3,null,4,null,5,null,6]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将左右子树拉平，然后将原先的右节点挂在末尾</p><figure><img src="`+i+`" alt="展开过程" tabindex="0" loading="lazy"><figcaption>展开过程</figcaption></figure><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */</span>
<span class="token comment">/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">flatten</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

    <span class="token function">flatten</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
    <span class="token function">flatten</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>

    <span class="token keyword">let</span> temp <span class="token operator">=</span> root<span class="token punctuation">.</span>right <span class="token comment">//暂存右节点</span>
    root<span class="token punctuation">.</span>right <span class="token operator">=</span> root<span class="token punctuation">.</span>left
    root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token keyword">null</span>

    <span class="token comment">// 3、将原先的右子树接到当前右子树的末端</span>
    <span class="token keyword">let</span> p <span class="token operator">=</span> root
    <span class="token keyword">while</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>right <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        p <span class="token operator">=</span> p<span class="token punctuation">.</span>right
    <span class="token punctuation">}</span>
    p<span class="token punctuation">.</span>right <span class="token operator">=</span> temp
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),p=[o];function c(r,u){return s(),a("div",null,p)}const k=n(l,[["render",c],["__file","flatten.html.vue"]]);export{k as default};
