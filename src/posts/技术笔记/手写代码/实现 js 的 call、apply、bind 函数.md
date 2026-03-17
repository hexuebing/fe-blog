我来帮你实现 JavaScript 的 `call`、`apply` 和 `bind` 函数。这些是函数原型上的重要方法，理解它们的实现有助于深入理解 JavaScript 的 this 绑定机制。

## 1. 实现 call 方法

```javascript
Function.prototype.myCall = function(context, ...args) {
    // 如果 context 是 null 或 undefined，则指向全局对象
    context = context || globalThis;
    
    // 确保 context 是对象类型
    if (typeof context !== 'object') {
        context = Object(context);
    }
    
    // 创建唯一的 key，避免属性冲突
    const fn = Symbol('fn');
    
    // 将函数作为 context 的属性
    context[fn] = this;
    
    // 调用函数并获取结果
    const result = context[fn](...args);
    
    // 删除临时属性
    delete context[fn];
    
    return result;
};
```

## 2. 实现 apply 方法

```javascript
Function.prototype.myApply = function(context, argsArray) {
    // 如果 context 是 null 或 undefined，则指向全局对象
    context = context || globalThis;
    
    // 确保 context 是对象类型
    if (typeof context !== 'object') {
        context = Object(context);
    }
    
    // 创建唯一的 key，避免属性冲突
    const fn = Symbol('fn');
    
    // 将函数作为 context 的属性
    context[fn] = this;
    
    let result;
    
    // 处理参数数组
    if (argsArray == null) {
        result = context[fn]();
    } else if (!Array.isArray(argsArray)) {
        throw new TypeError('CreateListFromArrayLike called on non-object');
    } else {
        result = context[fn](...argsArray);
    }
    
    // 删除临时属性
    delete context[fn];
    
    return result;
};
```

## 3. 实现 bind 方法

```javascript
Function.prototype.myBind = function(context, ...presetArgs) {
    const originalFn = this;
    
    // 确保调用的是函数
    if (typeof originalFn !== 'function') {
        throw new TypeError('Function.prototype.bind called on non-function');
    }
    
    // 返回一个新的函数
    function boundFn(...args) {
        // 如果作为构造函数调用，this 指向新创建的对象
        const isConstructor = this instanceof boundFn;
        
        // 确定 this 指向
        const thisArg = isConstructor ? this : context;
        
        // 合并预设参数和新参数
        const allArgs = [...presetArgs, ...args];
        
        // 调用原函数
        const result = originalFn.apply(thisArg, allArgs);
        
        // 如果原函数返回的是对象，则返回该对象；否则返回 this
        return (result !== null && (typeof result === 'object' || typeof result === 'function')) 
            ? result 
            : this;
    }
    
    // 维护原型链
    if (originalFn.prototype) {
        boundFn.prototype = Object.create(originalFn.prototype);
        boundFn.prototype.constructor = boundFn;
    }
    
    // 设置 length 属性
    Object.defineProperty(boundFn, 'length', {
        value: Math.max(0, originalFn.length - presetArgs.length),
        writable: false,
        enumerable: false,
        configurable: true
    });
    
    return boundFn;
};
```

## 4. 测试代码

```javascript
// 测试 call
function greet(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
}

const person = { name: 'Alice' };
console.log(greet.myCall(person, 'Hello', '!')); // "Hello, Alice!"

// 测试 apply
const numbers = [5, 6, 2, 3, 7];
const max = Math.max.myApply(null, numbers);
console.log(max); // 7

// 测试 bind
const module = {
    x: 42,
    getX: function() {
        return this.x;
    }
};

const unboundGetX = module.getX;
const boundGetX = unboundGetX.myBind(module);
console.log(boundGetX()); // 42

// 测试 bind 作为构造函数
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const BoundPerson = Person.myBind(null, '预设名字');
const person2 = new BoundPerson(25);
console.log(person2.name); // "预设名字"
console.log(person2.age);  // 25
```

## 5. 核心要点说明

1. **this 绑定原理**：通过将函数作为对象的临时属性来调用，实现 this 的显式绑定
2. **参数处理**：call 使用展开运算符，apply 需要处理数组参数
3. **bind 的特殊性**：需要考虑构造函数调用的情况，并维护原型链
4. **边界情况**：处理 null/undefined 上下文、非对象上下文等

这些实现基本覆盖了原生方法的核心功能，但在性能优化和边界情况处理上可能与原生实现有所差异。