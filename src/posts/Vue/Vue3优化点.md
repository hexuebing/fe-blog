# Vue3优化

1. composition API，大大增加了代码的逻辑组织和代码复用能力
2. 重新实现响应式系统，Object.defineProperty不能检测对象属性的添加和删除，并且对于嵌套层级比较深的情况存在性能问题，而Proxy对于删除还是监听当然也能监听，并且在访问深层对象时候才会去递归代理。
3. 优化diff算法，双端diff改为快速diff算法
4. TypeScript支持