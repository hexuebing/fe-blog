---
icon: typescript
date: 2022-01-16
category:
  - TypeScript
tag:
  - interface
star: true
sticky: true
---

# 函数作为interface参数定义

# 无参数无返回

## Example 1:

Function that does not take arguments and does not return a value:

```tsx
interface MyClassProps {
    someProp: string;
    onChange(): any;
}
class MyClass extends React.Component<MyClassProps, MyClassState> ...
```

# 有参数有返回

## Example 2:

Function that accepts an argument and returns a value:

```tsx
interface MyClassProps {
    onChange(name: string): number;
}
```

# 函数可选

## Example 3:

Function that is optional:

```tsx
interface MyClassProps {
    onChange?(name: string): number;
    niceProp: boolean;
}
```

# 使用类型

## Example 4:

Using the type keyword:

```
type MyFunctionType = (name: string) => number;
interface MyClassProps {
    onChange: MyFunctionType;
    niceProp: string;
}
```