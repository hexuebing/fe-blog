const e=JSON.parse(`{"key":"v-531c146c","path":"/posts/leetCode/%E5%AD%97%E7%AC%A6%E4%B8%B2/%E6%9C%89%E6%95%88%E6%8B%AC%E5%8F%B7%E6%95%B0.html","title":"有效括号","lang":"zh-CN","frontmatter":{"description":"有效括号 给定一个只包括 '('，')'，'{'，'}'，'['，']'&nbsp;的字符串，判断字符串是否有效。 有效字符串需满足： 左括号必须用相同类型的右括号闭合。 左括号必须以正确的顺序闭合。 注意空字符串可被认为是有效字符串。 示例 1: 输入: \\"()\\" 输出: true 示例 2: 输入: \\"()[]{}\\" 输出: true 示例 3: 输入: \\"(]\\" 输出: false 示例 4: 输入: \\"([)]\\" 输出: false 示例 5: 输入: \\"{[]}\\" 输出: true","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/fe-blog/posts/leetCode/%E5%AD%97%E7%AC%A6%E4%B8%B2/%E6%9C%89%E6%95%88%E6%8B%AC%E5%8F%B7%E6%95%B0.html"}],["meta",{"property":"og:site_name","content":"Mr.He"}],["meta",{"property":"og:title","content":"有效括号"}],["meta",{"property":"og:description","content":"有效括号 给定一个只包括 '('，')'，'{'，'}'，'['，']'&nbsp;的字符串，判断字符串是否有效。 有效字符串需满足： 左括号必须用相同类型的右括号闭合。 左括号必须以正确的顺序闭合。 注意空字符串可被认为是有效字符串。 示例 1: 输入: \\"()\\" 输出: true 示例 2: 输入: \\"()[]{}\\" 输出: true 示例 3: 输入: \\"(]\\" 输出: false 示例 4: 输入: \\"([)]\\" 输出: false 示例 5: 输入: \\"{[]}\\" 输出: true"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-01T07:59:00.000Z"}],["meta",{"property":"article:author","content":"Mr.He"}],["meta",{"property":"article:modified_time","content":"2024-03-01T07:59:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"有效括号\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-01T07:59:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.He\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"我的解法：","slug":"我的解法","link":"#我的解法","children":[]},{"level":2,"title":"优秀的解法：","slug":"优秀的解法","link":"#优秀的解法","children":[]}],"git":{"createdTime":1709279940000,"updatedTime":1709279940000,"contributors":[{"name":"gift","email":"test@example.com","commits":1}]},"readingTime":{"minutes":0.84,"words":251},"filePathRelative":"posts/leetCode/字符串/有效括号数.md","localizedDate":"2024年3月1日","excerpt":"<h1> 有效括号</h1>\\n<p>给定一个只包括 '('，')'，'{'，'}'，'['，']'&nbsp;的字符串，判断字符串是否有效。</p>\\n<p>有效字符串需满足：</p>\\n<p>左括号必须用相同类型的右括号闭合。\\n左括号必须以正确的顺序闭合。\\n注意空字符串可被认为是有效字符串。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code>示例 <span class=\\"token number\\">1</span><span class=\\"token operator\\">:</span>\\n<span class=\\"token literal-property property\\">输入</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"()\\"</span>\\n<span class=\\"token literal-property property\\">输出</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span>\\n示例 <span class=\\"token number\\">2</span><span class=\\"token operator\\">:</span>\\n<span class=\\"token literal-property property\\">输入</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"()[]{}\\"</span>\\n<span class=\\"token literal-property property\\">输出</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span>\\n示例 <span class=\\"token number\\">3</span><span class=\\"token operator\\">:</span>\\n<span class=\\"token literal-property property\\">输入</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"(]\\"</span>\\n<span class=\\"token literal-property property\\">输出</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">false</span>\\n示例 <span class=\\"token number\\">4</span><span class=\\"token operator\\">:</span>\\n<span class=\\"token literal-property property\\">输入</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"([)]\\"</span>\\n<span class=\\"token literal-property property\\">输出</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">false</span>\\n示例 <span class=\\"token number\\">5</span><span class=\\"token operator\\">:</span>\\n<span class=\\"token literal-property property\\">输入</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"{[]}\\"</span>\\n<span class=\\"token literal-property property\\">输出</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
