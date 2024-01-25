---
icon: typescript
date: 2022-01-16
category:
  - TypeScript
tag:
  - 泛型
star: true
sticky: true
---

# 泛型

## 1. 简介

```tsx
function identity<T>(arg: T): T {
	return arg
}
```

```tsx
const foo = identity<string>('foo')
```

在大部分情况下，程序无需显示指定类型参数的实际类型，会自动推断出类型参数

```tsx
const foo = identity('foo')
```

## 2. 形式类型参数

```tsx
<TypeParameter, TypeParameter, ...>
```

- 形式类型参数名通常大写开头，推荐以T为前缀： TResponse
- 或者使用单个大写字母 <T, U, V>

```tsx
<T, U = boolean>
```

## 4. 泛型约束

```tsx
<TypeParamter extends ConstraintType>
```

```tsx
interface Point {
	x: number;
	y: number;
}

function identity<T extends Point>(x: T): T {
	return x;
}

identity({x: 0, y: 0, z: 0}) //参数属于Point类型的子类型，能赋值给Point类型

identity({x: 0}) // 编译错误
```

可同时指定泛型约束和默认类型

```tsx
<T extends ConstraintType = DefaultType>
```

常见的错误：返回约束类型

```tsx
function f<T extends boolean>(x: T): T {
	return true
}

f<false>(false)
```