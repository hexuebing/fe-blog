# 精灵模型Sprit

Three.js的精灵模型Sprite和Threejs的网格模型Mesh一样都是模型对象，父类都是`Object3D`

## 创建精灵模型Sprite

```js
const spriteMaterial = new THREE.SpriteMaterial({
  color:0x00ffff,//设置颜色
});

// 创建精灵模型对象，不需要几何体geometry参数
const sprite = new THREE.Sprite(spriteMaterial);
```

精灵模型Sprite默认是一个矩形形状，默认长宽都是1，默认在坐标原点位置

## 精灵模型Sprite与矩形平面Mesh

Sprite与矩形平面Mesh的区别在于,当你旋转三维场景的时候，如果通过相机控件OrbitControls旋转测试，你可以发现Sprite矩形平面会始终平行于Canvas画布或者说屏幕，而矩形平面Mesh的姿态角度会跟着旋转，不一定平行于canvas画布。

## 模拟下雨

```js
const texture = new THREE.TextureLoader().load("./rain.png");
const spriteMaterial = new THREE.SpriteMaterial({
    map: texture, 
});
const sprite = new THREE.Sprite(spriteMaterial);

// 随机位置分布
const group = new THREE.Group()
for (let i = 0; i < 200; i++) {
  const material = new THREE.SpriteMaterial({
    map: texture
  })
  const sprite = new THREE.Sprite(material)
  group.add(sprite)
  sprite.scale.set(5, 7, 1)

  sprite.position.set(200 * (Math.random()-0.5), 200 * (Math.random()-0.5), 200 * (Math.random()-0.5))
}
scene.add(group)

// 调整位置
function render(time) {
  // renderer.render(scene, camera);
  group.children.forEach((sprite) => {
    sprite.position.y -= 1;
    if(sprite.position.y < 0){
      sprite.position.y = 200 * (Math.random()-0.5)
    }
  })
  composer.render();
  requestAnimationFrame(render)
}
render()
```