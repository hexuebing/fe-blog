import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as t}from"./app-Pb0TUxIF.js";const p="/fe-blog/assets/minPath-0vAuLb-K.png",o={},e=t(`<h1 id="下降路径最小和" tabindex="-1"><a class="header-anchor" href="#下降路径最小和" aria-hidden="true">#</a> 下降路径最小和</h1><p>给你一个 n x n 的 方形 整数数组 matrix ，请你找出并返回通过 matrix 的下降路径 的 最小和 。</p><p>下降路径 可以从第一行中的任何元素开始，并从每一行中选择一个元素。在下一行选择的元素和当前行所选元素最多相隔一列（即位于正下方或者沿对角线向左或者向右的第一个元素）。具体来说，位置 (row, col) 的下一个元素应当是 (row + 1, col - 1)、(row + 1, col) 或者 (row + 1, col + 1) 。</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>输入：matrix <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
输出：<span class="token number">13</span>
解释：下面是两条和最小的下降路径，用加粗<span class="token operator">+</span>斜体标注：
<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token operator">**</span><span class="token operator">*</span><span class="token number">1</span><span class="token operator">**</span><span class="token operator">*</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>      <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token operator">**</span><span class="token operator">*</span><span class="token number">1</span><span class="token operator">**</span><span class="token operator">*</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token operator">**</span><span class="token operator">*</span><span class="token number">5</span><span class="token operator">**</span><span class="token operator">*</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>       <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token operator">**</span><span class="token operator">*</span><span class="token number">4</span><span class="token operator">**</span><span class="token operator">*</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token punctuation">[</span><span class="token operator">**</span><span class="token operator">*</span><span class="token number">7</span><span class="token operator">**</span><span class="token operator">*</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">]</span>       <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token operator">**</span><span class="token operator">*</span><span class="token number">8</span><span class="token operator">**</span><span class="token operator">*</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+p+`" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><p><strong>只要知道到达 <code>(i-1, j), (i-1, j-1), (i-1, j+1)</code> 这三个位置的最小路径和，加上 <code>matrix[i][j]</code> 的值，就能够计算出来到达位置 <code>(i, j)</code> 的最小路径和</strong></p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">/**
 * @param {number[][]} matrix
 * @return {number}
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minFallingPathSum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">matrix</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> len <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length
    <span class="token keyword">let</span> memo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">dp</span><span class="token punctuation">(</span><span class="token parameter">matrix<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>memo<span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>j<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token keyword">return</span> memo<span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>j<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> j <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> i <span class="token operator">&gt;=</span> len <span class="token operator">||</span> j <span class="token operator">&gt;=</span> len<span class="token punctuation">)</span> <span class="token keyword">return</span> Number<span class="token punctuation">.</span><span class="token constant">MAX_SAFE_INTEGER</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span>
        memo<span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>j<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span> <span class="token operator">=</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token function">dp</span><span class="token punctuation">(</span>matrix<span class="token punctuation">,</span> i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">dp</span><span class="token punctuation">(</span>matrix<span class="token punctuation">,</span> i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">dp</span><span class="token punctuation">(</span>matrix<span class="token punctuation">,</span> i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> memo<span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>j<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> Number<span class="token punctuation">.</span><span class="token constant">MAX_SAFE_INTEGER</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        result <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> <span class="token function">dp</span><span class="token punctuation">(</span>matrix<span class="token punctuation">,</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[e];function u(l,i){return s(),a("div",null,c)}const m=n(o,[["render",u],["__file","minPath.html.vue"]]);export{m as default};