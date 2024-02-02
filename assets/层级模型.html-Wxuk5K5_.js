import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-cQ6ZO-Pe.js";const p="/fe-blog/assets/group-dV7NCL0D.svg",t={},o=e('<h1 id="层级模型" tabindex="-1"><a class="header-anchor" href="#层级模型" aria-hidden="true">#</a> 层级模型</h1><figure><img src="'+p+`" alt="层级模型（树结构）" tabindex="0" loading="lazy"><figcaption>层级模型（树结构）</figcaption></figure><p>场景对象是scene是group的父对象，group是mesh1、mesh2的父对象。这样就构成了一个三层的层级结构</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//创建两个网格模型mesh1、mesh2</span>
<span class="token keyword">const</span> geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>BoxGeometry</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>MeshLambertMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token number">0x00ffff</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> mesh1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Mesh</span><span class="token punctuation">(</span>geometry<span class="token punctuation">,</span> material<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> mesh2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Mesh</span><span class="token punctuation">(</span>geometry<span class="token punctuation">,</span> material<span class="token punctuation">)</span><span class="token punctuation">;</span>
mesh2<span class="token punctuation">.</span><span class="token function">translateX</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> group <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Group</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//把mesh1/mesh2插入到组group中，作为group的子对象</span>
group<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>mesh1<span class="token punctuation">,</span> mesh2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//把group插入到场景中作为场景子对象</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>group<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Threejs场景对象Scene、组对象Group都有一个子对象属性.children,通过该属性可以访问父对象的子对象，子对象属性.children的值是数组，所有子对象是数组的值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;查看group的子对象&#39;</span><span class="token punctuation">,</span>group<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 场景对象结构</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;查看Scene的子对象&#39;</span><span class="token punctuation">,</span>scene<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="父对象旋转" tabindex="-1"><a class="header-anchor" href="#父对象旋转" aria-hidden="true">#</a> 父对象旋转</h2><p>网格模型mesh1、mesh2作为设置为父对象group的子对象，如果父对象group进行旋转、缩放、平移变换，子对象同样跟着变换</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//沿着Y轴平移mesh1和mesh2的父对象，mesh1和mesh2跟着平移</span>
group<span class="token punctuation">.</span><span class="token function">translateY</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//父对象缩放，子对象跟着缩放</span>
group<span class="token punctuation">.</span>scale<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//父对象旋转，子对象跟着旋转</span>
group<span class="token punctuation">.</span><span class="token function">rotateY</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token operator">/</span><span class="token number">6</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="世界坐标vs局部坐标" tabindex="-1"><a class="header-anchor" href="#世界坐标vs局部坐标" aria-hidden="true">#</a> 世界坐标vs局部坐标</h3><p>任何一个模型的**本地坐标(局部坐标)**就是模型的.position属性。</p><p>一个模型的<strong>世界坐标</strong>，说的是，模型自身.position和所有父对象.position累加的坐标。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 声明一个三维向量用来表示某个坐标</span>
<span class="token keyword">const</span> worldPosition <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 获取mesh的世界坐标，你会发现mesh的世界坐标受到父对象group的.position影响</span>
mesh<span class="token punctuation">.</span><span class="token function">getWorldPosition</span><span class="token punctuation">(</span>worldPosition<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;世界坐标&#39;</span><span class="token punctuation">,</span>worldPosition<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;本地坐标&#39;</span><span class="token punctuation">,</span>mesh<span class="token punctuation">.</span>position<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="子对象添加一个局部坐标系" tabindex="-1"><a class="header-anchor" href="#子对象添加一个局部坐标系" aria-hidden="true">#</a> 子对象添加一个局部坐标系</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//可视化mesh的局部坐标系</span>
<span class="token keyword">const</span> meshAxesHelper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>AxesHelper</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mesh<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>meshAxesHelper<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="object3d替代group" tabindex="-1"><a class="header-anchor" href="#object3d替代group" aria-hidden="true">#</a> Object3D替代Group</h2><p>受threejs历史影响，你会在很多别的代码中看到Object3D作为Group来使用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> mesh1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Mesh</span><span class="token punctuation">(</span>geometry<span class="token punctuation">,</span> material<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> mesh2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Mesh</span><span class="token punctuation">(</span>geometry<span class="token punctuation">,</span> material<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Object3D</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//作为mesh1和mesh2的父对象</span>
obj<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>mesh1<span class="token punctuation">,</span>mesh2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模型命名" tabindex="-1"><a class="header-anchor" href="#模型命名" aria-hidden="true">#</a> 模型命名</h2><p>在层级模型中可以给一些模型对象通过.name属性命名进行标记</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> group <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Group</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
group<span class="token punctuation">.</span>name<span class="token operator">=</span><span class="token string">&#39;小区房子&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> mesh <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Mesh</span><span class="token punctuation">(</span>geometry<span class="token punctuation">,</span> material<span class="token punctuation">)</span><span class="token punctuation">;</span>
mesh<span class="token punctuation">.</span>name<span class="token operator">=</span><span class="token string">&#39;一号楼&#39;</span><span class="token punctuation">;</span>

group<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>mesh<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Threejs层级模型就是一个树结构，可以通过递归遍历的算法去遍历Threejs一个模型对象包含的所有后代</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>scene<span class="token punctuation">.</span><span class="token function">traverse</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;所有模型节点的名称&#39;</span><span class="token punctuation">,</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// obj.isMesh：if判断模型对象obj是不是网格模型&#39;Mesh&#39;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>isMesh<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//判断条件也可以是obj.type === &#39;Mesh&#39;</span>
        obj<span class="token punctuation">.</span>material<span class="token punctuation">.</span>color<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0xffff00</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查找模型" tabindex="-1"><a class="header-anchor" href="#查找模型" aria-hidden="true">#</a> 查找模型</h3><p>Object3D的.getObjectByName()方法查找树结构父元素的某个后代对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 返回名.name为&quot;4号楼&quot;对应的对象</span>
<span class="token keyword">const</span> nameNode <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">getObjectByName</span> <span class="token punctuation">(</span><span class="token string">&quot;4号楼&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
nameNode<span class="token punctuation">.</span>material<span class="token punctuation">.</span>color<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0xff0000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模型移除-显隐" tabindex="-1"><a class="header-anchor" href="#模型移除-显隐" aria-hidden="true">#</a> 模型移除/显隐</h2><p>.remove()方法和.add()方法是相反的，是把子对象从父对象的.children()属性中删除。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 删除父对象group的子对象网格模型mesh1</span>
group<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>mesh1<span class="token punctuation">)</span><span class="token punctuation">;</span>

scene<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>ambient<span class="token punctuation">,</span> group<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//移除场景中环境光</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模型对象的父类Object3D封装了一个属性.visible，通过该属性可以隐藏或显示一个模型。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>mesh<span class="token punctuation">.</span>visible <span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">;</span><span class="token comment">// 隐藏一个网格模型，visible的默认值是true</span>
group<span class="token punctuation">.</span>visible <span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">;</span><span class="token comment">// 隐藏一个包含多个模型的组对象group</span>

<span class="token comment">// 隐藏网格模型mesh，visible的默认值是true</span>
mesh<span class="token punctuation">.</span>material<span class="token punctuation">.</span>visible <span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token comment">// 注意如果mesh2和mesh的.material属性指向同一个材质，mesh2也会跟着mesh隐藏</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),c=[o];function i(l,u){return s(),a("div",null,c)}const k=n(t,[["render",i],["__file","层级模型.html.vue"]]);export{k as default};
