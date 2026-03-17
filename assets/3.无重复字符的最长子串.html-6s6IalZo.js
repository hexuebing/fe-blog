import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as t}from"./app-eAFVDXBg.js";const p={},e=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">lengthOfLongestSubstring</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 哈希集合，记录每个字符是否出现过</span>
    <span class="token keyword">const</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> n <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token comment">// 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动</span>
    <span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> maxLen <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> left <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> left<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 左指针向右移动一格，移除一个字符</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            set<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>left <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token comment">// 不断地向右移动右指针，直到遇到重复字符或者到达字符串末尾</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>right <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>right <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            right<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token comment">// 第 left 到 right 个字符是一个极长的无重复字符子串</span>
        <span class="token comment">// 长度为 right - left + 1</span>
        maxLen <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxLen<span class="token punctuation">,</span> right <span class="token operator">-</span> left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> maxLen<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更简洁的写法-优化版" tabindex="-1"><a class="header-anchor" href="#更简洁的写法-优化版" aria-hidden="true">#</a> 更简洁的写法（优化版）</h3><p>下面这种写法逻辑更直观：遇到重复字符时，直接收缩左边界。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">lengthOfLongestSubstring</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> maxLen <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> charSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> right <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> right<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 当前字符</span>
        <span class="token keyword">const</span> currentChar <span class="token operator">=</span> s<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token comment">// 如果 Set 中存在该字符，说明重复了</span>
        <span class="token comment">// 移动左指针，并删除左指针经过的字符，直到 Set 中不包含当前字符</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>charSet<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>currentChar<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            charSet<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            left<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 将当前字符加入 Set</span>
        charSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>currentChar<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 更新最大长度 (当前窗口大小为 right - left + 1)</span>
        maxLen <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxLen<span class="token punctuation">,</span> right <span class="token operator">-</span> left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> maxLen<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","3.无重复字符的最长子串.html.vue"]]);export{k as default};
