在这段代码里：

```javascript
function iterate(obj){
   var res=[];
   for(var key in obj){
        if(obj.hasOwnProperty(key))
           res.push(key+': '+obj[key]);
   }
   return res;
}
```

`for...in` 循环本身确实**只会遍历对象自身的可枚举属性**（不包括不可枚举属性），**不会遍历原型链上的属性** —— **这是很多人误解的地方**。

但这里的关键是：**`for...in` 会遍历原型链上** *可枚举* **的属性**。

### ✅ 举个例子你就明白了：

```javascript
function Person() {}
Person.prototype.sayHi = function () {};

const p = new Person();
p.name = 'Tom';

for (let key in p) {
  console.log(key); // 输出：name, sayHi
}
```

看到了吗？`sayHi` 是定义在原型链上的，但也被 `for...in` 遍历到了。

### ✅ 而加上 `hasOwnProperty` 后：

```javascript
for (let key in p) {
  if (p.hasOwnProperty(key)) {
    console.log(key); // 只输出：name
  }
}
```

### ✅ 总结：

- `for...in` **会**遍历原型链上可枚举的属性；
- `hasOwnProperty` 的作用是**过滤掉原型链上的属性**，只保留对象自身的；
- 所以**不使用 `hasOwnProperty` 结果不一样**，除非你确定原型链上没有可枚举属性。

---

### ✅ 补充建议（现代写法）：

如果你只想遍历对象自身的属性，可以用：

```javascript
Object.keys(obj).forEach(key => {
  console.log(key + ': ' + obj[key]);
});
```

这就不需要 `hasOwnProperty` 了，因为 `Object.keys` 只返回对象自身的可枚举属性。