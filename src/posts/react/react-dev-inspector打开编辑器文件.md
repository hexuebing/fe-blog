# react-dev-inspector打开编辑器文件

## 安装包

```shell
npm i -D react-dev-inspector
```

## 在根文件中注入

```jsx
import { createRoot } from 'react-dom/client'
import { Inspector } from 'react-dev-inspector'
import { App } from './App'
import './index.css'
 
createRoot(document.getElementById('root') as HTMLDivElement)
  .render(
    <React.StrictMode>
      <Inspector />
      <App />
    </React.StrictMode>,
  )
```

## 触发快捷键

- `Ctrl + Shift + Command + C` on macOS
- `Ctrl + Shift + Alt + C` on Windows / Linux