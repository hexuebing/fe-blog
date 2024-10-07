import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as t}from"./app-8zIQZC5g.js";const e="/fe-blog/assets/mat1-Bv_b4nTr.jpeg",p="/fe-blog/assets/mat2-RbPP6XGZ.jpeg",i={},o=t('<h1 id="旋转图像" tabindex="-1"><a class="header-anchor" href="#旋转图像" aria-hidden="true">#</a> 旋转图像</h1><p>给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。</p><p>你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。</p><figure><img src="'+e+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[[7,4,1],[8,5,2],[9,6,3]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
输出：[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="解答思路" tabindex="-1"><a class="header-anchor" href="#解答思路" aria-hidden="true">#</a> 解答思路</h1><p>对于这个矩阵，我们可以<strong>先沿着左上角到右下角对角线进行翻转，在沿着垂直的中心进行对称</strong>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 初始的矩阵
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
//（1）沿着左上角到右下角对角线进行翻转
[
  [1,4,7],
  [2,5,8],
  [3,6,9]
]
//（2）沿着垂直的中心进行对称
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">rotate</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">matrix</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> len <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length
    <span class="token comment">// 左上右下轴翻转</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token punctuation">[</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> matrix<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>matrix<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 垂直轴翻转</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">const</span> line <span class="token operator">=</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> right <span class="token operator">=</span> line<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token punctuation">[</span>line<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> line<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>line<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">,</span> line<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">]</span>
            left<span class="token operator">++</span>
            right<span class="token operator">--</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> matrix
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),c=[o];function l(u,r){return s(),a("div",null,c)}const v=n(i,[["render",l],["__file","旋转图像.html.vue"]]);export{v as default};
