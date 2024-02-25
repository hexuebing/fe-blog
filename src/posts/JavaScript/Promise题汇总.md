# Promise题汇总

## 遇到resolve会直接变更状态

```js
const promise1 = new Promise((resolve, reject) => {
  console.log('promise1')
  resolve('resolve1')
})
const promise2 = promise1.then(res => {
  console.log(res)
})
console.log('1', promise1);
console.log('2', promise2);
```
输出

```shell
promise1
1 Promise {<fulfilled>: 'resolve1'}
2 Promise {<pending>}
resolve1
```

## resolve后面的代码也会直接同步执行

```js
const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("timerStart");
    resolve("success");
    console.log("timerEnd");
  }, 0);
  console.log(2);
});
promise.then((res) => {
  console.log(res);
});
console.log(4);
```
输出

```js
1
2
4
timerStart
timerEnd
success
```

## 先微任务与后宏任务

```js
Promise.resolve().then(() => {
  console.log('promise1');
  const timer2 = setTimeout(() => {
    console.log('timer2')
  }, 0)
});
const timer1 = setTimeout(() => {
  console.log('timer1')
  Promise.resolve().then(() => {
    console.log('promise2')
  })
}, 0)
console.log('start');
```
输出
```js
start
promise1
timer1
promise2
timer2
```

## 状态改变之后不会再变

```js
const promise = new Promise((resolve, reject) => {
    resolve('success1');
    reject('error');
    resolve('success2');
});
promise.then((res) => {
    console.log('then:', res);
}).catch((err) => {
    console.log('catch:', err);
})
```
输出
```shell
then: success1
```

## .then方法传入非函数解释为then(null)
`Promise.resolve`方法返回一个新的`Promise对象`，状态为`resolved`，`Promise.resolve`方法的**参数**，会同时传给回调函数。
```js
Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .then(console.log)
```
输出
```shell
1
Promise {<fulfilled>: undefined}
```

## 无错误.catch，与有.catch得到的promise是不同的状态

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 1000)
})
const promise2 = promise1.then(() => {
  throw new Error('error!!!')
})
console.log('promise1', promise1)
console.log('promise2', promise2)
setTimeout(() => {
  console.log('promise1', promise1)
  console.log('promise2', promise2)
}, 2000)
```
输出：
```js
promise1 Promise {<pending>}
promise2 Promise {<pending>}

Uncaught (in promise) Error: error!!!
promise1 Promise {<fulfilled>: "success"}
promise2 Promise {<rejected>: Error: error!!}
```
为第二个promise增加catch
```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 1000)
})
const promise2 = promise1.then(() => {
  throw new Error('error!!!')
}).catch(() => console.log())
console.log('promise1', promise1)
console.log('promise2', promise2)
setTimeout(() => {
  console.log('promise1', promise1)
  console.log('promise2', promise2)
}, 2000)
```
输出
```js
promise1 Promise {<pending>}
promise2 Promise {<pending>}

promise1 Promise {<fulfilled>: "success"}
promise2 Promise {<fulfilled>: undefined}
```
可以看到如果promise2有catch最后还是得到fulfilled状态

## return错误会被包裹成return Promise.resolve(new Error())

```js
Promise.resolve().then(() => {
  return new Error('error!!!')
}).then(res => {
  console.log("then: ", res)
}).catch(err => {
  console.log("catch: ", err)
})
```
输出：
```js
then: Error: error!!!
```

## .reject()的值直接进入失败的函数

```js
Promise.reject('err!!!')
  .then((res) => {
    console.log('success', res)
  }, (err) => {
    console.log('error', err)
  }).catch(err => {
    console.log('catch', err)
  })
```
输出：

```js
error err!!!
```

## finally()默认返回上一个Promise对象值，是then方法的特例

```js
Promise.resolve('1')
  .then(res => {
    console.log(res)
  })
  .finally(() => {
    console.log('finally')
  })
Promise.resolve('2')
  .finally(() => {
    console.log('finally2')
  	return '我是finally2返回的值' // 这里会将上一个promise的2返回，除非抛出的是异常才能返回异常的Promise对象
  })
  .then(res => {
    console.log('finally2后面的then函数', res)
  })
```
输出：

```js
1
finally2
finally
finally2后面的then函数 2
```

## all的中有reject的会直接进入.catch，但是后续resolve自己的还是会跑完

```js
function runAsync (x) {
  const p = new Promise(r => setTimeout(() => r(x, console.log(x)), 1000))
  return p
}
function runReject (x) {
  const p = new Promise((res, rej) => setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x))
  return p
}
Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
       .then(res => console.log(res))
       .catch(err => console.log('Err:', err))
```
输出：
```js
// 1s后输出
1
3
// 2s后输出
2
Err: Error: 2
// 4s后输出
4
```

## async里面的代码是同步代码

```js
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}
async1();
console.log('start')
```
输出：
```js
async1 start
async2
start
async1 end
```

## 先处理微任务后处理宏任务

```js
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
  setTimeout(() => {
    console.log('timer1')
  }, 0)
}
async function async2() {
  setTimeout(() => {
    console.log('timer2')
  }, 0)
  console.log("async2");
}
async1();
setTimeout(() => {
  console.log('timer3')
}, 0)
console.log("start")
```

输出：
```js
async1 start
async2
start
async1 end
timer2
timer3
timer1
```

## async函数中的await后面的Promise没有返回值的，将一直是pending状态

```js
async function async1 () {
  console.log('async1 start');
  await new Promise(resolve => {
    console.log('promise1')
  })
  console.log('async1 success'); // 上面一直pending，从这里就不执行了
  return 'async1 end'
}
console.log('script start')
async1().then(res => console.log(res))
console.log('script end')
```
输出
```js
script start
async1 start
promise1
script end
```
加上resolve之后

```js
async function async1 () {
  console.log('async1 start');
  await new Promise(resolve => {
    console.log('promise1')
    resolve('promise1 resolve')
  }).then(res => console.log(res))
  console.log('async1 success');
  return 'async1 end'
}
console.log('script start')
async1().then(res => console.log(res))
console.log('script end')
```
输出：
```js
script start
async1 start
promise1
script end
promise1 resolve
async1 success
async1 end
```

## await如果得到的是reject，不捕获将阻止后续代码

```js
async function async1 () {
  await async2();
  console.log('async1');
  return 'async1 success'
}
async function async2 () {
  return new Promise((resolve, reject) => {
    console.log('async2')
    reject('error')
  })
}
async1().then(res => console.log(res))
```
输出：
```js
async2
Uncaught (in promise) error
```