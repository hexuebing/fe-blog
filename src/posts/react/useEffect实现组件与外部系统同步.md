# useEffect实现组件与外部系统同步

## 连接到外部系统

有些组件需要与网络、某些浏览器 API 或第三方库保持连接，当它们显示在页面上时。这些系统不受 React 控制，所以称为**外部系统**。

在这里，**外部系统**是指任何不受 React 控制的代码，例如：

- 由 `setInterval()` 和 `clearInterval()` 管理的定时器。
- 使用 `window.addEventListener()` 和 `window.removeEventListener()` 的事件订阅。
- 一个第三方的动画库，它有一个类似 `animation.start()` 和 `animation.reset()` 的 API。

```jsx
import { useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
  	const connection = createConnection(serverUrl, roomId);
    connection.connect();
  	return () => {
      connection.disconnect();
  	};
  }, [serverUrl, roomId]);
  // ...
}
```
为了 **帮助你发现 bug**，在开发环境下，React 在运行 `setup` 之前会额外运行一次`setup` 和 `cleanup`。这是一个压力测试，用于验证 Effect 逻辑是否正确实现。

一般来说，用户**不应该**能够区分`只调用一次 setup（在生产环境中）`与调用 `setup → cleanup → setup 序列（在开发环境中）`

## 自定义Hook中封装useEffect

`useChatRoom` 自定义 Hook 把 Effect 的逻辑“隐藏”在一个更具声明性的 API 
```jsx
import { useEffect } from 'react';
import { createConnection } from './chat.js';

export function useChatRoom({ serverUrl, roomId }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);
}
```

```jsx
function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useChatRoom({
    roomId: roomId,
    serverUrl: serverUrl
  });
  // ...
}
```

## 控制非React小部件

有一个没有使用 React 编写的**第三方地图小部件**, 使用 Effect 调用该组件上的方法，使其状态与 React 组件的当前状态相匹配
```jsx
import { useRef, useEffect } from 'react';
import { MapWidget } from './map-widget.js';

export default function Map({ zoomLevel }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current === null) {
      mapRef.current = new MapWidget(containerRef.current);
    }

    const map = mapRef.current;
    map.setZoom(zoomLevel); // 地图实例setZoom() 来保持同步
  }, [zoomLevel]);

  return (
    <div
      style={{ width: 200, height: 200 }}
      ref={containerRef}
    />
  );
}
```

```js
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';

export class MapWidget {
  constructor(domNode) {
    this.map = L.map(domNode, {
      zoomControl: false,
      doubleClickZoom: false,
      boxZoom: false,
      keyboard: false,
      scrollWheelZoom: false,
      zoomAnimation: false,
      touchZoom: false,
      zoomSnap: 0.1
    });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(this.map);
    this.map.setView([0, 0], 0);
  }
  setZoom(level) {
    this.map.setZoom(level);
  }
}
```
不需要 `cleanup 函数`，因为 MapWidget 类只管理传递给它的 DOM 节点, 从树中删除 Map React 组件后，`DOM 节点`和 `MapWidget 类实例`都将被浏览器的 JavaScript 引擎的垃圾回收机制自动处理掉。

## useEffect请求数据

```jsx
import { useState, useEffect } from 'react';
import { fetchBio } from './api.js';

export default function Page() {
  const [person, setPerson] = useState('Alice');
  const [bio, setBio] = useState(null);
  useEffect(() => {
    async function startFetching() {
      setBio(null);
      const result = await fetchBio(person);
      if (!ignore) {
        setBio(result);
      }
    }

    let ignore = false;
    startFetching();
    return () => {
      ignore = true;
    }
  }, [person]);

  return (
    <>
      <select value={person} onChange={e => {
        setPerson(e.target.value);
      }}>
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>
      <hr />
      <p><i>{bio ?? 'Loading...'}</i></p>
    </>
  );
}
```

## 从 useEffect 读取最新的 props 和 state

有时你想要从 Effect 中获取 最新的 props 和 state，而不“响应”它们
```jsx
function Page({ url, shoppingCart }) {
  useEffect(() => {
    logVisit(url, shoppingCart.length);
  }, [url, shoppingCart]); // ✅ 所有声明的依赖项
  // ...
}
```
**如果你想在每次 url 更改后记录一次新的页面访问，而不是在 shoppingCart 更改后记录，该怎么办？**

你可以表达你 `不希望` 某些代码对更改做出“响应”，即使它是在 Effect 内部调用的。使用 `useEffectEvent Hook` 声明 `Effect 事件`，并将读取 `shoppingCart` 的代码移入其中
```jsx
function Page({ url, shoppingCart }) {
  const onVisit = useEffectEvent(visitedUrl => {
    logVisit(visitedUrl, shoppingCart.length)
  });

  useEffect(() => {
    onVisit(url);
  }, [url]); // ✅ 所有声明的依赖项
  // ...
}
```
**Effect 事件不是响应式的，必须始终省略其作为 Effect 的依赖项。**