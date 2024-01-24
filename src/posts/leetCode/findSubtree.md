---
icon: tree
date: 2022-01-21
category:
  - 算法
tag:
  - 二叉树
star: true
sticky: true
---

# 寻找重复子树

给定一棵二叉树，返回所有重复的子树。对于同一类的重复子树，你只需要返回其中任意**一棵**的根结点即可。

两棵树重复是指它们具有相同的结构以及相同的结点值。

```
        1
       / \
      2   3
     /   / \
    4   2   4
       /
      4
```

存在两个重复的子树  [[2, 4], [4]]

```jsx
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    const res = new Map()
    const cache = []
    function travel(root){
        if(root === null) return '#';
        const left = travel(root.left)
        const right = travel(root.right)

        // $  $ 为了处理特别的 11# 和 1 1#这样的相似问题
        const str = `$${left}${root.val}${right}$`
        console.log(str)
        
        if(cache.includes(str)){
            res.set(str, root)
        }else{
            cache.push(str)
        }
        return str
    }

    travel(root)
    return [...res.values()]
};
```