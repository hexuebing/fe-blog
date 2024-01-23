---
icon: pen-to-square
date: 2022-01-21
category:
  - 算法
tag:
  - 基础排序
  - 快速排序
star: true
sticky: true
---

# 快速排序

## 实现思路

- 基线条件——为空或只包含一个元素，就不需要排序
- 使用分治让其满足基线条件，取一个基准值将数组分为三部分，对两边数组继续治理

## 代码实现

```javascript
function quickSort(arr){
    if(arr.length < 2){
        return arr
    }else{
        const pivot = arr[0]
        const prv = [];
        const next = [];
        for(let i = 1; i < arr.length; i++){
            if(arr[i] < pivot){
                prv.push(arr[i])
            }else{
                next.push(arr[i])
            }
        }
        return quickSort(prv).concat(pivot, quickSort(next))
    }
}
```
