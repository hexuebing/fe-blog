---
icon: nodejs
date: 2022-06-17
category:
  - CLI
tag:
  - Node
  - NVM
star: true
sticky: true
---
# NVM管理Node版本

## 安装nvm

```jsx
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```

The script clones the nvm repository to `~/.nvm`, and attempts to add the source lines from the snippet below to the correct profile file (`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`). If you don’t see in our profile file you can add the following lines to end of the file as follows.

```jsx
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

## 查看nvm版本：

```jsx
nvm --version
```

## 安装特定node版本：

```jsx
nvm install 6.14.4 # or 10.10.0, 8.9.1, etc
```

## 查看已经安装的版本：

```jsx
nvm ls
```

## 切换版本：

```jsx
nvm use
```

## 切换默认版本：

```jsx
nvm alias default 16.14.2
```

NVM is a script that allows users to easily install, manage, and work with multiple Node.js versions. It clones the nvm repository to `~/.nvm` and adds source lines to the correct profile file. Users can check the version, install specific versions, view installed versions, switch versions, and set a default version.