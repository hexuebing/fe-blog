# async/await错误捕获

[原文链接](https://zhuanlan.zhihu.com/p/79118227)

## 一般情况

```js
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('fetch data is me')
        }, 1000)
    })
}

(async () => {
    try {
        const data = await fetchData()
        console.log('data is ->', data)
    } catch(err) {
        console.log('err is ->', err)
    }
})()
```

问题在于如果是多个，则会出现大量的`try/catch`。

## 使用then函数

async/await 本质就是 promise 的语法糖，既然是 promise 那么就可以使用 then 函数了

```js
(async () => {
    const fetchData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('fetch data is me')
            }, 1000)
        })
    }

    const data = await fetchData().then(data => data ).catch(err => err)
    console.log(data)
})()
```

如果是 reject 了，发生错误了，那么 data 是错误结果

## 完善上面的实现

```js
(async () => {
    const fetchData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('fetch data is me')
            }, 1000)
        })
    }

    const [err, data] = await fetchData().then(data => [null, data] ).catch(err => [err, null])
    console.log('err', err)
    console.log('data', data)
    // err null
    // data fetch data is me
})()
```

对这里的实现进行封装

```js
(async () => {
    const fetchData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('fetch data is me')
            }, 1000)
        })
    }

    // 抽离成公共方法
    const awaitWrap = (promise) => {
        return promise
            .then(data => [null, data])
            .catch(err => [err, null])
    }

    const [err, data] = await awaitWrap(fetchData())
    console.log('err', err)
    console.log('data', data)
    // err null
    // data fetch data is me
})()
```