import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as t}from"./app-mn5ujf0H.js";const e={},p=t(`<h1 id="寻找重复子树" tabindex="-1"><a class="header-anchor" href="#寻找重复子树" aria-hidden="true">#</a> 寻找重复子树</h1><p>给定一棵二叉树，返回所有重复的子树。对于同一类的重复子树，你只需要返回其中任意<strong>一棵</strong>的根结点即可。</p><p>两棵树重复是指它们具有相同的结构以及相同的结点值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        1
       / \\
      2   3
     /   / \\
    4   2   4
       /
      4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>存在两个重复的子树 [[2, 4], [4]]</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */</span>
<span class="token comment">/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findDuplicateSubtrees</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">function</span> <span class="token function">travel</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;#&#39;</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token function">travel</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
        <span class="token keyword">const</span> right <span class="token operator">=</span> <span class="token function">travel</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>

        <span class="token comment">// $  $ 为了处理特别的 11# 和 1 1#这样的相似问题</span>
        <span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">$</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>left<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>root<span class="token punctuation">.</span>val<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>right<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">$</span><span class="token template-punctuation string">\`</span></span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
        
        <span class="token keyword">if</span><span class="token punctuation">(</span>cache<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> root<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            cache<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> str
    <span class="token punctuation">}</span>

    <span class="token function">travel</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>res<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function i(c,l){return s(),a("div",null,o)}const d=n(e,[["render",i],["__file","寻找重复子树.html.vue"]]);export{d as default};
