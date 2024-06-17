const n=JSON.parse('{"key":"v-f8e73916","path":"/posts/react/%E5%BA%94%E7%94%A8SOLID%E5%8E%9F%E5%88%99.html","title":"应用 SOLID 原则","lang":"zh-CN","frontmatter":{"description":"应用 SOLID 原则 单一职责原则 (SRP) 单一职责原则的定义是每个类应该只有一个职责，也就是只做一件事。 将功能较多的组件拆分为较小的组件 const ActiveUsersList = () =&gt; { const [users, setUsers] = useState([]); useEffect(() =&gt; { const loadUsers = async () =&gt; { const response = await fetch(\\"/some-api\\"); const data = await response.json(); setUsers(data); }; loadUsers(); }, []); const weekAgo = new Date(); weekAgo.setDate(weekAgo.getDate() - 7); return ( &lt;ul&gt; {users .filter((user) =&gt; !user.isBanned &amp;&amp; user.lastActivityAt &gt;= weekAgo) .map((user) =&gt; ( &lt;li key={user.id}&gt; &lt;img src={user.avatarUrl} /&gt; &lt;p&gt;{user.fullName}&lt;/p&gt; &lt;small&gt;{user.role}&lt;/small&gt; &lt;/li&gt; ))} &lt;/ul&gt; ); };","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/fe-blog/posts/react/%E5%BA%94%E7%94%A8SOLID%E5%8E%9F%E5%88%99.html"}],["meta",{"property":"og:site_name","content":"Mr.He"}],["meta",{"property":"og:title","content":"应用 SOLID 原则"}],["meta",{"property":"og:description","content":"应用 SOLID 原则 单一职责原则 (SRP) 单一职责原则的定义是每个类应该只有一个职责，也就是只做一件事。 将功能较多的组件拆分为较小的组件 const ActiveUsersList = () =&gt; { const [users, setUsers] = useState([]); useEffect(() =&gt; { const loadUsers = async () =&gt; { const response = await fetch(\\"/some-api\\"); const data = await response.json(); setUsers(data); }; loadUsers(); }, []); const weekAgo = new Date(); weekAgo.setDate(weekAgo.getDate() - 7); return ( &lt;ul&gt; {users .filter((user) =&gt; !user.isBanned &amp;&amp; user.lastActivityAt &gt;= weekAgo) .map((user) =&gt; ( &lt;li key={user.id}&gt; &lt;img src={user.avatarUrl} /&gt; &lt;p&gt;{user.fullName}&lt;/p&gt; &lt;small&gt;{user.role}&lt;/small&gt; &lt;/li&gt; ))} &lt;/ul&gt; ); };"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-17T07:24:46.000Z"}],["meta",{"property":"article:author","content":"Mr.He"}],["meta",{"property":"article:modified_time","content":"2024-06-17T07:24:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"应用 SOLID 原则\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-17T07:24:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.He\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"单一职责原则 (SRP)","slug":"单一职责原则-srp","link":"#单一职责原则-srp","children":[]},{"level":2,"title":"开放封闭原则（OCP）","slug":"开放封闭原则-ocp","link":"#开放封闭原则-ocp","children":[]},{"level":2,"title":"里氏替换原则（LSP）","slug":"里氏替换原则-lsp","link":"#里氏替换原则-lsp","children":[]},{"level":2,"title":"接口隔离原则（ISP）","slug":"接口隔离原则-isp","link":"#接口隔离原则-isp","children":[]},{"level":2,"title":"依赖倒置原则（DIP）","slug":"依赖倒置原则-dip","link":"#依赖倒置原则-dip","children":[]}],"git":{"createdTime":1718609086000,"updatedTime":1718609086000,"contributors":[{"name":"hexb","email":"test@example.com","commits":1}]},"readingTime":{"minutes":4.02,"words":1207},"filePathRelative":"posts/react/应用SOLID原则.md","localizedDate":"2024年6月17日","excerpt":"<h1> 应用 SOLID 原则</h1>\\n<h2> 单一职责原则 (SRP)</h2>\\n<p>单一职责原则的定义是每个类应该只有一个职责，也就是只做一件事。</p>\\n<p>将功能较多的组件拆分为较小的组件</p>\\n<div class=\\"language-jsx line-numbers-mode\\" data-ext=\\"jsx\\"><pre class=\\"language-jsx\\"><code><span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">ActiveUsersList</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">const</span> <span class=\\"token punctuation\\">[</span>users<span class=\\"token punctuation\\">,</span> setUsers<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token function\\">useState</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token function\\">useEffect</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">loadUsers</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">async</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">const</span> response <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">await</span> <span class=\\"token function\\">fetch</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"/some-api\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token keyword\\">const</span> data <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">await</span> response<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">json</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token function\\">setUsers</span><span class=\\"token punctuation\\">(</span>data<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token function\\">loadUsers</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token keyword\\">const</span> weekAgo <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Date</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  weekAgo<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">setDate</span><span class=\\"token punctuation\\">(</span>weekAgo<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getDate</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">-</span> <span class=\\"token number\\">7</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">(</span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>ul</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token plain-text\\">\\n      </span><span class=\\"token punctuation\\">{</span>users\\n        <span class=\\"token punctuation\\">.</span><span class=\\"token function\\">filter</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">user</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token operator\\">!</span>user<span class=\\"token punctuation\\">.</span>isBanned <span class=\\"token operator\\">&amp;&amp;</span> user<span class=\\"token punctuation\\">.</span>lastActivityAt <span class=\\"token operator\\">&gt;=</span> weekAgo<span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token punctuation\\">.</span><span class=\\"token function\\">map</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">user</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">(</span>\\n          <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>li</span> <span class=\\"token attr-name\\">key</span><span class=\\"token script language-javascript\\"><span class=\\"token script-punctuation punctuation\\">=</span><span class=\\"token punctuation\\">{</span>user<span class=\\"token punctuation\\">.</span>id<span class=\\"token punctuation\\">}</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token plain-text\\">\\n            </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>img</span> <span class=\\"token attr-name\\">src</span><span class=\\"token script language-javascript\\"><span class=\\"token script-punctuation punctuation\\">=</span><span class=\\"token punctuation\\">{</span>user<span class=\\"token punctuation\\">.</span>avatarUrl<span class=\\"token punctuation\\">}</span></span> <span class=\\"token punctuation\\">/&gt;</span></span><span class=\\"token plain-text\\">\\n            </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>p</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">{</span>user<span class=\\"token punctuation\\">.</span>fullName<span class=\\"token punctuation\\">}</span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>p</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token plain-text\\">\\n            </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>small</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">{</span>user<span class=\\"token punctuation\\">.</span>role<span class=\\"token punctuation\\">}</span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>small</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token plain-text\\">\\n          </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>li</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">}</span><span class=\\"token plain-text\\">\\n    </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>ul</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
