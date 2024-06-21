# useContext 跨层级通信

## 使用 Context

```jsx
import React, { useContext, useState } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = React.createContext(); // 这里其实可以没有默认值

function ThemedButton() {
  const theme = useContext(ThemeContext);
  const [themes, setthemes] = useState(theme.dark);

  return (
    <div>
      <div
        style={{
          width: "100px",
          height: "100px",
          background: themes.background,
          color: themes.foreground,
        }}
      ></div>
      <button onClick={() => setthemes(theme.light)}>Light</button>&nbsp;&nbsp;
      <button onClick={() => setthemes(theme.dark)}>Dark</button>
    </div>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

// ThemeContext.Provider 就是这里的提供者，接收的 value 就是它要提供的上下文对象，最上面定义的themes对象
export default function ThemeChange() {
  return (
    <ThemeContext.Provider value={themes}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}
```

这个例子只是对使用 context 的值，而没有变更。通过传入一个自定义的 hook 来对数据进行变更

```jsx
import React, { useContext, useState } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = React.createContext();

// 自定义一个 Hook
function useThemeStatus() {
  const [theme, setTheme] = useState(themes.dark);
  return {
    theme,
    setTheme,
  };
}

function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  // const [themes, setthemes] = useState(theme.dark);
  console.log(theme);

  return (
    <div>
      <div
        style={{
          width: "100px",
          height: "100px",
          background: theme.background,
          color: theme.foreground,
        }}
      ></div>
      <button onClick={() => setTheme(themes.light)}>Light</button>&nbsp;&nbsp;
      <button onClick={() => setTheme(themes.dark)}>Dark</button>
    </div>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

export default function ThemeChange() {
  const theme = useThemeStatus(); // 给provider提供值是自定义hook
  return (
    <ThemeContext.Provider value={theme}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}
```

## 总结

1. 通过 `export const MyContext = createContext(defaultValue)` 创建并导出 `context`。
2. 在父组件中把 `children` 包在 `<MyContext.Provider value={...}>` 中来提供 `context`。
3. 在无论层级多深的任何子组件中，把 `context` 传递给 `useContext(MyContext) Hook` 来读取它。
