import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as t}from"./app-eAFVDXBg.js";const e={},p=t(`<p>求最小深度有两种常用的解法：<strong>深度优先搜索 (DFS)</strong> 和 <strong>广度优先搜索 (BFS)</strong>。</p><h3 id="解法一-广度优先搜索-bfs" tabindex="-1"><a class="header-anchor" href="#解法一-广度优先搜索-bfs" aria-hidden="true">#</a> 解法一：广度优先搜索 (BFS)</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minDepth</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">// 使用队列进行广度优先遍历</span>
    <span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> depth <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        depth<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 进入新的一层，深度加 1</span>
        
        <span class="token comment">// 当前层的节点数量</span>
        <span class="token keyword">const</span> levelSize <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> levelSize<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 取出队首节点</span>

            <span class="token comment">// 如果当前节点是叶子节点（没有左右子节点），直接返回当前深度</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> depth<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// 将子节点加入队列</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// return depth;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解法二-深度优先搜索-dfs" tabindex="-1"><a class="header-anchor" href="#解法二-深度优先搜索-dfs" aria-hidden="true">#</a> 解法二：深度优先搜索 (DFS)</h3><p>思路：递归计算左右子树的最小深度。<br><strong>注意点</strong>：如果左子树为空，不能直接取 <code>Math.min(0, 右子树深度)</code>，因为根据定义，最小深度是根节点到<strong>叶子节点</strong>的距离。如果一边为空，只能走另一边。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minDepth</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">// 1. 如果左子树为空，返回右子树的最小深度 + 1</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">minDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 2. 如果右子树为空，返回左子树的最小深度 + 1</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">minDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 3. 如果左右子树都不为空，返回两者较小值 + 1</span>
    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token function">minDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">minDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function c(i,l){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","111. 二叉树的最小深度.html.vue"]]);export{k as default};
