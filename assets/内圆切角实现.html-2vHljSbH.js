import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as t}from"./app-yTaYNIfy.js";const p="/fe-blog/assets/box-shadow-uO63ajSJ.png",e="/fe-blog/assets/radial-gradient-GwdsHP86.png",o={},c=t('<h1 id="内圆切角实现" tabindex="-1"><a class="header-anchor" href="#内圆切角实现" aria-hidden="true">#</a> 内圆切角实现</h1><figure><img src="'+p+`" alt="box-shadow" tabindex="0" loading="lazy"><figcaption>box-shadow</figcaption></figure><h2 id="box-shadow-实现原理" tabindex="-1"><a class="header-anchor" href="#box-shadow-实现原理" aria-hidden="true">#</a> box-shadow 实现原理：</h2><ul><li>使用伪元素绝对定位到容器的左上角，让其透明，使用阴影作为容器的背景颜色填充</li><li>最多只能有两个内圆切角</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>shadow2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>阴影实现缺点，单个标签最多是2边<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">div </span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 20vw<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 8vw<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 1vw auto<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 1vmin<span class="token punctuation">;</span>
  <span class="token comment">// background: #e91e63;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 8vw<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.shadow2 </span><span class="token punctuation">{</span>
  <span class="token selector"><span class="token parent important">&amp;</span>::before </span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> -2vw<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> -2vw<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 4vw<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 4vw<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 0 15vw #e91e63<span class="token punctuation">;</span> 
    <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token selector"><span class="token parent important">&amp;</span>::after </span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> -2vw<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> -2vw<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 4vw<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 4vw<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 0 15vw #e91e63<span class="token punctuation">;</span> 
    <span class="token property">z-index</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="radial-gradient实现" tabindex="-1"><a class="header-anchor" href="#radial-gradient实现" aria-hidden="true">#</a> radial-gradient实现</h2><figure><img src="`+e+`" alt="radial-gradient" tabindex="0" loading="lazy"><figcaption>radial-gradient</figcaption></figure><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>linear2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>径向渐变实现内切圆角可以是4边<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">div </span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 20vw<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 8vw<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 1vw auto<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 1vmin<span class="token punctuation">;</span>
  <span class="token comment">// background: #e91e63;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 8vw<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.linear2 </span><span class="token punctuation">{</span>
    <span class="token property">background-size</span><span class="token punctuation">:</span> 70% 70%<span class="token punctuation">;</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> 
        <span class="token function">radial-gradient</span><span class="token punctuation">(</span>circle at 100% 100%<span class="token punctuation">,</span> transparent 0<span class="token punctuation">,</span> transparent 2vw<span class="token punctuation">,</span> #03A9F5 2vw<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">radial-gradient</span><span class="token punctuation">(</span>circle at 0 0<span class="token punctuation">,</span> transparent 0<span class="token punctuation">,</span> transparent 2vw<span class="token punctuation">,</span> #03A9F5 2vw<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">radial-gradient</span><span class="token punctuation">(</span>circle at 100% 0<span class="token punctuation">,</span> transparent 0<span class="token punctuation">,</span> transparent 2vw<span class="token punctuation">,</span> #03A9F5 2vw<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">radial-gradient</span><span class="token punctuation">(</span>circle at 0 100%<span class="token punctuation">,</span> transparent 0<span class="token punctuation">,</span> transparent 2vw<span class="token punctuation">,</span> #03A9F5 2vw<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
    <span class="token property">background-position</span><span class="token punctuation">:</span> right bottom<span class="token punctuation">,</span> left top<span class="token punctuation">,</span> right top<span class="token punctuation">,</span> left bottom<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),i=[c];function l(u,r){return s(),a("div",null,i)}const v=n(o,[["render",l],["__file","内圆切角实现.html.vue"]]);export{v as default};
