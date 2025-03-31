import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as t}from"./app-2W1fec8M.js";const e={},o=t(`<h1 id="_7-创意标题匹配问题" tabindex="-1"><a class="header-anchor" href="#_7-创意标题匹配问题" aria-hidden="true">#</a> 7.创意标题匹配问题</h1><h2 id="问题描述" tabindex="-1"><a class="header-anchor" href="#问题描述" aria-hidden="true">#</a> 问题描述</h2><p>在广告平台中，为了给广告主一定的自由性和效率，允许广告主在创造标题的时候以通配符的方式进行创意提交。线上服务的时候，会根据用户的搜索词触发的 bidword 对创意中的通配符（通配符是用成对 <code>{}</code> 括起来的字符串，可以包含 0 个或者多个字符）进行替换，用来提升广告投放体验。</p><p>例如：“{末日血战} 上线送 SSR 英雄，三天集齐无敌阵容！”，会被替换成“帝国时代游戏下载上线送 SSR 英雄，三天集齐无敌阵容！”。给定一个含有通配符的创意和 <code>n</code> 个标题，判断这句标题是否从该创意替换生成的。</p><hr><h2 id="测试样例" tabindex="-1"><a class="header-anchor" href="#测试样例" aria-hidden="true">#</a> 测试样例</h2><h3 id="样例-1" tabindex="-1"><a class="header-anchor" href="#样例-1" aria-hidden="true">#</a> 样例 1：</h3><p><strong>输入：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>n = 4, template = &quot;ad{xyz}cdc{y}f{x}e&quot;, titles = [&quot;adcdcefdfeffe&quot;, &quot;adcdcefdfeff&quot;, &quot;dcdcefdfeffe&quot;, &quot;adcdcfe&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>输出：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;True,False,False,True&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="样例-2" tabindex="-1"><a class="header-anchor" href="#样例-2" aria-hidden="true">#</a> 样例 2：</h3><p><strong>输入：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>n = 3, template = &quot;a{bdc}efg&quot;, titles = [&quot;abcdefg&quot;, &quot;abefg&quot;, &quot;efg&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>输出：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;True,True,False&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="样例-3" tabindex="-1"><a class="header-anchor" href="#样例-3" aria-hidden="true">#</a> 样例 3：</h3><p><strong>输入：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>n = 5, template = &quot;{abc}xyz{def}&quot;, titles = [&quot;xyzdef&quot;, &quot;abcdef&quot;, &quot;abxyzdef&quot;, &quot;xyz&quot;, &quot;abxyz&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>输出：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;True,False,True,True,True&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="实现代码" tabindex="-1"><a class="header-anchor" href="#实现代码" aria-hidden="true">#</a> 实现代码：</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">solution</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> template<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> titles<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token comment">// 提取通配符并生成正则表达式</span>
  <span class="token keyword">const</span> regexPattern <span class="token operator">=</span> template<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\{[^{}]*\\}</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;.*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> regex <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">^</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>regexPattern<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">$</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 匹配每个标题</span>
  <span class="token keyword">const</span> results <span class="token operator">=</span> titles<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> regex<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 将结果转换为字符串</span>
  <span class="token keyword">return</span> results<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>result <span class="token operator">?</span> <span class="token string">&quot;True&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;False&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// You can add more test cases here</span>
  <span class="token keyword">const</span> testTitles1 <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;adcdcefdfeffe&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;adcdcefdfeff&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;dcdcefdfeffe&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;adcdcfe&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> testTitles2 <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;CLSomGhcQNvFuzENTAMLCqxBdj&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;CLSomNvFuXTASzENTAMLCqxBdj&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;CLSomFuXTASzExBdj&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;CLSoQNvFuMLCqxBdj&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;SovFuXTASzENTAMLCq&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;mGhcQNvFuXTASzENTAMLCqx&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> testTitles3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;abcdefg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;abefg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;efg&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
    <span class="token function">solution</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&quot;ad{xyz}cdc{y}f{x}e&quot;</span><span class="token punctuation">,</span> testTitles1<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&quot;True,False,False,True&quot;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
    <span class="token function">solution</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&quot;{xxx}h{cQ}N{vF}u{XTA}S{NTA}MLCq{yyy}&quot;</span><span class="token punctuation">,</span> testTitles2<span class="token punctuation">)</span> <span class="token operator">===</span>
      <span class="token string">&quot;False,False,False,False,False,True&quot;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">solution</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&quot;a{bdc}efg&quot;</span><span class="token punctuation">,</span> testTitles3<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&quot;True,True,False&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正则表达式<code>/{[^{}]*}/g</code> 也可以修改为<code>/{[a-z,A-Z]*}/g</code>来进行匹配<code>*</code>的意思是<code>{0,}</code>0 个或以上个</p>`,24),p=[o];function c(u,i){return s(),a("div",null,p)}const d=n(e,[["render",c],["__file","7.创意标题匹配问题.html.vue"]]);export{d as default};
