const n=JSON.parse(`{"key":"v-5da22754","path":"/posts/leetCode/uniqueArray.html","title":"数组去重","lang":"zh-CN","frontmatter":{"icon":"array","date":"2022-11-03T00:00:00.000Z","category":["算法"],"tag":["数组去重"],"star":true,"sticky":true,"description":"数组去重 数组中包含数组 输入：[1, 2, 3, 1, '1', [1, 2, 1]] 输出： [1,2,3, '1', [1, 2]] 错误版 function unique(nums){ let res = [] for(let num of nums){ if(Array.isArray(num)){ res.push(unique(num)) }else{ if(!res.includes(num)){ res.push(num) } } } \\t\\t// 这里缺少了返回 }","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/fe-blog/posts/leetCode/uniqueArray.html"}],["meta",{"property":"og:site_name","content":"Mr.He"}],["meta",{"property":"og:title","content":"数组去重"}],["meta",{"property":"og:description","content":"数组去重 数组中包含数组 输入：[1, 2, 3, 1, '1', [1, 2, 1]] 输出： [1,2,3, '1', [1, 2]] 错误版 function unique(nums){ let res = [] for(let num of nums){ if(Array.isArray(num)){ res.push(unique(num)) }else{ if(!res.includes(num)){ res.push(num) } } } \\t\\t// 这里缺少了返回 }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-25T05:07:46.000Z"}],["meta",{"property":"article:author","content":"Mr.He"}],["meta",{"property":"article:tag","content":"数组去重"}],["meta",{"property":"article:published_time","content":"2022-11-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-25T05:07:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数组去重\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-03T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-25T05:07:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.He\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"数组中包含数组","slug":"数组中包含数组","link":"#数组中包含数组","children":[{"level":3,"title":"错误版","slug":"错误版","link":"#错误版","children":[]},{"level":3,"title":"修正版本","slug":"修正版本","link":"#修正版本","children":[]}]},{"level":2,"title":"filter去重","slug":"filter去重","link":"#filter去重","children":[]},{"level":2,"title":"新数组","slug":"新数组","link":"#新数组","children":[{"level":3,"title":"reduce","slug":"reduce","link":"#reduce","children":[]}]},{"level":2,"title":"Set去重","slug":"set去重","link":"#set去重","children":[]},{"level":2,"title":"Map去重","slug":"map去重","link":"#map去重","children":[]},{"level":2,"title":"排序相邻","slug":"排序相邻","link":"#排序相邻","children":[]},{"level":2,"title":"reduce去重","slug":"reduce去重","link":"#reduce去重","children":[]},{"level":2,"title":"Map去重","slug":"map去重-1","link":"#map去重-1","children":[]},{"level":2,"title":"双循环去重","slug":"双循环去重","link":"#双循环去重","children":[]}],"git":{"createdTime":1706066971000,"updatedTime":1706159266000,"contributors":[{"name":"何雪斌","email":"hexuebin@megvii.com","commits":2}]},"readingTime":{"minutes":1.44,"words":432},"filePathRelative":"posts/leetCode/uniqueArray.md","localizedDate":"2022年11月3日","excerpt":"<h1> 数组去重</h1>\\n<h2> 数组中包含数组</h2>\\n<p>输入：<code>[1, 2, 3, 1, '1', [1, 2, 1]]</code></p>\\n<p>输出： <code>[1,2,3, '1', [1, 2]]</code></p>\\n<h3> 错误版</h3>\\n<div class=\\"language-jsx line-numbers-mode\\" data-ext=\\"jsx\\"><pre class=\\"language-jsx\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token function\\">unique</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">nums</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">let</span> res <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span>\\n    <span class=\\"token keyword\\">for</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">let</span> num <span class=\\"token keyword\\">of</span> nums<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>Array<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">isArray</span><span class=\\"token punctuation\\">(</span>num<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n            res<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span><span class=\\"token function\\">unique</span><span class=\\"token punctuation\\">(</span>num<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token punctuation\\">}</span><span class=\\"token keyword\\">else</span><span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span>res<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">includes</span><span class=\\"token punctuation\\">(</span>num<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n                res<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span>num<span class=\\"token punctuation\\">)</span>\\n            <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\t\\t<span class=\\"token comment\\">// 这里缺少了返回</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
