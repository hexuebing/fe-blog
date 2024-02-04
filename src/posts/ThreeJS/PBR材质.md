# PBR材质

PBR就是，基于物理的渲染(physically-based rendering)。Three.js提供了两个PBR材质相关的API**MeshStandardMaterial**和**MeshPhysicalMaterial**，后者是前者的子类。

## PBR材质金属度和粗糙度

- 金属度属性.metalness表示材质像金属的程度, 非金属材料,如木材或石材,使用0.0,金属使用1.0。

- 粗糙度roughness,0.0表示平滑的镜面反射,1.0表示完全漫反射,默认0.5。

```js
new THREE.MeshStandardMaterial({
  metalness: 1.0,//金属度属性
  roughness: 0.5,//表面粗糙度
})
```

## 环境贴图.envMap

对于PBR材质，如果threejs三维场景不添加任何光源，物体就是完全黑色的，你可以不添加任何光源，尝试只使用环境贴图，你会发现物体表面的颜色也能看到，这说明环境贴图其实相当于提供了物体周围环境发射或反射的光线。

环境贴图，就是一个模型周围的环境的图像，比如一间房子，房子的上下左右前后分别拍摄一张照片，就是3D空间中6个角度方向的照片。

```js
// 加载环境贴图
// 加载周围环境6个方向贴图
// 上下左右前后6张贴图构成一个立方体空间
// 'px.jpg', 'nx.jpg'：x轴正方向、负方向贴图  p:正positive  n:负negative
// 'py.jpg', 'ny.jpg'：y轴贴图
// 'pz.jpg', 'nz.jpg'：z轴贴图
const textureCube = new THREE.CubeTextureLoader()
    .setPath('./环境贴图/环境贴图0/')
    .load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg']);
new THREE.MeshStandardMaterial({
    metalness: 1.0,
    roughness: 0.5,
    envMap: textureCube, //设置pbr材质环境贴图
     // envMapIntensity：控制环境贴图对mesh表面影响程度, 默认值1, 设置为0.0,相当于没有环境贴图
    envMapIntensity: 1.0,
})  
```

## 设置环境贴图

网格模型可以通过材质的.envMap属性设置环境贴图，如果一个gltf模型中所有的Mesh都要设置环境贴图就需要递归遍历gltf模型，给里面每个Mesh的材质设置.envMap。
```js
loader.load("../工厂.glb", function (gltf) {
    // 递归遍历批量设置环境贴图
    gltf.scene.traverse(function (obj) {
        if (obj.isMesh) { //判断是否是网格模型
            obj.material.envMap = textureCube; //设置环境贴图
        }
    });
})
```
如果你希望环境贴图影响场景中scene所有Mesh，可以通过Scene的场景环境属性.environment实现,把环境贴图对应纹理对象设置为.environment的属性值即可。

```js
// 环境贴图纹理对象textureCube作为.environment属性值,影响所有模型
scene.environment = textureCube;
```

## MeshPhysicalMaterial清漆层

MeshPhysicalMaterial是在MeshStandardMaterial基础上扩展出来的子类，除了继承了MeshStandardMaterial的金属度、粗糙度等属性，还新增了清漆.clearcoat、透光率.transmission、反射率.reflectivity、光泽.sheen、折射率.ior等等各种用于模拟生活中不同材质的属性。

清漆层属性`.clearcoat`可以用来模拟物体表面一层透明图层，就好比你在物体表面刷了一层透明清漆，喷了点水。.clearcoat的范围0到1，默认0。

清漆层粗糙度`.clearcoatRoughness`属性表示物体表面透明涂层`.clearcoat`对应的的粗糙度，.clearcoatRoughness的范围是为0.0至1.0。默认值为0.0。

```js
const material = new THREE.MeshPhysicalMaterial( {
	clearcoat: 1.0,//物体表面清漆层或者说透明涂层的厚度
	clearcoatRoughness: 0.1,//透明涂层表面的粗糙度
} );
```

## 物理材质透光率.transmission

为了更好的模拟玻璃、半透明塑料一类的视觉效果，可以使用物理透明度`.transmission`属性代替Mesh普通透明度属性`.opacity`。

使用.transmission属性设置Mesh透明度,即便完全透射的情况下仍可保持高反射率。

```js
const mesh = gltf.scene.getObjectByName('玻璃01')
mesh.material = new THREE.MeshPhysicalMaterial({
    transmission: 1.0, //玻璃材质透光率，transmission替代opacity 
    ior:1.5,//非金属材料的折射率从1.0到2.333。默认值为1.5。
})
```