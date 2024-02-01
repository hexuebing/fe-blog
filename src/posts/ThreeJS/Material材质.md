# Material材质对象

## Color对象
查看颜色对象Color文档,可以看到颜色对象有三个属性，分别为.r、.g、.b，表示颜色RGB的三个分量

```js
// 创建一个颜色对象
const color = new THREE.Color();//默认是纯白色0xffffff。
console.log('查看颜色对象结构',color);//可以查看rgb的值

// 通过.r、.g、.b属性改变颜色值
color.r = 0.0;

color.setRGB(0,1,0);//RGB方式设置颜色
color.setHex(0x00ff00);//十六进制方式设置颜色
color.setStyle('#00ff00');//前端CSS颜色值设置颜色
```

## 材质的.color属性

Color提供了.setHex()、.setRGB()、.setStyle()、.set()等修改颜色值的方法，材质的color属性是Color，所以可以直接使用color的方法来设置颜色

```js
// 十六进制颜色
material.color.set(0x00ffff);

// 前端CSS风格颜色值：'#00ff00'、'rgb(0,255,0)'
material.color.set('#00ff00');
material.color.set('rgb(0,255,0)');
```

## 父类Material属性

基础网格材质MeshBasicMaterial、漫反射网格材质MeshLambertMaterial、高光网格材质MeshPhongMaterial等网格材质都有一个共同的父类**Material**

```js
// 材质半透明设置
material.transparent = true;//开启透明
material.opacity = 0.5;//设置透明度

// 材质面属性.side
material.side = THREE.BackSide;//背面可以看到
material.side = THREE.DoubleSide;//双面可见
```

### 模型访问材质属性

```js
// 访问模型材质,并设置材质的颜色属性, 等价于 material.color.set(0xffff00)
mesh.material.color.set(0xffff00);
```

## clone与copy

克隆.clone()、复制.copy()是threejs很多对象都具有的方法，比如三维向量对象Vector3、网格模型Mesh、几何体、材质。

```js
const mesh2 = mesh.clone();
// 克隆几何体和材质，重新设置mesh2的材质和几何体属性
mesh2.geometry = mesh.geometry.clone();
mesh2.material = mesh.material.clone();
// 改变mesh2颜色，不会改变mesh的颜色
mesh2.material.color.set(0xff0000);
```