---
icon: array
date: 2022-01-21
category:
  - 算法
tag:
  - 排列组合
  - 回溯
star: true
sticky: true
---
# 无重复字符串的排列组合

编写一种方法，计算某字符串的所有排列组合，字符串每个字符均不相同。

示例

```
 输入：S = "qwe"
 输出：["qwe", "qew", "wqe", "weq", "ewq", "eqw"]
```

```jsx
/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function(S) {
    const arr = [...S]
    const length = arr.length
    const result = []
    function travel(str, strArr = arr, deep = 0){
        if(deep === length){
            result.push(str)
            return
        }
        strArr.forEach((item, index, array) => {
            travel(str + item, array.filter((a) => a !== item), deep+1)
        })
    }
    travel('')
    return result
};
```