const t=JSON.parse('{"key":"v-1bc3b537","path":"/posts/TypeScript/utilityTypes.html","title":"Utility Types","lang":"zh-CN","frontmatter":{"icon":"typescript","date":"2022-01-16T00:00:00.000Z","category":["TypeScript"],"tag":["interface"],"star":true,"sticky":true,"description":"Utility Types Partial 传入属性变为可选项 type Partial&lt;T&gt; = {[P in keyof T]?: T[P]}","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/fe-blog/posts/TypeScript/utilityTypes.html"}],["meta",{"property":"og:site_name","content":"Mr.He"}],["meta",{"property":"og:title","content":"Utility Types"}],["meta",{"property":"og:description","content":"Utility Types Partial 传入属性变为可选项 type Partial&lt;T&gt; = {[P in keyof T]?: T[P]}"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T09:27:20.000Z"}],["meta",{"property":"article:author","content":"Mr.He"}],["meta",{"property":"article:tag","content":"interface"}],["meta",{"property":"article:published_time","content":"2022-01-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T09:27:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Utility Types\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-16T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T09:27:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.He\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1706174840000,"updatedTime":1706174840000,"contributors":[{"name":"何雪斌","email":"hexuebin@megvii.com","commits":1}]},"readingTime":{"minutes":0.59,"words":178},"filePathRelative":"posts/TypeScript/utilityTypes.md","localizedDate":"2022年1月16日","excerpt":"<h1> Utility Types</h1>\\n<h1> Partial</h1>\\n<p>传入属性变为可选项</p>\\n<div class=\\"language-tsx line-numbers-mode\\" data-ext=\\"tsx\\"><pre class=\\"language-tsx\\"><code><span class=\\"token keyword\\">type</span> <span class=\\"token class-name\\">Partial<span class=\\"token operator\\">&lt;</span><span class=\\"token constant\\">T</span><span class=\\"token operator\\">&gt;</span></span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">[</span><span class=\\"token constant\\">P</span> <span class=\\"token keyword\\">in</span> <span class=\\"token keyword\\">keyof</span> <span class=\\"token constant\\">T</span><span class=\\"token punctuation\\">]</span><span class=\\"token operator\\">?</span><span class=\\"token operator\\">:</span> <span class=\\"token constant\\">T</span><span class=\\"token punctuation\\">[</span><span class=\\"token constant\\">P</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};