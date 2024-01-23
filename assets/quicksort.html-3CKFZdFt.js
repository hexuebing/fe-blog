const n=JSON.parse('{"key":"v-e109311a","path":"/posts/leetCode/quicksort.html","title":"快速排序","lang":"zh-CN","frontmatter":{"icon":"array","cover":"/assets/images/quicksort.png","date":"2022-01-21T00:00:00.000Z","category":["算法"],"tag":["基础排序","快速排序"],"star":true,"sticky":true,"description":"快速排序 实现思路 基线条件——为空或只包含一个元素，就不需要排序 使用分治让其满足基线条件，取一个基准值将数组分为三部分，对两边数组继续治理 举例说明 例子 代码实现 function quickSort(arr){ if(arr.length &lt; 2){ return arr }else{ const pivot = arr[0] const prv = []; const next = []; for(let i = 1; i &lt; arr.length; i++){ if(arr[i] &lt; pivot){ prv.push(arr[i]) }else{ next.push(arr[i]) } } return quickSort(prv).concat(pivot, quickSort(next)) } }","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/fe-blog/posts/leetCode/quicksort.html"}],["meta",{"property":"og:site_name","content":"Mr.He"}],["meta",{"property":"og:title","content":"快速排序"}],["meta",{"property":"og:description","content":"快速排序 实现思路 基线条件——为空或只包含一个元素，就不需要排序 使用分治让其满足基线条件，取一个基准值将数组分为三部分，对两边数组继续治理 举例说明 例子 代码实现 function quickSort(arr){ if(arr.length &lt; 2){ return arr }else{ const pivot = arr[0] const prv = []; const next = []; for(let i = 1; i &lt; arr.length; i++){ if(arr[i] &lt; pivot){ prv.push(arr[i]) }else{ next.push(arr[i]) } } return quickSort(prv).concat(pivot, quickSort(next)) } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/fe-blog/assets/images/quicksort.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-23T06:44:17.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"快速排序"}],["meta",{"property":"article:author","content":"Mr.He"}],["meta",{"property":"article:tag","content":"基础排序"}],["meta",{"property":"article:tag","content":"快速排序"}],["meta",{"property":"article:published_time","content":"2022-01-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-23T06:44:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"快速排序\\",\\"image\\":[\\"https://mister-hope.github.io/fe-blog/assets/images/quicksort.png\\"],\\"datePublished\\":\\"2022-01-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-23T06:44:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.He\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"实现思路","slug":"实现思路","link":"#实现思路","children":[]},{"level":2,"title":"举例说明","slug":"举例说明","link":"#举例说明","children":[]},{"level":2,"title":"代码实现","slug":"代码实现","link":"#代码实现","children":[]}],"git":{"createdTime":1705979173000,"updatedTime":1705992257000,"contributors":[{"name":"何雪斌","email":"hexuebin@megvii.com","commits":4}]},"readingTime":{"minutes":0.47,"words":141},"filePathRelative":"posts/leetCode/quicksort.md","localizedDate":"2022年1月21日","excerpt":"<h1> 快速排序</h1>\\n<h2> 实现思路</h2>\\n<ul>\\n<li>基线条件——为空或只包含一个元素，就不需要排序</li>\\n<li>使用分治让其满足基线条件，取一个基准值将数组分为三部分，对两边数组继续治理</li>\\n</ul>\\n<h2> 举例说明</h2>\\n<figure><img src=\\"/assets/images/quicksort.png\\" alt=\\"例子\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>例子</figcaption></figure>\\n<h2> 代码实现</h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token function\\">quickSort</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">arr</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>arr<span class=\\"token punctuation\\">.</span>length <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> arr\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token keyword\\">else</span><span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">const</span> pivot <span class=\\"token operator\\">=</span> arr<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span>\\n        <span class=\\"token keyword\\">const</span> prv <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">const</span> next <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">for</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">let</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> arr<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>arr<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">&lt;</span> pivot<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n                prv<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span>arr<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n            <span class=\\"token punctuation\\">}</span><span class=\\"token keyword\\">else</span><span class=\\"token punctuation\\">{</span>\\n                next<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span>arr<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n            <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token function\\">quickSort</span><span class=\\"token punctuation\\">(</span>prv<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">concat</span><span class=\\"token punctuation\\">(</span>pivot<span class=\\"token punctuation\\">,</span> <span class=\\"token function\\">quickSort</span><span class=\\"token punctuation\\">(</span>next<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
