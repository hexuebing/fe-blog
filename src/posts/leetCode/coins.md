---
icon: free
date: 2022-01-01
category:
  - 算法
tag:
  - 零钱问题
  - 动态规划
star: true
sticky: true
---
# 零钱问题

给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

你可以认为每种硬币的数量是无限的。

```
输入：coins =[1, 2, 5], amount =11
输出：3
解释：11 = 5 + 5 + 1
```

## 暴力解决

```jsx
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    function dp(coins, amount){
        if(amount === 0) return 0
        if(amount < 0) return -1
        let result = Number.MAX_SAFE_INTEGER
        for(let coin of coins.values()){
            let subProblem = dp(coins, amount - coin)
            if(subProblem === -1) continue
            result = Math.min(result, subProblem + 1)
        }
        return result === Number.MAX_SAFE_INTEGER ? -1 : result
    }
    return dp(coins, amount)
};
```

## 增加备忘录
解决重复问题

![Untitled](./images/coins.png)

```jsx
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let m = {}
    function dp(coins, amount){
        if(amount === 0) return 0
        if(amount < 0) return -1
        if(m[amount] !== undefined) return m[amount]
        let result = Number.MAX_SAFE_INTEGER
        for(let coin of coins.values()){
            let subProblem = dp(coins, amount - coin)
            if(subProblem === -1) continue
            result = Math.min(result, subProblem + 1)
        }
        m[amount] = result === Number.MAX_SAFE_INTEGER ? -1 : result
        return m[amount]
    }
    return dp(coins, amount)
};
```