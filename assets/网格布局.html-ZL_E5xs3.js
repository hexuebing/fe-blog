import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,f as t}from"./app-kyEkc2u2.js";const p="/fe-blog/assets/grid-template-X1tUDaDe.png",e="/fe-blog/assets/grid-area-O9GZjHOV.png",c={},o=t(`<h1 id="grid网格布局" tabindex="-1"><a class="header-anchor" href="#grid网格布局" aria-hidden="true">#</a> Grid网格布局</h1><h2 id="网格轨道" tabindex="-1"><a class="header-anchor" href="#网格轨道" aria-hidden="true">#</a> 网格轨道</h2><p>它们通过使用属性 <code>grid-template-columns</code> 和 <code>grid-template-rows</code> 或者简写属性 <code>grid</code> 和 <code>grid-template</code> 在显式网格中定义。</p><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.wrapper</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 200px 1fr 3fr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一列 200px，第二列 1fr，第三列 3fr。网格容器中的可用空间减去 200px 后，剩余空间被分成 4 份，1 份给第二列，3 份给第三列。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>One<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Two<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Three<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Four<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Five<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+p+`" alt="轨道" tabindex="0" loading="lazy"><figcaption>轨道</figcaption></figure><h3 id="隐式创建轨道大小" tabindex="-1"><a class="header-anchor" href="#隐式创建轨道大小" aria-hidden="true">#</a> 隐式创建轨道大小</h3><p>隐式网格中创建的轨道默认为自动大小，但可以通过 <code>grid-auto-rows</code> 和 <code>grid-auto-columns</code> 属性来定义这些轨道的大小。</p><p>如果一个表格项目被定位在没有使用 <code>grid-template-columns</code> 显式指定尺寸的列中，隐式的 <code>grid</code> 轨道就会被创建出来支撑它</p><h2 id="grid-area" tabindex="-1"><a class="header-anchor" href="#grid-area" aria-hidden="true">#</a> Grid Area</h2><p><code>grid-template-areas</code> CSS 属性是网格区域 <code>grid areas</code> 在 CSS 中的特定命名。</p><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#page</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span> <span class="token comment">/* 1.设置 display 为 grid */</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span>
  <span class="token property">grid-template-areas</span><span class="token punctuation">:</span>
    <span class="token string">&quot;head head&quot;</span>
    <span class="token string">&quot;nav  main&quot;</span>
    <span class="token string">&quot;nav  foot&quot;</span><span class="token punctuation">;</span> <span class="token comment">/* 2.区域划分 当前为 三行 两列 */</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 50px 1fr 30px<span class="token punctuation">;</span> <span class="token comment">/* 3.各区域 宽高设置 */</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 150px 1fr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#page &gt; header</span> <span class="token punctuation">{</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> head<span class="token punctuation">;</span> <span class="token comment">/* 4. 指定当前元素所在的区域位置，从 grid-template-areas 选取值 */</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #8ca0ff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#page &gt; nav</span> <span class="token punctuation">{</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> nav<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #ffa08c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#page &gt; main</span> <span class="token punctuation">{</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> main<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #ffff64<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#page &gt; footer</span> <span class="token punctuation">{</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> foot<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #8cffa0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>page<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span>Header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">&gt;</span></span>Navigation<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>Main area<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span>Footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+e+`" alt="GridArea" tabindex="0" loading="lazy"><figcaption>GridArea</figcaption></figure><h3 id="grid-template-简写实现" tabindex="-1"><a class="header-anchor" href="#grid-template-简写实现" aria-hidden="true">#</a> grid-template 简写实现</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#page</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">grid-template</span><span class="token punctuation">:</span>
    [header-left] <span class="token string">&quot;head head&quot;</span> 50px [header-right]
    [main-left] <span class="token string">&quot;nav  main&quot;</span> 1fr [main-right]
    [footer-left] <span class="token string">&quot;nav  foot&quot;</span> 30px [footer-right]
    / 150px 1fr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),i=[o];function l(u,d){return a(),s("div",null,i)}const g=n(c,[["render",l],["__file","网格布局.html.vue"]]);export{g as default};
