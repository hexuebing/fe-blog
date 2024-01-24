---
icon: array
date: 2022-11-03
category:
  - 算法
tag:
  - 数组去重
star: true
sticky: true
---

# 数组去重

## 数组中包含数组

输入：`[1, 2, 3, 1, '1', [1, 2, 1]]`

输出： `[1,2,3, '1', [1, 2]]`

### 错误版

```jsx
function unique(nums){
    let res = []
    for(let num of nums){
        if(Array.isArray(num)){
            res.push(unique(num))
        }else{
            if(!res.includes(num)){
                res.push(num)
            }
        }
    }
		// 这里缺少了返回
}
```

### 修正版本

```jsx
function unique(nums){
    let res = []
    for(let num of nums){
        if(Array.isArray(num)){
            res.push(unique(num))
        }else{
            if(!res.includes(num)){
                res.push(num)
            }
        }
    }
    return res // 好像忘记写这里的返回了
}
```

```jsx
function unique(nums){
	let result = []
	nums.forEach((item) => {
		if(Array.isArray(item)) {
			result.push([...new Set(item)])
		}else{
			if(!result.includes(item)) result.push(item)
		}
	})
	return result
}
```
# 基础数组去重

## 最简单

```jsx
[1,2,3,2].filter((item, index, arr) => arr.indexOf(item) === index)
```

## 新数组

```jsx
const uniqueArr = [] // 新数组
arr.forEach(item => {
		//新数组中没有的都放入
    if(uniqueArr.indexOf(item) === -1) uniqueArr.push(item)
})
```

## 排序相邻

```jsx
const sortArr = arr.sort((value1, value2) => value1-value2)
const uniqueArr = []
for(let i = 1; i <= sortArr.length; i++){
	if(sortArr[i] !== sortArr[i-1]) uniqueArr.push(sortArr[i-1])
}
```

https://juejin.cn/post/6844903602197102605