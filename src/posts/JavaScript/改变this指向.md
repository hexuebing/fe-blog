---
icon: javascript
date: 2022-01-17
category:
  - JavaScript
star: true
sticky: true
---
# call、apply、bind

1. 为context对象定义属性 **fn** ，并赋值this
2. 此时的this指向myCall的调用者
3. 判断是否有别的参数，决定context.fn时是否传参

# 自定义Call

```jsx
Function.prototype.myCall = function(context = window, ...args){
	context.fn = this
	let result
	if(args.length){
		result = context.fn(...args)
	}else{
		result = context.fn()
	}
	delete context.fn
	return result
}
```

```jsx
Function.prototype.myApply = function(context = window, ...args){
	context.fn = this

	let result
	if(args){
		result = context.fn(...args)
	}else{
		result = context.fn()
	}
	delete context.fn
	return result
}
```

## 测试一下

```jsx
let obj = {name: 'hxb'}
function sayName(){
	console.log(this.name)
}

sayName.myApply(obj)
```

# 自定义bind

```jsx
Function.prototype.myBind = function(context){
	return (args) => {
		// 箭头函数没有自己的 this 和 arguments
		return this.apply(context, args)
	}
}
```

## 测试一下

```jsx
let obj = {name: 'hxb'}
function sayName(){
	console.log(this.name)
}

let fn = sayName.myBind(obj)
fn()
```

<aside>
💡 将自定义的myBind修改为普通函数

</aside>