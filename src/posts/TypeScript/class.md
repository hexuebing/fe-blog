---
icon: typescript
date: 2022-01-16
category:
  - TypeScript
tag:
  - class
star: true
sticky: true
---

# Class

## 1. 类定义

1. 类声明

```tsx
class ClassName {
  // ...
}
```

1. 类表达式

```tsx
const Circle = class {
	// ...
}
```

## 2. 成员变量

```tsx
class Circle {
	a: number = 1;
}
```

1. 严格模式在函数中初始化，需要增加非空类型断言

```tsx
class A {
	a!: number;
	// ! 非空断言,才可以
	init(){
		this.a = 0
	}

	constructor(){
		this.init()
	}
}
```

1. readonly属性

```tsx
class A {
	readonly a = 0;
	readonly b: number;
	readonly c: number; // 编译错误

	constructor(){
		this.b = 0;
	}
}
```

## 3. 成员函数

```tsx
class Circle {
	radius: number = 1;

	area(): number {
		return Math.PI * this.radius * this.radius;
	}
}
```

## 4. 成员存取器

```tsx
class C {
	private _foo: number = 0;
	get foo(): number {
		return this._foo;
	}
	set foo(value: number){
		if(value >= 0){
			this._foo = value
		}
	}
}
```

## 6. 成员可访问性

1. public

```tsx
class Foo {
	public a: string = ''
}

class Bor extends Foo {
	b() {
		return this.a; //允许访问
	}
}

const b = new Bor();
b.a; //允许访问
b.b(); //允许访问
```

1. protected

```tsx
class Foo {
	protected x: string = '';

	a() {
		this.x; // 允许访问
	}
}

class Bor extends Foo {
	b() {
		return this.x; //允许访问
	}
}

const b = new Foo();
b.x; //不允许访问
```
保护对象在当前类和派生类内部访问

1. private

```tsx
class Foo {
	private x: string = '';

	a() {
		this.x; // 允许访问
	}
}

class Bor extends Foo {
	b() {
		return this.x; //不允许访问
	}
}

const b = new Foo();
b.x; //不允许访问

const c = new Bor();
c.x; // 不允许访问
```
只允许当前类访问

## 8. 参数成员

```tsx
class A {
	constructor(public x: number) {}
}

const a = new A(0);
a.x; // 值为0
```
为形式参数添加可访问性修饰符或者readlony修饰符，该形式参数就成了参数成员。

## 9. 继承

```tsx
class A extends B {}
```
继承了基类的非私有成员

## 10. 实现接口

虽然一个类只允许继承一个基类，但是可以实现多个接口

```tsx
interface A {
	radius: number;
}
interface B {
	area(): number;
}

class C implements A, B {
	radius: number = 5;

	area(): number {
		return Math.PI * this.radius * this.radius
	}
}
```

## 11. 静态成员

静态成员不属于类的实例，而是属于类本身

```tsx
class Circle {
	static version: string = '1.0.1'
}

const version = Circle.version; // OK

const circle = new Circle();
circle.version; // 编译错误！
```

## 12. 抽象类和抽象成员

```tsx
abstract class Base {
	abstract a: string;

	b: string = ''
}
```
抽象类不能被实例化，不能使用new操作符调用。