# useTransition在不阻塞 UI 下更新状态

在组件的顶层调用 `useTransition` 以将状态更新标记为**非阻塞的 transition**

## 使用范例

useTransition 返回一个由两个元素组成的数组：
1. `isPending`，告诉你是否存在待处理的 transition。
2. `startTransition` 函数，你可以使用此方法将状态更新标记为 transition。

```jsx
function TabContainer() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('about');

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
  }
  // ……
}
```

```jsx
import { memo } from 'react';

const SlowList = memo(function SlowList({ text }) {
  // 仅打印一次。实际的减速是在 SlowItem 组件内部。
  console.log('[ARTIFICIALLY SLOW] Rendering 250 <SlowItem />');

  let items = [];
  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem key={i} text={text} />);
  }
  return (
    <ul className="items">
      {items}
    </ul>
  );
});

// 故意减缓了渲染速度, 模拟耗时渲染
function SlowItem({ text }) {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // 每个 item 暂停 1ms，模拟极其缓慢的代码
  }

  return (
    <li className="item">
      Text: {text}
    </li>
  )
}

export default SlowList;
```
