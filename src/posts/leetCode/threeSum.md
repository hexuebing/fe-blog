---
icon: array
date: 2022-01-21
category:
  - 算法
tag:
  - 求和
star: true
sticky: true
---

# 三数之和

给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

示例：

给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
[-1, 0, 1],
[-1, -1, 2]
]

```tsx
function threeSum(nums){
	const result = []
	const newNums = [...nums].sort((val1, val2) => val1 - val2)
	for(let i = 0; i < newNums.length && newNums[i] < 0; i++){
		let left = i
		let min = i + 1
		let right = newNums.length -1
		while(min < right){
			if(newNums[left] + newNums[min] + newNums[right] > 0) right--
			if(newNums[left] + newNums[min] + newNums[right] < 0) min++
			if(newNums[left] + newNums[min] + newNums[right] === 0) result.push([newNums[left], newNums[min], newNums[right]])
		}
	}
	return result
}
```

```jsx
const threeSum = function (nums) {
  const res = [];
  debugger;
  const newNums = nums.sort((val1, val2) => val1 - val2);
  for (let i = 0; i < newNums.length; i++) {
    const target = newNums[i];
    let start = i + 1; 
		let end = newNums.length - 1;
    while (start < end) {
      if (newNums[start] + newNums[end] < target) start++;
      if (newNums[start] + newNums[end] > target) end--;
      if (newNums[start] + newNums[end] === target) {
        res.push([target, newNums[start], newNums[end]]);
        if (newNums[start] === newNums[start + 1]) start++;
        start++;
        if (newNums[end] === newNums[end - 1]) end--;
        end--;
      }
    }
  }
  return res;
};
```