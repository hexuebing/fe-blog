---
icon: javascript
date: 2022-08-17
category:
  - JavaScript
tag:
  - 柯里化 
---

# 柯里化

1. 定义一个闭包变量，用来存储每次调用的参数
2. 包裹目标函数之后返回一个新函数
3. 调用新函数，每次传入的参数收集到闭包变量
4. 如果闭包变量的长度到达指定长度，则调用目标函数并传入收集的参数，否则返回这个新函数

```jsx
function currying(fn) {
	let args = []
	return function f(){
		args.push(...arguments)
		if(args.length >= 3){
			// deepcopy args
			const params = JSON.parse(JSON.stringify(args))
			args = []
			return fn.apply(null, params)
		}else{
			return f
		}
	}
}
```

### 另外一种写法

不定义一个特定收集参数的变量，通过每次调用时候的传参进行收集

```jsx
function curry(func) {
    return function curried(...args){
        if(args.length >= func.length){
            return func.apply(this, args)
        } else {
            return function (...args2){
                return curried.apply(this, args.concat(args2))
            }
        }
    }
}
```

```jsx
function cube(l, w, h){
	return l * w * h
}
let func = currying(cube)
func(1,2)(3)
```

# 另类柯里化扩展

**柯里化** 允许我们把函数与传递给它的参数结合，产生出一个新函数

```jsx
Function.prototype.curry = function () {
    let slice = Array.prototype.slice
    let args = Array.from(arguments)
    let that = this
    return function (){
        return that.apply(null, args.concat(Array.from(arguments)))
    }
}
```

```jsx
let add = function(){console.log(arguments)}

let add1 = add.curry(1,2,3)
add1(6)
```