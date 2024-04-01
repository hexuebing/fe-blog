# 使用ref

## ref 引用值 
与 state 一样，ref 在重新渲染之间由 React 保留。但是，设置 state 会重新渲染组件，而更改 ref 不会！
```jsx
import { useRef } from 'react';

export default function Counter() {
  let ref = useRef(0);

  function handleClick() {
    // 使用ref.current访问
    ref.current = ref.current + 1;
    alert('你点击了 ' + ref.current + ' 次!');
  }

  return (
    <button onClick={handleClick}>
      点我！
    </button>
  );
}
```

## ref 操作 DOM

```jsx
import { useRef } from 'react';

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        聚焦输入框
      </button>
    </>
  );
}
```