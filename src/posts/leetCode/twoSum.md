---
icon: tree
date: 2022-01-21
category:
  - 算法
tag:
  - 求和
star: true
sticky: true
---
# 两数之和

## 双层循环

```tsx
function twoSum(nums, target){
	for(let i = 0; i < nums.length; i++){
		for(let j = i+1; j < nums.length; j++){
			if(nums[i]+nums[j] === target) return [i,j]
		}
	}
}
```

## 排序双指针移动

```tsx
function twoSum(nums, target){
	const newNums = [...nums].sort((val1, val2) => val1 - val2)
	let start = 0
	let end = nums.length - 1
	while(start < end){
		if(newNums[start] + newNums[end] > target) end--
		if(newNums[start] + newNums[end] < target) start++
		if(newNums[start] + newNums[end] === target) break
	}
	const res = []
	for(let i = 0; i < nums.length; i++){
		if(nums[i] === newNums[start] || nums[i] === newNums[end]) res.push(i)
	}
	return res
}
```

## hash表

```tsx
function twoSum(nums, target){
	const map = new Map()
	for(let i = 0; i < nums.length; i++){
		let complate = target - nums[i]
		if(map.has(complate)) return [map.get(complate), i]
		map.set(nums[i], i)
	}
}
```

另一种hash实现，这种是最常见的写法

```tsx
var twoSum = function(nums, target) {
    // 构造哈希表
    var map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }
    for (let j = 0; j < nums.length; j++) {
        let complement = target - nums[j];
        if (map.has(complement) && map.get(complement) !== j) {
            return [j, map.get(complement)];
        }
    }
};
```

## indexOf

```tsx
function twoSum(nums, target){
	let i = nums.length
	while(i < 1){
		const last = nums[i]
		if(nums.indexOf(target-last) > -1) return [nums.indexOf(target-last), i]
		i--
	}
}
```
