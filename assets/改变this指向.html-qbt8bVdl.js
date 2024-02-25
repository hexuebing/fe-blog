const t=JSON.parse('{"key":"v-03cd06ee","path":"/posts/JavaScript/%E6%94%B9%E5%8F%98this%E6%8C%87%E5%90%91.html","title":"call、apply、bind","lang":"zh-CN","frontmatter":{"icon":"javascript","date":"2022-01-17T00:00:00.000Z","category":["JavaScript"],"star":true,"sticky":true,"description":"call、apply、bind 为context对象定义属性 fn ，并赋值this 此时的this指向myCall的调用者 判断是否有别的参数，决定context.fn时是否传参 自定义Call Function.prototype.myCall = function(context = window, ...args){ \\tcontext.fn = this \\tlet result \\tif(args.length){ \\t\\tresult = context.fn(...args) \\t}else{ \\t\\tresult = context.fn() \\t} \\tdelete context.fn \\treturn result }","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/fe-blog/posts/JavaScript/%E6%94%B9%E5%8F%98this%E6%8C%87%E5%90%91.html"}],["meta",{"property":"og:site_name","content":"Mr.He"}],["meta",{"property":"og:title","content":"call、apply、bind"}],["meta",{"property":"og:description","content":"call、apply、bind 为context对象定义属性 fn ，并赋值this 此时的this指向myCall的调用者 判断是否有别的参数，决定context.fn时是否传参 自定义Call Function.prototype.myCall = function(context = window, ...args){ \\tcontext.fn = this \\tlet result \\tif(args.length){ \\t\\tresult = context.fn(...args) \\t}else{ \\t\\tresult = context.fn() \\t} \\tdelete context.fn \\treturn result }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-25T13:46:42.000Z"}],["meta",{"property":"article:author","content":"Mr.He"}],["meta",{"property":"article:published_time","content":"2022-01-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-25T13:46:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"call、apply、bind\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-17T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-25T13:46:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.He\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"测试一下","slug":"测试一下","link":"#测试一下","children":[]},{"level":2,"title":"测试一下","slug":"测试一下-1","link":"#测试一下-1","children":[]}],"git":{"createdTime":1708868802000,"updatedTime":1708868802000,"contributors":[{"name":"gift","email":"test@example.com","commits":1}]},"readingTime":{"minutes":0.61,"words":182},"filePathRelative":"posts/JavaScript/改变this指向.md","localizedDate":"2022年1月17日","excerpt":"<h1> call、apply、bind</h1>\\n<ol>\\n<li>为context对象定义属性 <strong>fn</strong> ，并赋值this</li>\\n<li>此时的this指向myCall的调用者</li>\\n<li>判断是否有别的参数，决定context.fn时是否传参</li>\\n</ol>\\n<h1> 自定义Call</h1>\\n<div class=\\"language-jsx line-numbers-mode\\" data-ext=\\"jsx\\"><pre class=\\"language-jsx\\"><code><span class=\\"token class-name\\">Function</span><span class=\\"token punctuation\\">.</span>prototype<span class=\\"token punctuation\\">.</span><span class=\\"token function-variable function\\">myCall</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">context <span class=\\"token operator\\">=</span> window<span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">...</span>args</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n\\tcontext<span class=\\"token punctuation\\">.</span>fn <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">this</span>\\n\\t<span class=\\"token keyword\\">let</span> result\\n\\t<span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>args<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n\\t\\tresult <span class=\\"token operator\\">=</span> context<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">fn</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">...</span>args<span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token punctuation\\">}</span><span class=\\"token keyword\\">else</span><span class=\\"token punctuation\\">{</span>\\n\\t\\tresult <span class=\\"token operator\\">=</span> context<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">fn</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n\\t<span class=\\"token keyword\\">delete</span> context<span class=\\"token punctuation\\">.</span>fn\\n\\t<span class=\\"token keyword\\">return</span> result\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
