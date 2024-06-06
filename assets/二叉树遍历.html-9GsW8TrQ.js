const e=JSON.parse('{"key":"v-71fa6045","path":"/posts/leetCode/%E4%BA%8C%E5%8F%89%E6%A0%91/%E4%BA%8C%E5%8F%89%E6%A0%91%E9%81%8D%E5%8E%86.html","title":"二叉树遍历","lang":"zh-CN","frontmatter":{"description":"二叉树遍历 /** * Definition for a binary tree node. * function TreeNode(val, left, right) { * this.val = (val===undefined ? 0 : val) * this.left = (left===undefined ? null : left) * this.right = (right===undefined ? null : right) * } */ /** * @param {TreeNode} root * @return {number[]} */","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/fe-blog/posts/leetCode/%E4%BA%8C%E5%8F%89%E6%A0%91/%E4%BA%8C%E5%8F%89%E6%A0%91%E9%81%8D%E5%8E%86.html"}],["meta",{"property":"og:site_name","content":"Mr.He"}],["meta",{"property":"og:title","content":"二叉树遍历"}],["meta",{"property":"og:description","content":"二叉树遍历 /** * Definition for a binary tree node. * function TreeNode(val, left, right) { * this.val = (val===undefined ? 0 : val) * this.left = (left===undefined ? null : left) * this.right = (right===undefined ? null : right) * } */ /** * @param {TreeNode} root * @return {number[]} */"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-06T03:04:40.000Z"}],["meta",{"property":"article:author","content":"Mr.He"}],["meta",{"property":"article:modified_time","content":"2024-06-06T03:04:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"二叉树遍历\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-06T03:04:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.He\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"二叉树先序遍历","slug":"二叉树先序遍历","link":"#二叉树先序遍历","children":[{"level":3,"title":"递归方法","slug":"递归方法","link":"#递归方法","children":[]},{"level":3,"title":"栈方法","slug":"栈方法","link":"#栈方法","children":[]}]},{"level":2,"title":"二叉树中序遍历","slug":"二叉树中序遍历","link":"#二叉树中序遍历","children":[]},{"level":2,"title":"二叉树后序遍历","slug":"二叉树后序遍历","link":"#二叉树后序遍历","children":[{"level":3,"title":"递归实现","slug":"递归实现","link":"#递归实现","children":[]}]},{"level":2,"title":"遍历极简代码","slug":"遍历极简代码","link":"#遍历极简代码","children":[]}],"git":{"createdTime":1708849644000,"updatedTime":1717643080000,"contributors":[{"name":"gift","email":"test@example.com","commits":2},{"name":"hexb","email":"test@example.com","commits":1}]},"readingTime":{"minutes":1.39,"words":418},"filePathRelative":"posts/leetCode/二叉树/二叉树遍历.md","localizedDate":"2024年2月25日","excerpt":"<h1> 二叉树遍历</h1>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token doc-comment comment\\">/**\\n * Definition for a binary tree node.\\n * function TreeNode(val, left, right) <span class=\\"token punctuation\\">{</span>\\n *     this.val = (val===undefined ? 0 : val)\\n *     this.left = (left===undefined ? null : left)\\n *     this.right = (right===undefined ? null : right)\\n * <span class=\\"token punctuation\\">}</span>\\n */</span>\\n<span class=\\"token doc-comment comment\\">/**\\n * <span class=\\"token keyword\\">@param</span> <span class=\\"token class-name\\"><span class=\\"token punctuation\\">{</span>TreeNode<span class=\\"token punctuation\\">}</span></span> <span class=\\"token parameter\\">root</span>\\n * <span class=\\"token keyword\\">@return</span> <span class=\\"token class-name\\"><span class=\\"token punctuation\\">{</span>number<span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">}</span></span>\\n */</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
