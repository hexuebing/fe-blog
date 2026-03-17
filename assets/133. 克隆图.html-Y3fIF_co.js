import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-eAFVDXBg.js";const p={},t=e(`<p>这是一道经典的图遍历问题。为了实现对图的“深拷贝”，我们需要遍历原图，并创建所有节点的新实例。由于图可能包含环（例如 1 连接 2，2 又连接 1），我们必须记录已经访问并克隆过的节点，以避免无限循环。 这里提供两种常见的 JavaScript 实现方式：<strong>深度优先搜索 (DFS)</strong> 和 <strong>广度优先搜索 (BFS)</strong>。</p><h3 id="方法一-深度优先搜索-dfs-递归" tabindex="-1"><a class="header-anchor" href="#方法一-深度优先搜索-dfs-递归" aria-hidden="true">#</a> 方法一：深度优先搜索 (DFS) - 递归</h3><p>这是最直观的方法。我们使用一个哈希表（Map）来存储 <code>原节点 -&gt; 新节点</code> 的映射。 <strong>思路：</strong></p><ol><li>如果节点为空，返回 <code>null</code>。</li><li>如果当前节点已经被克隆过（存在于 Map 中），直接返回 Map 中的克隆节点。</li><li>如果没有被克隆过，创建一个新的节点，将其存入 Map。</li><li>递归克隆当前节点的所有邻居，并将克隆后的邻居添加到新节点的邻居列表中。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * // Definition for a Node.
 * function Node(val, neighbors) <span class="token punctuation">{</span>
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * <span class="token punctuation">}</span>;
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span> <span class="token parameter">node</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">cloneGraph</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 边界情况处理：如果输入为空</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token comment">// 使用 Map 存储原节点到克隆节点的映射，防止重复克隆和死循环</span>
    <span class="token keyword">const</span> visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 定义 DFS 递归函数</span>
    <span class="token keyword">function</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token parameter">originalNode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1. 如果该节点已经被克隆过，直接返回克隆后的节点</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>visited<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>originalNode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> visited<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>originalNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 2. 创建克隆节点</span>
        <span class="token comment">// 注意：这里暂时不处理 neighbors，因为它们可能还没被创建</span>
        <span class="token keyword">const</span> cloneNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>originalNode<span class="token punctuation">.</span>val<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 3. 将映射存入 Map，必须在递归调用之前存储，防止环导致的死循环</span>
        visited<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>originalNode<span class="token punctuation">,</span> cloneNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 4. 遍历邻居，递归克隆</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> neighbor <span class="token keyword">of</span> originalNode<span class="token punctuation">.</span>neighbors<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 将克隆后的邻居加入当前克隆节点的 neighbors 列表</span>
            cloneNode<span class="token punctuation">.</span>neighbors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">dfs</span><span class="token punctuation">(</span>neighbor<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> cloneNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 从入口节点开始 DFS</span>
    <span class="token keyword">return</span> <span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="方法二-广度优先搜索-bfs-迭代" tabindex="-1"><a class="header-anchor" href="#方法二-广度优先搜索-bfs-迭代" aria-hidden="true">#</a> 方法二：广度优先搜索 (BFS) - 迭代</h3><p>如果你不想使用递归，或者担心递归深度过深，可以使用 BFS。 <strong>思路：</strong></p><ol><li>使用队列来进行层序遍历。</li><li>同样使用 Map 来记录已克隆的节点。</li><li>初始时克隆第一个节点放入队列。</li><li>只要队列不为空，取出节点，遍历其邻居： <ul><li>如果邻居没被克隆过，克隆它并放入队列。</li><li>将克隆后的邻居添加到当前节点的克隆节点的邻居列表中。</li></ul></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * // Definition for a Node.
 * function Node(val, neighbors) <span class="token punctuation">{</span>
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * <span class="token punctuation">}</span>;
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span> <span class="token parameter">node</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">cloneGraph</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token comment">// Map 用于存储 原节点 -&gt; 克隆节点 的映射</span>
    <span class="token keyword">const</span> visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 队列用于 BFS 遍历</span>
    <span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 1. 克隆第一个节点并放入队列和 Map</span>
    <span class="token keyword">const</span> cloneNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    visited<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> cloneNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 2. 开始 BFS 遍历</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> currentOriginal <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 遍历当前原节点的邻居</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> neighbor <span class="token keyword">of</span> currentOriginal<span class="token punctuation">.</span>neighbors<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 如果邻居没有被克隆过</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>neighbor<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 克隆邻居</span>
                <span class="token keyword">const</span> newNeighbor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>neighbor<span class="token punctuation">.</span>val<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                visited<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>neighbor<span class="token punctuation">,</span> newNeighbor<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 将原邻居加入队列，以便后续处理它的邻居</span>
                queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>neighbor<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            
            <span class="token comment">// 这一步是关键：</span>
            <span class="token comment">// 获取原节点对应的克隆节点</span>
            <span class="token comment">// 将克隆后的邻居添加到当前克隆节点的邻居列表中</span>
            visited<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>currentOriginal<span class="token punctuation">)</span><span class="token punctuation">.</span>neighbors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>visited<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>neighbor<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> cloneNode<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h3><p>两种方法的时间复杂度和空间复杂度相同：</p><ul><li><strong>时间复杂度</strong>：$O(N)$，其中 $N$ 是节点的数量。我们需要遍历图中的每一个节点和每一条边。</li><li><strong>空间复杂度</strong>：$O(N)$。哈希表 <code>visited</code> 存储了所有节点的映射。在 DFS 中是递归栈的开销，在 BFS 中是队列的开销，最坏情况下都是 $O(N)$。</li></ul>`,13),o=[t];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","133. 克隆图.html.vue"]]);export{k as default};
