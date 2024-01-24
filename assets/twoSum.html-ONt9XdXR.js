const t=JSON.parse('{"key":"v-313f0596","path":"/posts/leetCode/twoSum.html","title":"两数之和","lang":"zh-CN","frontmatter":{"icon":"tree","date":"2022-01-21T00:00:00.000Z","category":["算法"],"tag":["求和"],"star":true,"sticky":true,"description":"两数之和 双层循环 function twoSum(nums, target){ \\tfor(let i = 0; i &lt; nums.length; i++){ \\t\\tfor(let j = i+1; j &lt; nums.length; j++){ \\t\\t\\tif(nums[i]+nums[j] === target) return [i,j] \\t\\t} \\t} }","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/fe-blog/posts/leetCode/twoSum.html"}],["meta",{"property":"og:site_name","content":"Mr.He"}],["meta",{"property":"og:title","content":"两数之和"}],["meta",{"property":"og:description","content":"两数之和 双层循环 function twoSum(nums, target){ \\tfor(let i = 0; i &lt; nums.length; i++){ \\t\\tfor(let j = i+1; j &lt; nums.length; j++){ \\t\\t\\tif(nums[i]+nums[j] === target) return [i,j] \\t\\t} \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-24T03:29:31.000Z"}],["meta",{"property":"article:author","content":"Mr.He"}],["meta",{"property":"article:tag","content":"求和"}],["meta",{"property":"article:published_time","content":"2022-01-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-24T03:29:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"两数之和\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-24T03:29:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.He\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"双层循环","slug":"双层循环","link":"#双层循环","children":[]},{"level":2,"title":"排序双指针移动","slug":"排序双指针移动","link":"#排序双指针移动","children":[]},{"level":2,"title":"hash表","slug":"hash表","link":"#hash表","children":[]},{"level":2,"title":"indexOf","slug":"indexof","link":"#indexof","children":[]}],"git":{"createdTime":1706066971000,"updatedTime":1706066971000,"contributors":[{"name":"何雪斌","email":"hexuebin@megvii.com","commits":1}]},"readingTime":{"minutes":0.84,"words":251},"filePathRelative":"posts/leetCode/twoSum.md","localizedDate":"2022年1月21日","excerpt":"<h1> 两数之和</h1>\\n<h2> 双层循环</h2>\\n<div class=\\"language-tsx line-numbers-mode\\" data-ext=\\"tsx\\"><pre class=\\"language-tsx\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token function\\">twoSum</span><span class=\\"token punctuation\\">(</span>nums<span class=\\"token punctuation\\">,</span> target<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">for</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">let</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> nums<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n\\t\\t<span class=\\"token keyword\\">for</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">let</span> j <span class=\\"token operator\\">=</span> i<span class=\\"token operator\\">+</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span> j <span class=\\"token operator\\">&lt;</span> nums<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">;</span> j<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n\\t\\t\\t<span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>nums<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token operator\\">+</span>nums<span class=\\"token punctuation\\">[</span>j<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">===</span> target<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">,</span>j<span class=\\"token punctuation\\">]</span>\\n\\t\\t<span class=\\"token punctuation\\">}</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};