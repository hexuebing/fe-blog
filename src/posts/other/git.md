---
icon: git
date: 2022-01-21
category:
  - CLI
tag:
  - Git
star: true
sticky: true
---

# Git常用命令

## 创建本地分支

在本地创建分支dev并切换到该分支

```
git checkout -b dev(本地分支名称) origin/dev(远程分支名称)
```

## reset

将暂存区的commit释放

```
git reset commitHash
```

将暂存区的内容恢复到commitHash对应的位置

---

## 反悔merge

reset 到 merge 前的版本

```jsx
git reset --hard
```

## squash

<aside>
💡 merge的时候将commit信息合并为一条
</aside>

```
$ git merge --squash anotherbranch

$ git commit -m "message here"
```

## cherry-pick
<aside>
💡 特定提交应用于其他分支

</aside>

```
    a - b - c - d   Master
         \
           e - f - g Feature
```

现在将提交`f`应用到`master`分支

```bash
# 切换到 master 分支
$ git checkout master

# Cherry pick 操作
$ git cherry-pick f
```

之后代码库就变为了

```
    a - b - c - d - f   Master
         \
           e - f - g Feature
```

## 删除分支

### 本地分支：

merge了的分支

```
git branch -d branch_name
```

不管它有没有merge

```
git branch -D branch_name
```

### 远程分支:

```
git push --delete origin branch_name
// 或者
git push origin :branch_name
```

## Tag

本地创建tag

```
git tag v1.0.0
```

推送到远程

```
git push origin v1.0.0
```

## 暂存修改

```tsx
git stash

git stash pop
```

## 不跟踪

有时，我们可能希望在仓库中保留一个文件，但不再希望跟踪其更改。我们可以使用带有 `--skip-worktree`选项的 `git update-index`命令来实现这一点。

```tsx
git update-index --skip-worktree file1

git update-index --no-skip-worktree file1
```

使 Git 假装文件的版本是最新的，而是从索引版本中读取。

可以使用以下命令来让git不跟踪某个文件：

```
git update-index--assume-unchanged <file>
```

这个命令会将指定的文件标记为“假定未更改”，即使文件内容发生了变化，git也不会将其标记为已修改。这个命令只会影响本地仓库，不会影响远程仓库。

如果想要让git重新跟踪某个文件，可以使用以下命令：

```
git update-index --no-assume-unchanged <file>

```

这个命令会取消对指定文件的“假定未更改”标记，让git重新跟踪该文件。

