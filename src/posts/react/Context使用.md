# Context使用

## 创建Context

```js
import { createContext } from 'react';

export const LevelContext = createContext(1);
```

## 使用Context

```jsx
import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';

export default function Section({ children }) {
  // 获取context的值
  const level = useContext(LevelContext);
  return (
    <section className="section">
      {/** 通过Provider来传入 */}
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
```

## 总结

1. 通过 `export const MyContext = createContext(defaultValue)` 创建并导出 `context`。
2. 在无论层级多深的任何子组件中，把 `context` 传递给 `useContext(MyContext) Hook` 来读取它。
3. 在父组件中把 `children` 包在 `<MyContext.Provider value={...}>` 中来提供 `context`。