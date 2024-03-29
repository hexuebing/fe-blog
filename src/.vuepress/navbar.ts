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
        text: "vue",
        icon: "vue",
        prefix: "Vue/",
        children: []
      },
      {
        text: "JS",
        icon: "javascript",
        prefix: "JavaScript/",
        children: ["curry", "changeThis","deepClone","newkey"]
      },
      {
        text: "算法",
        icon: "pen-to-square",
        prefix: "leetCode/",
        children: [
          // { text: "苹果1", icon: "pen-to-square", link: "1" },
          "arraySort",
          "fib",
          "coins",// 零钱问题
          "invertTree", // 反转二叉树
          "flatten", // 二叉树展开为列表
          "connectNode", // 二叉树节点指向右侧节点
          "maxTree", // 最大二叉树
          "buildTree",
          "findSubtree",
          "maxTree",
          "threeSum",
          "twoSum",
          "uniqueArray",
          "minPath",
          "rob",
          "rob1",
          "rob2",
          "permutation"
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
      {
        text: "其他",
        icon: "linter",
        prefix: "other/",
        children: [
          "git", "codeSplitting"
        ]
      }
      // "strawberry",
    ],
  },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
