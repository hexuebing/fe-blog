---
icon: javascript
date: 2022-01-16
category:
  - JavaScript
tag:
  - Promise
star: true
sticky: true
---
# Promise简单实现

调用方式

```jsx
const p = new MyPromise((resolve, reject) => {
	setTimeout(() => resolve('foo'), 500)
})

p.then((res) => { console.log(res) }, (err) => {})
```

思路：

1. 定义一个构造函数接收一个函数，这函数包含两个参数分别是resolve, reject
2. then 原型方法上面传入处理函数

## 🙅‍♂️ 不对的写法

```jsx
function MyPromise(fn) {
	this.resolve = null
	this.reject = null
	fn(this.resolve, this.reject) // 这里涉及到函数作为参数传递，虽然后期修改了指向但是内部使用的是null
}
MyPromise.prototype.then = function(resolveHandler, rejectHandler){
	this.resolve = resolveHandler
	this.reject = rejectHandler
}
```

## 🙆‍♂️ 正确的写法

```jsx
class MyPromise {
	constructor(fn){
		this.resolveHandler = null
		this.rejectHandler = null
		const resolve = (data) => {
			this.resolveHandler(data) //调用时，已经指向then调用赋值的函数
		}
		const reject = (err) => {
			this.rejectHander(err)
		}
		fn(resolve, reject)
	}
	then(resovleHandler, rejectHandler){
		this.resolveHandler = resolveHandler
		this.rejectHandler = rejectHandler
	}
}
```