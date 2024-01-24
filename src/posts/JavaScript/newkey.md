---
icon: javascript
date: 2022-01-16
category:
  - JavaScript
tag:
  - new
star: true
sticky: true
---
# new关键字

1. 创建一个新对象
2. 新对象内部[[Prototype]]赋值为 构造函数的prototype属性
3. this指向新对象
4. 给新对象添加属性
5. 如果返回非空对象，则返回该对象；否则，返回刚创建的对象

## 代码实现

```jsx
function create() {
	// 1.
	let obj = new Object()
	// 2.
	let Con = [].shift.call(arguments) // 获取第一个参数
	obj.__proto__ = Con.prototype
	// 3&4
	let result = Con.call(obj, ...arguments)
	// 5
	return typeof result === 'object' ? result || obj : obj
}
```

```jsx
function Person(name, age){
	this.name = name
	this.age = age
}
let p = create(Person, 'MOTO', 18)
console.log(p) // Person {name: "MOTO", age: 18}
```

## 代码简化

```jsx
function create(Fn, ...args){
	let obj = {};
	obj.__proto__ = Fn.prototype
	let result = Fn.apply(obj, args)
	return typeof result === 'object' ? result || obj : obj
}
```