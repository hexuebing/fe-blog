---
icon: structure
cover: /assets/images/fib2.png
date: 2022-01-01
category:
  - 算法
tag:
  - 菲波那锲数
  - 动态规划
star: true
sticky: true
---
# 斐波那契数

**斐波那契数**，通常用 `F(n)` 表示，形成的序列称为 **斐波那契数列** 。该数列由 `0` 和 `1` 开始，后面的每一项数字都是前面两项数字的和。也就是：

```
F(0) = 0，F(1) = 1
F(n) = F(n - 1) + F(n - 2)，其中 n > 1
```

给你 `n` ，请计算 `F(n)` 。

首先画出递归树

![Untitled](/assets/images/fib1.png)

## 自顶向下

```jsx
/**
 * @param {number} n
 * @return {number}
 */

let memo = new Map()
var fib = function(n) {
    if(n === 0) return 0
    if(n === 1) return 1
    if(memo.has(n)){
        return memo.get(n)
    }
    const result = fib(n - 1) + fib(n -2)
    memo.set(n, result)
    return result
};
```

## 自底向上

![Untitled](/assets/images/fib2.png)

```jsx
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const dp = [0, 1]
    for(let i = 2; i <= n; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
};
```

![Untitled](/assets/images/fib3.png)

可以考虑状态压缩，只存两个数据