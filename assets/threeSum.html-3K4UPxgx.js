const n=JSON.parse('{"key":"v-2df3f872","path":"/posts/leetCode/threeSum.html","title":"三数之和","lang":"zh-CN","frontmatter":{"icon":"array","date":"2022-01-21T00:00:00.000Z","category":["算法"],"tag":["求和"],"star":true,"sticky":true,"description":"三数之和 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。 注意：答案中不可以包含重复的三元组。 示例： 给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ] function threeSum(nums){ \\tconst result = [] \\tconst newNums = [...nums].sort((val1, val2) =&gt; val1 - val2) \\tfor(let i = 0; i &lt; newNums.length &amp;&amp; newNums[i] &lt; 0; i++){ \\t\\tlet left = i \\t\\tlet min = i + 1 \\t\\tlet right = newNums.length -1 \\t\\twhile(min &lt; right){ \\t\\t\\tif(newNums[left] + newNums[min] + newNums[right] &gt; 0) right-- \\t\\t\\tif(newNums[left] + newNums[min] + newNums[right] &lt; 0) min++ \\t\\t\\tif(newNums[left] + newNums[min] + newNums[right] === 0) result.push([newNums[left], newNums[min], newNums[right]]) \\t\\t} \\t} \\treturn result }","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/fe-blog/posts/leetCode/threeSum.html"}],["meta",{"property":"og:site_name","content":"Mr.He"}],["meta",{"property":"og:title","content":"三数之和"}],["meta",{"property":"og:description","content":"三数之和 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。 注意：答案中不可以包含重复的三元组。 示例： 给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ] function threeSum(nums){ \\tconst result = [] \\tconst newNums = [...nums].sort((val1, val2) =&gt; val1 - val2) \\tfor(let i = 0; i &lt; newNums.length &amp;&amp; newNums[i] &lt; 0; i++){ \\t\\tlet left = i \\t\\tlet min = i + 1 \\t\\tlet right = newNums.length -1 \\t\\twhile(min &lt; right){ \\t\\t\\tif(newNums[left] + newNums[min] + newNums[right] &gt; 0) right-- \\t\\t\\tif(newNums[left] + newNums[min] + newNums[right] &lt; 0) min++ \\t\\t\\tif(newNums[left] + newNums[min] + newNums[right] === 0) result.push([newNums[left], newNums[min], newNums[right]]) \\t\\t} \\t} \\treturn result }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-24T03:29:31.000Z"}],["meta",{"property":"article:author","content":"Mr.He"}],["meta",{"property":"article:tag","content":"求和"}],["meta",{"property":"article:published_time","content":"2022-01-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-24T03:29:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"三数之和\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-24T03:29:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.He\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1706066971000,"updatedTime":1706066971000,"contributors":[{"name":"何雪斌","email":"hexuebin@megvii.com","commits":1}]},"readingTime":{"minutes":0.91,"words":273},"filePathRelative":"posts/leetCode/threeSum.md","localizedDate":"2022年1月21日","excerpt":"<h1> 三数之和</h1>\\n<p>给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。</p>\\n<p>注意：答案中不可以包含重复的三元组。</p>\\n<p>示例：</p>\\n<p>给定数组 nums = [-1, 0, 1, 2, -1, -4]，</p>\\n<p>满足要求的三元组集合为：\\n[\\n[-1, 0, 1],\\n[-1, -1, 2]\\n]</p>\\n<div class=\\"language-tsx line-numbers-mode\\" data-ext=\\"tsx\\"><pre class=\\"language-tsx\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token function\\">threeSum</span><span class=\\"token punctuation\\">(</span>nums<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">const</span> result <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span>\\n\\t<span class=\\"token keyword\\">const</span> newNums <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token operator\\">...</span>nums<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">sort</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span>val1<span class=\\"token punctuation\\">,</span> val2<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> val1 <span class=\\"token operator\\">-</span> val2<span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token keyword\\">for</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">let</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> newNums<span class=\\"token punctuation\\">.</span>length <span class=\\"token operator\\">&amp;&amp;</span> newNums<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n\\t\\t<span class=\\"token keyword\\">let</span> left <span class=\\"token operator\\">=</span> i\\n\\t\\t<span class=\\"token keyword\\">let</span> min <span class=\\"token operator\\">=</span> i <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span>\\n\\t\\t<span class=\\"token keyword\\">let</span> right <span class=\\"token operator\\">=</span> newNums<span class=\\"token punctuation\\">.</span>length <span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span>\\n\\t\\t<span class=\\"token keyword\\">while</span><span class=\\"token punctuation\\">(</span>min <span class=\\"token operator\\">&lt;</span> right<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n\\t\\t\\t<span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>newNums<span class=\\"token punctuation\\">[</span>left<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">+</span> newNums<span class=\\"token punctuation\\">[</span>min<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">+</span> newNums<span class=\\"token punctuation\\">[</span>right<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">&gt;</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span> right<span class=\\"token operator\\">--</span>\\n\\t\\t\\t<span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>newNums<span class=\\"token punctuation\\">[</span>left<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">+</span> newNums<span class=\\"token punctuation\\">[</span>min<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">+</span> newNums<span class=\\"token punctuation\\">[</span>right<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span> min<span class=\\"token operator\\">++</span>\\n\\t\\t\\t<span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>newNums<span class=\\"token punctuation\\">[</span>left<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">+</span> newNums<span class=\\"token punctuation\\">[</span>min<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">+</span> newNums<span class=\\"token punctuation\\">[</span>right<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">===</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span> result<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span>newNums<span class=\\"token punctuation\\">[</span>left<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> newNums<span class=\\"token punctuation\\">[</span>min<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> newNums<span class=\\"token punctuation\\">[</span>right<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n\\t\\t<span class=\\"token punctuation\\">}</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n\\t<span class=\\"token keyword\\">return</span> result\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};