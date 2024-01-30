---
icon: state
---

# 合并N个升序链表

给你一个链表数组，每个链表都已经按升序排列。

请你将所有链表合并到一个升序链表中，返回合并后的链表。

```
输入：lists = [[1,4,5],[1,3,4],[2,6]]
输出：[1,1,2,3,4,4,5,6]
解释：链表数组如下：
[
  1->4->5,
  1->3->4,
  2->6
]
将它们合并到一个有序链表中得到。
1->1->2->3->4->4->5->6
```

链表节点：
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
```
## 思路分析

- 虚拟一个头节点，到时候返回next
- 用一个数组将所有的链表的头都放入，并根据val来排序
- 不断的将数组中的第一个shift出来并连到虚拟头上面，如果这个值next有值则继续push到数组中，重新排序。直到数组为空

## 代码实现
```jsx
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const head = new ListNode()
    let p = head
    let arr = []
		// 将所有链表的头放入数组中
    for(let node of lists.values()){
				// 如果是空链表不放入
        if(node !== null) arr.push(node)
    }
    if(arr.length === 0) return null
    const sort = (node1, node2) => node1.val - node2.val
    arr.sort(sort) // 排序

    while(arr.length > 0){
        const minNode = arr.shift()
        p.next = minNode
        if(minNode.next !== null){
            arr.push(minNode.next)
            arr.sort(sort) // 排序
        }
        p = p.next // 指针向后移动
    }
    return head.next
};
```