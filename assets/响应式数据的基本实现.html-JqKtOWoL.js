import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as t}from"./app-K8IwpOAk.js";const e="/fe-blog/assets/target-tn4UTNBx.jpg",p={},c=t(`<h1 id="响应式数据的基本实现" tabindex="-1"><a class="header-anchor" href="#响应式数据的基本实现" aria-hidden="true">#</a> 响应式数据的基本实现</h1><p>在ES2015 之前，只能通过 Object.defineProperty 函数实现，这也是 Vue.js 2 所采用的方式。在 ES2015+ 中，我们可以使用代理对象 Proxy 来实现，这也是 Vue.js 3 所采用的方式。</p><h2 id="简易的proxy" tabindex="-1"><a class="header-anchor" href="#简易的proxy" aria-hidden="true">#</a> 简易的Proxy</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token comment">// 存储副作用函数的桶</span>
 <span class="token keyword">const</span> bucket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

 <span class="token comment">// 原始数据</span>
 <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;hello world&#39;</span> <span class="token punctuation">}</span>
 <span class="token comment">// 对原始数据的代理</span>
 <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">{</span>
   <span class="token comment">// 拦截读取操作</span>
   <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// 将副作用函数 effect 添加到存储副作用函数的桶中</span>
     bucket<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>activeEffect<span class="token punctuation">)</span>
     <span class="token comment">// 返回属性值</span>
     <span class="token keyword">return</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token comment">// 拦截设置操作</span>
   <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> newVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// 设置属性值</span>
     target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> newVal
     <span class="token comment">// 把副作用函数从桶里取出并执行</span>
     bucket<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fn</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
     <span class="token comment">// 返回 true 代表设置操作成功</span>
     <span class="token keyword">return</span> <span class="token boolean">true</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试数据的拦截以及触发：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token comment">// 用一个全局变量 activeEffect 存储被注册的副作用函数</span>
 <span class="token keyword">let</span> activeEffect
 <span class="token comment">// effect 函数用于注册副作用函数</span>
 <span class="token keyword">function</span> <span class="token function">effect</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// 当调用 effect 注册副作用函数时，将副作用函数 fn 赋值给 activeEffect</span>
   activeEffect <span class="token operator">=</span> fn
   <span class="token comment">// 执行副作用函数</span>
   <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 <span class="token comment">// 执行副作用函数，触发读取</span>
 <span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerText <span class="token operator">=</span> obj<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
 <span class="token comment">// 1 秒后修改响应式数据</span>
 <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   obj<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string">&#39;hello vue3&#39;</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是此时如果修改<code>obj.notExist</code>的属性值，也会触发副作用的执行，所以需要属性与副作用进行对应</p><h2 id="副作用与代理对象的对应" tabindex="-1"><a class="header-anchor" href="#副作用与代理对象的对应" aria-hidden="true">#</a> 副作用与代理对象的对应</h2><p>分别使用了 WeakMap、Map 和Set：</p><ul><li>WeakMap 由 target --&gt; Map 构成；</li><li>Map 由 key --&gt; Set 构成。</li></ul><figure><img src="`+e+`" alt="副作用函数与代理对象的对应关系" tabindex="0" loading="lazy"><figcaption>副作用函数与代理对象的对应关系</figcaption></figure><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token comment">// 存储副作用函数的桶</span>
 <span class="token keyword">const</span> bucket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">{</span>
   <span class="token comment">// 拦截读取操作</span>
   <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// 将副作用函数 activeEffect 添加到存储副作用函数的桶中</span>
     <span class="token function">track</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
     <span class="token comment">// 返回属性值</span>
     <span class="token keyword">return</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token comment">// 拦截设置操作</span>
   <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> newVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// 设置属性值</span>
     target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> newVal
     <span class="token comment">// 把副作用函数从桶里取出并执行</span>
     <span class="token function">trigger</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>

 <span class="token comment">// 在 get 拦截函数内调用 track 函数追踪变化</span>
 <span class="token keyword">function</span> <span class="token function">track</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// 没有 activeEffect，直接 return</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>activeEffect<span class="token punctuation">)</span> <span class="token keyword">return</span>
   <span class="token keyword">let</span> depsMap <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>depsMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     bucket<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token punctuation">(</span>depsMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">let</span> deps <span class="token operator">=</span> depsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>deps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     depsMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token punctuation">(</span>deps <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   deps<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>activeEffect<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 <span class="token comment">// 在 set 拦截函数内调用 trigger 函数触发变化</span>
 <span class="token keyword">function</span> <span class="token function">trigger</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">const</span> depsMap <span class="token operator">=</span> bucket<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>depsMap<span class="token punctuation">)</span> <span class="token keyword">return</span>
   <span class="token keyword">const</span> effects <span class="token operator">=</span> depsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
   effects <span class="token operator">&amp;&amp;</span> effects<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fn</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>WeakMap 对 key 是弱引用，不影响垃圾回收器的工作. 例如上面的场景中，如果 target 对象没有任何引用了，说明用户侧不再需要它了，这时垃圾回收器会完成回收任务。</p>`,14),o=[c];function i(l,u){return s(),a("div",null,o)}const d=n(p,[["render",i],["__file","响应式数据的基本实现.html.vue"]]);export{d as default};
