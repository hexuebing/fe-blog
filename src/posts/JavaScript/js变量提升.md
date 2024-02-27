# 函数变量提升

```js
function Foo() {
  getName = function(){ console.log(1); };
  return this;
}

Foo.getName = function() { console.log(2); };

Foo.prototype.getName = function(){ console.log(3); };

var getName = function() { console.log(4); };

function getName(){ console.log(5); }

Foo.getName();             // 2   调用了Foo的方法

getName();                    // 4    变量提升，函数的提升更加优先，所以会被变量覆盖

Foo().getName();          //  1    Foo()执行，覆盖了getName方法

getName();                    // 1      上一步对全局getName进行了覆盖

new Foo.getName();      //2      调用了Foo.getName创建了它的实例

new Foo().getName();   // 3      创建了Foo的实例，优先访问到原型链上的方法
```