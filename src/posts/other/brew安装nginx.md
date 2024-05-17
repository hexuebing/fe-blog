# brew安装nginx

```shell
brew install nginx
```

```shell
==> Summary
🍺  /usr/local/Cellar/nginx/1.25.5: 27 files, 2.5MB
==> Running `brew cleanup nginx`...
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
==> Caveats
==> nginx
Docroot is: /usr/local/var/www

The default port has been set in /usr/local/etc/nginx/nginx.conf to 8080 so that
nginx can run without sudo.

nginx will load all files in /usr/local/etc/nginx/servers/.

To start nginx now and restart at login:
  brew services start nginx
Or, if you don't want/need a background service you can just run:
  /usr/local/opt/nginx/bin/nginx -g daemon\ off\;
```

常用的brew 命令：


```shell
brew services list 获取services列表
brew services start/stop/restart serverName
```

其他常用nginx命令：

```shell
brew config 查看brew配置
brew info node 查看node安装信息
brew list 查看已安装软件
brew list --versions 查看已安装软件版本号
brew search node 搜索可用node相关软件
brew update brew自身更新
brew cleanup 清除下载的缓存
brew doctor 诊断brew，并给出修复命令
```