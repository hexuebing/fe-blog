import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-eAFVDXBg.js";const t={},p=e(`<p>解决这个问题的关键在于利用 BST 的性质：<strong>BST 的中序遍历结果是一个严格递增的序列</strong>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span> Do not return anything, modify root in-place instead.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">recoverTree</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 用于记录前一个访问的节点</span>
    <span class="token keyword">let</span> prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token comment">// 记录第一个需要交换的节点</span>
    <span class="token keyword">let</span> first <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token comment">// 记录第二个需要交换的节点</span>
    <span class="token keyword">let</span> second <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token comment">// 中序遍历函数</span>
    <span class="token keyword">function</span> <span class="token function">inorder</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

        <span class="token comment">// 遍历左子树</span>
        <span class="token function">inorder</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 处理当前节点</span>
        <span class="token comment">// 如果前一个节点的值大于当前节点的值，说明出现了逆序</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>prev <span class="token operator">&amp;&amp;</span> prev<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> node<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 如果 first 还没找到，这就是第一个错误节点（较大的那个）</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>first<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                first <span class="token operator">=</span> prev<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 无论是否是第一次发现逆序，当前的 node（较小的那个）都可能是第二个错误节点</span>
            <span class="token comment">// 如果是相邻交换，这里会更新一次；如果不相邻交换，这里会更新两次，最终停留在最后那个小的节点上</span>
            second <span class="token operator">=</span> node<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token comment">// 更新 prev 为当前节点</span>
        prev <span class="token operator">=</span> node<span class="token punctuation">;</span>

        <span class="token comment">// 遍历右子树</span>
        <span class="token function">inorder</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 执行中序遍历</span>
    <span class="token function">inorder</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 如果找到了两个错误节点，交换它们的值</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>first <span class="token operator">&amp;&amp;</span> second<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> temp <span class="token operator">=</span> first<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
        first<span class="token punctuation">.</span>val <span class="token operator">=</span> second<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
        second<span class="token punctuation">.</span>val <span class="token operator">=</span> temp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","99.恢复二叉搜索树.html.vue"]]);export{d as default};
