---
icon: tree
date: 2022-01-21
category:
  - 算法
tag:
  - 动态规划
star: true
sticky: true
---

# 打家劫舍

你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

```jsx
输入：[1,2,3,1]
输出：4
解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。
```

## 解答：

自顶向下

```jsx
var rob = function(nums) {
    let memo = {}
    function dp(nums, i){
        if(memo[i] !== undefined) return memo[i]
        if(i < 0) return 0
        const result = Math.max(dp(nums, i-1), nums[i] + dp(nums, i-2))
        memo[i] = result
        return result
    }
    return dp(nums, nums.length-1)
};
```

自底向上

```jsx
var rob = function(nums) {
    let dp = [nums[0], Math.max(nums[0], nums[1])]
    for(let i = 2; i < nums.length; i++){
        dp[i] = Math.max(dp[i-1], dp[i-2]+nums[i])
    }
    return dp[nums.length-1]
}
```