const n=JSON.parse(`{"key":"v-709b4f84","path":"/posts/ThreeJS/%E5%8A%A0%E8%BD%BD.gltf%E6%96%87%E4%BB%B6.html","title":"加载.gltf文件","lang":"zh-CN","frontmatter":{"description":"加载.gltf文件 加载外部三维模型的整个过程： // 引入gltf模型加载库GLTFLoader.js import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'; // 创建GLTF加载器对象 const loader = new GLTFLoader(); loader.load( 'gltf模型.gltf', function ( gltf ) { console.log('gltf对象场景属性',gltf.scene); // 返回的场景对象gltf.scene插入到threejs场景中 scene.add( gltf.scene ); })","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/fe-blog/posts/ThreeJS/%E5%8A%A0%E8%BD%BD.gltf%E6%96%87%E4%BB%B6.html"}],["meta",{"property":"og:site_name","content":"Mr.He"}],["meta",{"property":"og:title","content":"加载.gltf文件"}],["meta",{"property":"og:description","content":"加载.gltf文件 加载外部三维模型的整个过程： // 引入gltf模型加载库GLTFLoader.js import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'; // 创建GLTF加载器对象 const loader = new GLTFLoader(); loader.load( 'gltf模型.gltf', function ( gltf ) { console.log('gltf对象场景属性',gltf.scene); // 返回的场景对象gltf.scene插入到threejs场景中 scene.add( gltf.scene ); })"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-04T02:50:27.000Z"}],["meta",{"property":"article:author","content":"Mr.He"}],["meta",{"property":"article:modified_time","content":"2024-02-04T02:50:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"加载.gltf文件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-04T02:50:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.He\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"设置相机","slug":"设置相机","link":"#设置相机","children":[{"level":3,"title":"OrbitControls辅助设置相机参数","slug":"orbitcontrols辅助设置相机参数","link":"#orbitcontrols辅助设置相机参数","children":[]}]},{"level":2,"title":"解决共享材质问题","slug":"解决共享材质问题","link":"#解决共享材质问题","children":[]},{"level":2,"title":"更改gltf贴图","slug":"更改gltf贴图","link":"#更改gltf贴图","children":[]}],"git":{"createdTime":1707015027000,"updatedTime":1707015027000,"contributors":[{"name":"何雪斌","email":"hexuebin@megvii.com","commits":1}]},"readingTime":{"minutes":2.06,"words":619},"filePathRelative":"posts/ThreeJS/加载.gltf文件.md","localizedDate":"2024年2月4日","excerpt":"<h1> 加载.gltf文件</h1>\\n<p>加载外部三维模型的整个过程：</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">// 引入gltf模型加载库GLTFLoader.js</span>\\n<span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> GLTFLoader <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'three/addons/loaders/GLTFLoader.js'</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 创建GLTF加载器对象</span>\\n<span class=\\"token keyword\\">const</span> loader <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">GLTFLoader</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\nloader<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">load</span><span class=\\"token punctuation\\">(</span> <span class=\\"token string\\">'gltf模型.gltf'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span> <span class=\\"token parameter\\">gltf</span> <span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'gltf对象场景属性'</span><span class=\\"token punctuation\\">,</span>gltf<span class=\\"token punctuation\\">.</span>scene<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token comment\\">// 返回的场景对象gltf.scene插入到threejs场景中</span>\\n  scene<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span> gltf<span class=\\"token punctuation\\">.</span>scene <span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
