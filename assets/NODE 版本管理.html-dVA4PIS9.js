import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as e,f as a}from"./app-eAFVDXBg.js";const i={},l=a(`<h2 id="user-corepack-用来管理包管理工具的版本-有没有类似的来管理-node-版本的工具" tabindex="-1"><a class="header-anchor" href="#user-corepack-用来管理包管理工具的版本-有没有类似的来管理-node-版本的工具" aria-hidden="true">#</a> User: corepack 用来管理包管理工具的版本，有没有类似的来管理 node 版本的工具</h2><p>Kimi: 当然有，以下是几个与 Corepack 类似的、用于管理 Node.js 版本的工具：</p><ol><li><strong>nvm（Node Version Manager）</strong></li></ol><p>最常用的 Node.js 版本管理工具之一，支持安装、切换多个 Node.js 版本。</p><ul><li><p>支持 <code>.nvmrc</code> 文件，自动根据项目目录切换版本</p></li><li><p>支持 macOS、Linux，Windows 用户可使用 nvm-windows</p></li><li><p>常用命令：</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
nvm <span class="token function">install</span> <span class="token number">18.17</span>.0

nvm use <span class="token number">18.17</span>.0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><strong>fnm（Fast Node Manager）</strong></li></ol><p>一个用 Rust 编写的快速替代方案，功能类似 nvm，但性能更好，支持跨平台。</p><ul><li><p>支持 <code>.nvmrc</code> 或 <code>.node-version</code> 文件，自动切换版本</p></li><li><p>配置简单，适合 CI 和多项目开发</p></li><li><p>常用命令：</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
fnm <span class="token function">install</span> <span class="token number">18.17</span>.0

fnm use <span class="token number">18.17</span>.0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><strong>n 工具</strong></li></ol><p>一个轻量级的 Node.js 版本管理工具，适合极简用户。</p><ul><li><p>使用简单，适合快速切换版本</p></li><li><p>不支持 <code>.nvmrc</code>，但可以通过脚本实现自动切换</p></li><li><p>常用命令：</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
n <span class="token number">18.17</span>.0

n lts

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><ul><li><p>如果你需要自动切换、项目隔离，推荐使用 <strong>fnm</strong> 或 <strong>nvm</strong>。</p></li><li><p>如果你追求极简和速度，<strong>n 工具</strong> 是不错的选择。</p></li><li><p>这些工具可以与 Corepack 搭配使用，分别管理 Node.js 和包管理器版本，打造一致、可复现的开发环境。</p></li></ul><h2 id="nvm-如何配置-nvmrc-来实现项目自动切换-node版本" tabindex="-1"><a class="header-anchor" href="#nvm-如何配置-nvmrc-来实现项目自动切换-node版本" aria-hidden="true">#</a> nvm 如何配置.nvmrc 来实现项目自动切换 node版本</h2><p>Kimi: 下面给出 3 种常见使用场景的完整配置流程，按“装 → 写 → 切 → 自动”四步走，复制即可落地。</p><p>（以 macOS/Linux 为例，Windows nvm-windows 同理，仅路径格式不同）</p><hr><ol><li>装：确保已装 nvm</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">curl</span> -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh <span class="token operator">|</span> <span class="token function">bash</span>

<span class="token comment"># 重开终端后</span>

nvm <span class="token parameter variable">--version</span> <span class="token comment"># 有输出版本号即 OK</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ol start="2"><li>写：在项目根放 .nvmrc</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token builtin class-name">cd</span> your-project

<span class="token builtin class-name">echo</span> <span class="token string">&quot;18.17.0&quot;</span> <span class="token operator">&gt;</span> .nvmrc <span class="token comment"># 也可以是 lts/hydrogen、16、node 等任意 nvm 可用别名</span>

<span class="token function">cat</span> .nvmrc <span class="token comment"># 确认写入</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ol start="3"><li>切：第一次手动安装并切换</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
nvm <span class="token function">install</span> <span class="token comment"># 读取 .nvmrc，缺版本则自动下载</span>

nvm use <span class="token comment"># 切换到 .nvmrc 指定版本</span>

<span class="token function">node</span> <span class="token parameter variable">-v</span> <span class="token comment"># 验证</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以后每次进目录只要执行 <code>nvm use</code> 即可；如果想“连手都懒得动”，继续看第 4 步。</p><hr><ol start="4"><li>自动：进目录即切换（二选一）</li></ol><p>A. 最简 —— 官方提供的 bash/zsh 钩子</p><p>把下面代码追加到 <code>~/.bashrc</code> 或 <code>~/.zshrc</code> 并 <code>source</code> 重载：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 放在 nvm 初始化代码之后</span>

autoload <span class="token parameter variable">-U</span> add-zsh-hook <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null <span class="token comment"># zsh 专用；bash 可省略</span>

<span class="token function-name function">nvm_auto_use</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;.nvmrc&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>

nvm use

<span class="token keyword">elif</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>nvm version<span class="token variable">)</span></span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>

nvm use default <span class="token comment"># 离开有 .nvmrc 的目录后回到默认版本</span>

<span class="token keyword">fi</span>

<span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$ZSH_VERSION</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>

add-zsh-hook chpwd nvm_auto_use

<span class="token keyword">else</span> <span class="token comment"># bash</span>

<span class="token assign-left variable">PROMPT_COMMAND</span><span class="token operator">=</span><span class="token string">&quot;nvm_auto_use; <span class="token variable">$PROMPT_COMMAND</span>&quot;</span>

<span class="token keyword">fi</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>B. 更快 —— 用 zsh 插件（oh-my-zsh 已集成）</p><p><code>~/.zshrc</code> 里打开插件即可：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token assign-left variable">plugins</span><span class="token operator">=</span><span class="token punctuation">(</span>git nvm<span class="token punctuation">)</span> <span class="token comment"># oh-my-zsh 自带 nvm 插件，支持自动 use</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ol start="5"><li>常见疑问速查</li></ol><table><thead><tr><th>问题</th><th>解答</th></tr></thead><tbody><tr><td>版本号怎么写？</td><td>任意 <code>nvm ls-remote</code> 列出的完整号、别名如 <code>lts/hydrogen</code>、大版本号 <code>18</code> 均可。</td></tr><tr><td>全局默认版本</td><td><code>nvm alias default 18.17.0</code></td></tr><tr><td>离开项目后想回默认</td><td>上面自动脚本已内置 <code>nvm use default</code>；也可手动 <code>nvm use default</code></td></tr><tr><td>CI 怎么用？</td><td>在 GitHub Actions 等里加 <code>- run: nvm install</code> 即可，无需全局装 Node。</td></tr></tbody></table><hr><p>一句话总结</p><p>“项目里放 <code>.nvmrc</code> → 执行 <code>nvm install</code>/<code>nvm use</code> → 给 shell 加一行钩子”，即可实现“cd 进目录自动切换 Node 版本”，与 Corepack 管理包管理器版本的做法完全对称。</p><h2 id="我是用了-zsh-插件-但是切换到项目目录-没有自动切换-node-版本" tabindex="-1"><a class="header-anchor" href="#我是用了-zsh-插件-但是切换到项目目录-没有自动切换-node-版本" aria-hidden="true">#</a> 我是用了 zsh 插件，但是切换到项目目录，没有自动切换 node 版本</h2><p>Kimi: zsh 的 <strong>nvm 插件</strong> 默认<strong>只提供快捷键和补全</strong>，<strong>并不会</strong>在 <code>cd</code> 进目录时帮你读 <code>.nvmrc</code> 并自动 <code>nvm use</code>。</p><p>想“进目录就切版本”必须再开 <strong>zsh-nvm</strong> 的 <strong>&quot;auto use&quot; 选项</strong>（或者自己写钩子）。下面给出 3 种最常用修复方案，挑一条照做即可。</p><hr><p>方案 1：继续用 oh-my-zsh，只补一行配置（最快）</p><ol><li>确保用 <strong>zsh-nvm</strong> 而不是自带的 nvm 插件</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># ~/.zshrc</span>

<span class="token assign-left variable">plugins</span><span class="token operator">=</span><span class="token punctuation">(</span>git zsh-nvm<span class="token punctuation">)</span> <span class="token comment"># 把原来的 nvm 换成 zsh-nvm</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>打开自动 use 开关</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 仍在 ~/.zshrc，插件行下面补一句</span>

<span class="token builtin class-name">export</span> <span class="token assign-left variable">NVM_AUTO_USE</span><span class="token operator">=</span>true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>重载</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token builtin class-name">source</span> ~/.zshrc

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>验证</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token builtin class-name">cd</span> ~/your-project <span class="token comment"># 目录下含 .nvmrc</span>

<span class="token function">node</span> <span class="token parameter variable">-v</span> <span class="token comment"># 应该立刻变成 .nvmrc 指定的版本</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>方案 2：不想换插件，自己加 3 行钩子（零依赖）</p><p>把下面代码放到 <code>~/.zshrc</code> 最后（nvm 初始化之后）即可：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 自动加载 .nvmrc</span>

autoload <span class="token parameter variable">-U</span> add-zsh-hook

<span class="token function-name function">load-nvmrc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-f</span> .nvmrc <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> nvm use

<span class="token punctuation">}</span>

add-zsh-hook chpwd load-nvmrc

load-nvmrc <span class="token comment"># 当前目录若已有 .nvmrc 也触发一次</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保存后 <code>source ~/.zshrc</code>，再 <code>cd</code> 就有反应。</p><hr><p>方案 3：改用 fnm（毫秒级切换，原生支持 <code>.nvmrc</code>/<code>.node-version</code>）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 1. 装 fnm</span>

<span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://fnm.vercel.app/install <span class="token operator">|</span> <span class="token function">bash</span>

  

<span class="token comment"># 2. 把启动代码追加到 ~/.zshrc（安装脚本已写，检查有无即可）</span>

<span class="token builtin class-name">eval</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>fnm <span class="token function">env</span> --use-on-cd<span class="token variable">)</span></span>&quot;</span>

  

<span class="token comment"># 3. 进目录测试</span>

<span class="token builtin class-name">cd</span> ~/your-project

<span class="token function">node</span> <span class="token parameter variable">-v</span> <span class="token comment"># 自动切换</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>fnm 在 <code>cd</code> 时由 Rust 二进制瞬间完成，几乎无感知。</p><hr><p>排障小贴士</p><ul><li><p>确认 <code>.nvmrc</code> 放在你 <code>cd</code> 到达的<strong>最终目录</strong>，而不是祖先目录。</p></li><li><p>某些终端（如 VS Code 内置终端）会缓存 <code>node</code> 路径，重开标签页或执行 <code>hash -r</code> 即可。</p></li><li><p>如果之前手动 <code>nvm use</code> 过，再 <code>cd</code> 不会重复切换，这是预期行为；版本已对了。</p></li></ul><p>按上面任一方案改完就能“cd 项目 → 自动切 Node 版本”。祝使用愉快！</p><p>User: 我是用了 fnm 进行 node 版本管理，但是看到结果如下</p><p>Using Node v16.18.0</p><p>➜ economyclient2.0 git:(new-jy3-zsb2.0) node -v</p><p>v22.12.0</p><p>我想应该是 VS Code 内置终端会缓存 node 路径，但是如何彻底解决这个缓存问题呢</p><p>Kimi: VS Code 的集成终端只在<strong>第一次启动时</strong>读一次 <code>PATH</code>，</p><p>fnm 的动态 <code>PATH</code> 改动发生在<strong>每次 shell 初始化</strong>，</p><p>因此会出现“fnm 已切换、但 VS Code 里 <code>which node</code> 还是旧路径”的假象。</p><p>下面给出 3 种彻底根治办法，任选其一即可。</p><hr><ol><li><p>让 VS Code 随窗口自动重载环境（官方支持，零配置）</p></li><li><p>打开命令面板 ⇧⌘P → 输入并执行</p></li></ol><p><code>Terminal: Manage Workspace Shell Permissions</code></p><ol start="2"><li><p>勾选 <strong>“允许在此工作区中自动恢复终端环境”</strong></p></li><li><p>关闭所有终端窗口（垃圾桶图标），再开新终端。</p></li></ol><p>以后每次打开项目，VS Code 会主动把 fnm 的 <code>PATH</code> 补丁注入新终端，不再缓存旧 node。</p><hr><ol start="2"><li><p>把 fnm 的 <code>PATH</code> 补丁提前到 VS Code 主进程（一次配，全局生效）</p></li><li><p>完全退出 VS Code（包括后台 Dock 图标）。</p></li><li><p>用<strong>系统自带终端</strong>启动一次 VS Code，让它继承已初始化好的环境：</p></li></ol><ul><li>macOS</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
code ~/.zshrc <span class="token comment"># 任意文件，目的只是启动</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Windows</li></ul><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>
code<span class="token punctuation">.</span>cmd

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>正常打开你的项目；此时集成终端里的 <code>node</code> 就是 fnm 版本。</li></ol><p>以后只要不再从“Launchpad/开始菜单”冷启，就不会回退。</p><p>若想永远根治，把 VS Code 的启动器换成上面这种“shell 代理启动”即可。</p><hr><ol start="3"><li>在 <code>settings.json</code> 里强制给集成终端重新初始化 shell（最稳）</li></ol><p>把下面两行写进<strong>工作区</strong>或<strong>用户</strong> <code>settings.json</code>：</p><div class="language-jsonc line-numbers-mode" data-ext="jsonc"><pre class="language-jsonc"><code>
{

// 每次新建终端都先执行一次登录 shell，保证 fnm env 被重新注入

&quot;terminal.integrated.profiles.osx&quot;: {

&quot;zsh with fnm&quot;: {

&quot;path&quot;: &quot;zsh&quot;,

&quot;args&quot;: [&quot;-l&quot;] // -l = login shell，会跑 ~/.zshrc

}

},

&quot;terminal.integrated.defaultProfile.osx&quot;: &quot;zsh with fnm&quot;

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Windows 把 <code>osx</code> 换成 <code>windows</code>，<code>path</code> 用 <code>powershell</code> 或 <code>bash</code> 即可。</p><p>保存后 <strong>Kill All Terminal</strong> → 新建，再 <code>node -v</code> 就与 fnm 保持一致了。</p><hr><p>快速自检清单</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">which</span> <span class="token function">node</span> <span class="token comment"># 应该指向 fnm 目录</span>

<span class="token builtin class-name">echo</span> <span class="token environment constant">$PATH</span> <span class="token comment"># 包含 ~/.fnm/node-versions/.../bin</span>

fnm current <span class="token comment"># 与 node -v 一致</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>三项都通过即表示缓存问题已解决。祝你开发愉快！</p>`,102),d=[l];function c(o,t){return s(),e("div",null,d)}const v=n(i,[["render",c],["__file","NODE 版本管理.html.vue"]]);export{v as default};
