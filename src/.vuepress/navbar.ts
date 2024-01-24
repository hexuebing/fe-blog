import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/demo/",
  {
    text: "文章列表",
    icon: "blog",
    prefix: "/posts/",
    children: [
      {
        text: "算法",
        icon: "pen-to-square",
        prefix: "leetCode/",
        children: [
          // { text: "苹果1", icon: "pen-to-square", link: "1" },
          "quicksort",
          "fib",
          "coins",// 零钱问题
          "invertTree", // 反转二叉树
          "flatten", // 二叉树展开为列表
          "connectNode", // 二叉树节点指向右侧节点
          "maxTree", // 最大二叉树
        ],
      },
      {
        text: "小程序",
        icon: "mini-app",
        prefix: "miniApp/",
        children: [
          {
            text: "保存到通讯录",
            icon: "profile",
            link: "contact",
          },
          // "3",
          // "4",
        ],
      },
      // { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      // { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      // "strawberry",
    ],
  },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
