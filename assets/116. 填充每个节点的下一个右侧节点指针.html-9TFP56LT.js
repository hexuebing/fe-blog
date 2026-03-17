import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as t}from"./app-eAFVDXBg.js";const e={},p=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) <span class="token punctuation">{</span>
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * <span class="token punctuation">}</span>;
 */</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>_Node<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>_Node<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">connect</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 修正1: 空树返回 null</span>

    <span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> levelSize <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> levelSize<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 修正2: 在循环内部取出节点</span>
            <span class="token keyword">const</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 核心逻辑：如果当前节点不是该层的最后一个节点，则连接到队列中的下一个节点</span>
            <span class="token comment">// 队列中下一个节点 (queue[0]) 就是当前节点右侧的节点</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> levelSize <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                node<span class="token punctuation">.</span>next <span class="token operator">=</span> queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 如果是最后一个节点 (i === levelSize - 1)，node.next 保持为 null (默认值)，无需显式设置</span>

            <span class="token comment">// 加入子节点</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> root<span class="token punctuation">;</span> <span class="token comment">// 修正3: 返回修改后的树根节点</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定义功能函数" tabindex="-1"><a class="header-anchor" href="#定义功能函数" aria-hidden="true">#</a> 定义功能函数</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">connect</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token function">connectTwo</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
    <span class="token keyword">return</span> root
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">connectTwo</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>left <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> right <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

    left<span class="token punctuation">.</span>next <span class="token operator">=</span> right
    <span class="token function">connectTwo</span><span class="token punctuation">(</span>left<span class="token punctuation">.</span>left<span class="token punctuation">,</span> left<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
    <span class="token function">connectTwo</span><span class="token punctuation">(</span>right<span class="token punctuation">.</span>left<span class="token punctuation">,</span> right<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
		
		<span class="token comment">// 跨父节点链接</span>
    <span class="token function">connectTwo</span><span class="token punctuation">(</span>left<span class="token punctuation">.</span>right<span class="token punctuation">,</span> right<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function c(l,i){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","116. 填充每个节点的下一个右侧节点指针.html.vue"]]);export{k as default};
