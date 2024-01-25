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
# Utility Types

# Partial

传入属性变为可选项

```tsx
type Partial<T> = {[P in keyof T]?: T[P]}
```

理解`keyof`

```tsx
interface Person {
	name: string
	age: number
}
// T -> "name" | "age"
type T = keyof Person
```

# Required

传入属性变为必填项

```tsx
type Requried<T> = {[P in keyof T]-?: T[P]}
```

`-?` 将可选项 `？` 去掉

# Pick

从T提取一系列K的属性

```tsx
type Pick<T, K extends keyof T> = {[P in K]: T[P]}
```

# Exclude

排除 T 中 U 存在的属性

```tsx
type Exclude<T, U> = T extends U ? never : T
```

如果T是U的子类型的话，那么就返回never

```tsx
const str: Exclude<'1'| '2', '1'|'a'> = '2'
```

# Omit

```tsx
type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
```

`Exclude<keyof T, K>` 将 T 中不属于 K 的属性