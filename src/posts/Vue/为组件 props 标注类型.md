# 为组件的 props 标注类型

## 运行时声明

```ts
<script setup lang="ts">
const props = defineProps({
  foo: { type: String, required: true },
  bar: Number
})

props.foo // string
props.bar // number | undefined
</script>
```

## 基于类型的声明

_通过泛型参数来定义 props 的类型通常更直接_

```ts
<script setup lang="ts">
const props = defineProps<{
  foo: string
  bar?: number
}>()
</script>
```

也可以将 props 的类型移入一个单独的接口中

```ts
<script setup lang="ts">
interface Props {
  foo: string
  bar?: number
}

const props = defineProps<Props>()
</script>
```
