# useCallback在多次渲染中缓存函数

## 跳过组件的重新渲染

**默认情况下，当一个组件重新渲染时， React 将递归渲染它的所有子组件**，因此每当因 theme 更改时而 `ProductPage` 组件重新渲染时，`ShippingForm` 组件也会重新渲染。

```jsx
import { useCallback } from 'react';

function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);

  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}
```

你可以将 ShippingForm 组件包裹在 `memo` 中。

如果 props 和上一次渲染时相同，那么 ShippingForm 组件将跳过重新渲染。
```js
import { memo } from 'react';

const ShippingForm = memo(function ShippingForm({ onSubmit }) {
  // ...
});
```

## 防止频繁触发 Effect

有时，你想要在 Effect 内部**调用函数**

```jsx
function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  function createOptions() {
    return {
      serverUrl: 'https://localhost:1234',
      roomId: roomId
    };
  }

  useEffect(() => {
    const options = createOptions();
    const connection = createConnection();
    connection.connect();
    // ...
  }, [createOptions]) //🔴 问题：这个依赖在每一次渲染中都会发生改变
}
```
**每一个响应值都必须声明为 Effect 的依赖。**但是如果将 `createOptions` 声明为依赖，它会导致 Effect 不断执行

### 解决办法：

在 Effect 中将要**调用的函数**包裹在 `useCallback` 中

```jsx
function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  const createOptions = useCallback(() => {
    return {
      serverUrl: 'https://localhost:1234',
      roomId: roomId
    };
  }, [roomId]); // ✅ 仅当 roomId 更改时更改

  useEffect(() => {
    const options = createOptions();
    const connection = createConnection();
    connection.connect();
    return () => connection.disconnect();
  }, [createOptions]); // ✅ 仅当 createOptions 更改时更改
}
```
这将确保如果 roomId 相同，createOptions 在多次渲染中会是同一个函数

**最好消除对函数依赖项的需求**。将你的函数移入 Effect 内部
```jsx
function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    function createOptions() { // ✅ 无需使用回调或函数依赖！
      return {
        serverUrl: 'https://localhost:1234',
        roomId: roomId
      };
    }

    const options = createOptions();
    const connection = createConnection();
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]); // ✅ 仅当 roomId 更改时更改
  // ...
}
```

## 优化自定义 Hook

编写一个 **自定义 Hook**，建议将它**返回的任何函数**包裹在 `useCallback` 中, 这确保了 Hook 的使用者在需要时能够优化自己的代码

```jsx
function useRouter() {
  const { dispatch } = useContext(RouterStateContext);

  const navigate = useCallback((url) => {
    dispatch({ type: 'navigate', url });
  }, [dispatch]);

  const goBack = useCallback(() => {
    dispatch({ type: 'back' });
  }, [dispatch]);

  return {
    navigate,
    goBack,
  };
}
```
