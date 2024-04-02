# useDeferredValue延迟更新部分UI

## 使用useDeferredValue优化
```jsx
import { useState, useDeferredValue } from 'react';
import SlowList from './SlowList.js';

export default function App() {
  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text);
  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <SlowList text={deferredText} />
    </>
  );
}
```
发现输入很灵敏，而列表的更新会稍有延迟

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

## 未使用优化

输入框的输入感觉非常卡顿。这是因为没有使用 `useDeferredValue`，每次按键都会`立即强制整个列表`以**不可中断的方式**进行重新渲染。
```jsx
import { useState } from 'react';
import SlowList from './SlowList.js';

export default function App() {
  const [text, setText] = useState('');
  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <SlowList text={text} />
    </>
  );
}
```

## 延迟一个值与防抖和节流之间有什么不同？

- `useDeferredValue` 更适合优化渲染，因为它与 `React` 自身深度集成，并且能够适应用户的设备,如果用户的设备很快（比如性能强劲的笔记本电脑），延迟的重渲染几乎会立即发生并且不会被察觉

- `useDeferredValue` 执行的延迟重新渲染默认是**可中断的**。这意味着，如果 React 正在重新渲染一个大型列表，但用户进行了另一次键盘输入，React 会放弃该重新渲染，先处理键盘输入，然后再次开始在后台渲染。

如果你要优化的工作不是在渲染期间发生的，那么防抖和节流仍然非常有用。