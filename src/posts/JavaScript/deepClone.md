---
icon: javascript
date: 2022-01-17
category:
  - JavaScript
tag:
  - new
star: true
sticky: true
---

# 深拷贝

1. 判断传入值是否为对象
2. 创造一个新对象，迭代传入对象进行赋值
3. 对象的value为对象的话，递归调用函数
4. 迭代完毕返回这个对象
5. 传入非对象直接返回这个值

# 基础版本

```jsx
function clone(target){
	if(typeof target === 'object'){
		const cloneTarget = {}
		for(let key in target){
			cloneTarget[key] = clone(target[key])
		}
		return cloneTarget
	}else{
		return target
	}
}
```

# 兼容数组

```jsx
function clone(target){
	if(typeof target === 'object'){
		// 这里判断是否为数组
		const cloneTarget = Array.isArray(target) ? [] : {}
		for(let key in target){
			cloneTarget[key] = clone(target[key])
		}
		return cloneTarget
	}else{
		return target
	}
}
```

# 循环引用

```jsx
const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};
target.target = target;
```

```jsx
function clone(target, map = new Map()){
	if(typeof target === 'object'){
		// 这里判断是否为数组
		const cloneTarget = Array.isArray(target) ? [] : {}
		// 判断是否增加了
		if(map.get(target)){
			return map.get(target)
		}
		map.set(target, cloneTarget)
		for(let key in target){
			// 每次将map传入
			cloneTarget[key] = clone(target[key], map)
		}
		return cloneTarget
	}else{
		return target
	}
}
```