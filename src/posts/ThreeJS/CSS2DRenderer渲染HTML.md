# CSS2DRenderer渲染HTML

## CSS2DObject
通过CSS2DObject类，可以把一个HTML元素转化为一个类似threejs网格模型的对象，换句话说就是你可以把CSS2DObject当成threejs的一个模型一样去设置位置.position或添加到场景中。

```js
const earthDiv = document.createElement( 'div' );
earthDiv.className = 'label';
earthDiv.textContent = '地球';
earthDiv.style.backgroundColor = 'transparent';

const earthLabel = new CSS2DObject( earthDiv );
earthLabel.position.set( 1.5 * EARTH_RADIUS, 0, 0 ); // 空间位置
earthLabel.center.set( 0, 1 );
earth.add( earthLabel ); // 将label作为mesh的子模型
```

## CSS2DRenderer
CSS2渲染器CSS2DRenderer和WebGL渲染器WebGLRenderer虽然不同，但是有些属性和方法是相似的

```js
const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize( window.innerWidth, window.innerHeight );
labelRenderer.domElement.style.position = 'absolute';
labelRenderer.domElement.style.top = '0px';
document.body.appendChild( labelRenderer.domElement );
```

CSS2渲染器CSS2DRenderer和常用的WebGL渲染器WebGLRenderer一样都是渲染器，只是渲染模型对象不同，WebGLRenderer主要是渲染threejs自身的网格、点、线等模型，CSS2DRenderer用来渲染HTML元素标签对应的CSS2模型对象CSS2DObject。

## 查看labelRenderer.domElement

threejs执行css2Renderer.render()之后，你打开浏览器控制台元素选项,找到你创建的HTML标签，你可以发现外面多了一层div父元素, CSS2Renderer.domElement对应的就是外面的父元素。
```html
<!-- 外面多了一层div父元素 -->
<div style="overflow: hidden; width: 600px; height: 300px;">
</div>
```

## Canvas尺寸变化

```js
window.addEventListener( 'resize', onWindowResize );

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
  labelRenderer.setSize( window.innerWidth, window.innerHeight );
}
```