# 最大连续1的个数III之反转K个0

给定一个二进制数组 nums 和一个整数 k，如果可以翻转最多 k 个 0 ，则返回 数组中连续 1 的最大个数 。

```
输入：nums = [1,1,1,0,0,0,1,1,1,1,0], K = 2
输出：6
解释：[1,1,1,0,0,1,1,1,1,1,1]
粗体数字从 0 翻转到 1，最长的子数组长度为 6。
```

## 代码实现

```js
var longestOnes = function(nums, k) {
    let left = 0, right = 0;
    let res = 0;
    let count = 0; // 用来统计0的个数
    while(right < nums.length){
        const rightCode = nums[right]
        if(rightCode === 0) count++

        while(count > k){
            left++
            const leftCode = nums[left]
            if(leftCode === 0) count--
        }
        res = Math.max(res, right - left + 1)
        right++
    }
    return res
};
```