# three.js Canvas画布布局

## Canvas随着窗口变化
```js
// 画布跟随窗口变化
window.onresize = function () {
    const width = window.innerWidth - 200; //canvas画布高度
    const height = window.innerHeight - 60; //canvas画布宽度
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
};
```

## Three.js背景透明

通过Three.js渲染一个模型的时候，不希望canvas画布有背景颜色，也就是canvas画布完全透明，可以透过canvas画布看到画布后面叠加的HTML元素图文，呈现出来一种三维模型悬浮在网页上面的效果。

改变背景透明度值
```js
renderer.setClearAlpha(0.0);
```

```js
// 在构造函数参数中设置alpha属性的值
var renderer = new THREE.WebGLRenderer({
  alpha: true
});
```

## 保存为图片

```js
// 鼠标单击id为download的HTML元素，threejs渲染结果以图片形式下载到本地
document.getElementById('download').addEventListener('click',function(){
    // 创建一个超链接元素，用来下载保存数据的文件
    const link = document.createElement('a');

    // 通过超链接herf属性，设置要保存到文件中的数据
    const canvas = renderer.domElement; //获取canvas对象
    link.href = canvas.toDataURL("image/png");

    link.download = 'threejs.png'; //下载文件名
    link.click(); //js代码触发超链接元素a的鼠标点击事件，开始下载文件到本地
})
```

## 加载进度

```js
loader.load("../工厂.glb", function (gltf) {
    model.add(gltf.scene);
}, function (xhr) {
    // 控制台查看加载进度xhr
    // 通过加载进度xhr可以控制前端进度条进度   
    const percent = xhr.loaded / xhr.total;
    console.log('加载进度' + percent);
})
```