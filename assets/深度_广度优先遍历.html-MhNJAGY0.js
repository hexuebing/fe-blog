const n=JSON.parse('{"key":"v-7892272e","path":"/posts/leetCode/%E4%BA%8C%E5%8F%89%E6%A0%91/%E6%B7%B1%E5%BA%A6_%E5%B9%BF%E5%BA%A6%E4%BC%98%E5%85%88%E9%81%8D%E5%8E%86.html","title":"深度&广度优先遍历","lang":"zh-CN","frontmatter":{"description":"深度&amp;广度优先遍历 深度优先 深度优先 深度优先遍历就是当我们搜索一个树的分支时，遇到一个节点，我们会优先遍历它的子节点直到最后根节点为止，最后再遍历兄弟节点，从兄弟子节点寻找它的子节点，直到搜索到最后结果 const deepDFS = (root, nodeList = []) =&gt; { if(root === null) return nodeList.push(root.val) if(root.left) deepDFS(root.left, nodeList) if(root.right) deepDFS(root.right, nodeList) return nodeList }","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/fe-blog/posts/leetCode/%E4%BA%8C%E5%8F%89%E6%A0%91/%E6%B7%B1%E5%BA%A6_%E5%B9%BF%E5%BA%A6%E4%BC%98%E5%85%88%E9%81%8D%E5%8E%86.html"}],["meta",{"property":"og:site_name","content":"Mr.He"}],["meta",{"property":"og:title","content":"深度&广度优先遍历"}],["meta",{"property":"og:description","content":"深度&amp;广度优先遍历 深度优先 深度优先 深度优先遍历就是当我们搜索一个树的分支时，遇到一个节点，我们会优先遍历它的子节点直到最后根节点为止，最后再遍历兄弟节点，从兄弟子节点寻找它的子节点，直到搜索到最后结果 const deepDFS = (root, nodeList = []) =&gt; { if(root === null) return nodeList.push(root.val) if(root.left) deepDFS(root.left, nodeList) if(root.right) deepDFS(root.right, nodeList) return nodeList }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-01T07:59:00.000Z"}],["meta",{"property":"article:author","content":"Mr.He"}],["meta",{"property":"article:modified_time","content":"2024-03-01T07:59:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"深度&广度优先遍历\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-01T07:59:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.He\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"深度优先","slug":"深度优先","link":"#深度优先","children":[]},{"level":2,"title":"广度优先","slug":"广度优先","link":"#广度优先","children":[]}],"git":{"createdTime":1709279940000,"updatedTime":1709279940000,"contributors":[{"name":"gift","email":"test@example.com","commits":1}]},"readingTime":{"minutes":0.6,"words":180},"filePathRelative":"posts/leetCode/二叉树/深度&广度优先遍历.md","localizedDate":"2024年3月1日","excerpt":"<h1> 深度&amp;广度优先遍历</h1>\\n<h2> 深度优先</h2>\\n<figure><figcaption>深度优先</figcaption></figure>\\n<p>深度优先遍历就是当我们搜索一个树的分支时，遇到一个节点，我们会优先遍历它的子节点直到最后根节点为止，最后再遍历兄弟节点，从兄弟子节点寻找它的子节点，直到搜索到最后结果</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">deepDFS</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">root<span class=\\"token punctuation\\">,</span> nodeList <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span></span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>root <span class=\\"token operator\\">===</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">return</span>\\n  nodeList<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span>root<span class=\\"token punctuation\\">.</span>val<span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>root<span class=\\"token punctuation\\">.</span>left<span class=\\"token punctuation\\">)</span> <span class=\\"token function\\">deepDFS</span><span class=\\"token punctuation\\">(</span>root<span class=\\"token punctuation\\">.</span>left<span class=\\"token punctuation\\">,</span> nodeList<span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>root<span class=\\"token punctuation\\">.</span>right<span class=\\"token punctuation\\">)</span> <span class=\\"token function\\">deepDFS</span><span class=\\"token punctuation\\">(</span>root<span class=\\"token punctuation\\">.</span>right<span class=\\"token punctuation\\">,</span> nodeList<span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token keyword\\">return</span> nodeList\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
