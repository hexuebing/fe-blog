import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-cHUT35sX.js";const i={},l=e(`<h1 id="brew安装nginx" tabindex="-1"><a class="header-anchor" href="#brew安装nginx" aria-hidden="true">#</a> brew安装nginx</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">==</span><span class="token operator">&gt;</span> Summary
🍺  /usr/local/Cellar/nginx/1.25.5: <span class="token number">27</span> files, <span class="token number">2</span>.5MB
<span class="token operator">==</span><span class="token operator">&gt;</span> Running <span class="token variable"><span class="token variable">\`</span>brew cleanup nginx<span class="token variable">\`</span></span><span class="token punctuation">..</span>.
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS <span class="token punctuation">(</span>see <span class="token variable"><span class="token variable">\`</span><span class="token function">man</span> brew<span class="token variable">\`</span></span><span class="token punctuation">)</span>.
<span class="token operator">==</span><span class="token operator">&gt;</span> Caveats
<span class="token operator">==</span><span class="token operator">&gt;</span> nginx
Docroot is: /usr/local/var/www

The default port has been <span class="token builtin class-name">set</span> <span class="token keyword">in</span> /usr/local/etc/nginx/nginx.conf to <span class="token number">8080</span> so that
nginx can run without sudo.

nginx will load all files <span class="token keyword">in</span> /usr/local/etc/nginx/servers/.

To start nginx now and restart at login:
  brew services start nginx
Or, <span class="token keyword">if</span> you don&#39;t want/need a background <span class="token function">service</span> you can just run:
  /usr/local/opt/nginx/bin/nginx <span class="token parameter variable">-g</span> daemon<span class="token punctuation">\\</span> off<span class="token punctuation">\\</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常用的brew 命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew services list 获取services列表
brew services start/stop/restart serverName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其他常用nginx命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew config 查看brew配置
brew info <span class="token function">node</span> 查看node安装信息
brew list 查看已安装软件
brew list <span class="token parameter variable">--versions</span> 查看已安装软件版本号
brew search <span class="token function">node</span> 搜索可用node相关软件
brew update brew自身更新
brew cleanup 清除下载的缓存
brew doctor 诊断brew，并给出修复命令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),r=[l];function t(c,o){return s(),a("div",null,r)}const u=n(i,[["render",t],["__file","brew安装nginx.html.vue"]]);export{u as default};
