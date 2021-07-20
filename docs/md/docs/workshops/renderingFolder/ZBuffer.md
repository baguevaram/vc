# Z-Buffer (Depth Buffer)

## Introducción

Con el desarrollo de la tecnología en computación, se ha aumentado el potencial para la creación de entornos visuales cada vez más realistas, sin embargo, traer este realismo al usuario, supone también varios retos, que en términos generales tienen que ver con el modelamiento de la física del mundo real, dentro de una máquina de capacidad limitada. Partiendo de estas limitaciones lo que se busca es, aumentar el nivel de realidad visual, pero a su vez disminuir el tiempo que supone procesarla. Es claro que estas dos cosas están íntimamente relacionadas, por lo que se debe balancear entre ambas.

Al momento de disminuir el tiempo de procesamiento, juegan un rol clave los algoritmos que se usen, es por eso que los algoritmos deben ser soluciones “elegantes”, pero a la vez sencillas de procesar para una máquina.

En el mundo real, el ser humano no puede ver a través de la mayoría los objetos, así que constantemente existen obstáculos que nos impiden ver más allá, lo que hacemos para ver más allá de estos objetos es cambiar nuestro punto de vista de forma que no exista obstáculo alguno entre lo que se quiere visualizar y la persona. Para poder reproducir un entorno visual realista, modelar este comportamiento resulta vital. De ahí nace el problema de la visibilidad en computación gráfica, que consiste en la determinación de las superficies o partes de una superficie que se deben ocultar, dado un punto de vista o ángulo de vista particular.

## El problema de la visibilidad

En el mundo real, el ser humano no puede ver a través de la mayoría los objetos, así que constantemente existen obstáculos que nos impiden ver más allá, lo que hacemos para ver más allá de estos objetos es cambiar nuestro punto de vista de forma que no exista obstáculo alguno entre lo que se quiere visualizar y la persona. Para poder reproducir un entorno visual realista, modelar este comportamiento resulta vital. De ahí nace el problema de la visibilidad en computación gráfica, que consiste en la determinación de las superficies o partes de una superficie que se deben ocultar, dado un punto de vista o ángulo de vista particular.

## Trasladando el problema de la vida real a la computación visual

Cuando se quiere mostrar una escena 3D con varios objetos lo hacemos por medio de una pantalla en 2D, por lo que es importante identificar las partes de la escena que serán visibles en la pantalla.
Para abordar el problema de visibilidad en el contexto de la computación visual, existen dos enfoques:

1. En el espacio del objeto: este método se implementa en el sistema de coordenadas físicas y compara objetos o partes del objeto para determinar la superficie visible. Este enfoque suele funcionar mejor para escenas con contengan relativamente pocos objetos (poligonos).

2. En el espacio de la imagen: Este método se implementa en el sistema de coordenadas de la pantalla y la visibilidad se decide punto por punto.

## El Z-Buffer como una posible solución

El método del Z-Buffer usa el segundo enfoque (image-space), este tipo de método tiene una complejidad temporal que corresponden al número de pixeles multiplicado por el número de objetos, en cambio su complejidad espacial corresponde a dos veces el número de pixeles debido a que es el tamaño de cada uno de los dos buffers con los que se trabaja.
La idea principal consiste en probar la profundidad de cada superficie (z-depth) y así determinar si ésta resulta visible partiendo de la noción de visibilidad de la geometría que dice que dos puntos son visibles el uno con el otro, siempre que el segmento de recta que los une, no interseca ningún obstáculo dentro de un conjunto de obstáculos en un espacio.
Para llevar a cabo el método se procesan de forma separada un pixel a la vez a lo largo de toda la superficie. Los valores de Profundidad para cada pixel se comparan sobre el plano de proyección y la superficie más cercana (smallestz) determina el color a ser mostrado.

## El algoritmo

El algoritmo del Z-Buffer es el más usado para tratar el problema de visibilidad debido a sus ventajas, como ser sencillo de implementar, tanto en software como en hardware entre otras.
Usa dos buffers, el de profundidad (Depth Buffer) y el de color (Frame Buffer)

 ![zbuffer](/docs/sketches/rendering/img/Zbuffer-Algo.png)

### Pseudocodigo

```markdown
//Inicializamos los valores del Depth Buffer con la profundidad máxima
d(i, j) = MAX_DEPTH;
//Inicializamos el valor de color en el Frame Buffer con el color del fondo o background
C(i, j) = BACKGROUND_COLOR;
Para cada polígono:
	Para cada pixel en la proyección del polígono:
	{ Hallar la profundidad 'z' del polígono en (x, y) correspondiente al pixel (i, j)
		if ( z < d(i, j) ){
			d(i, j) = z;
			c(i, j) = color;
	}
}
```

## Ventajas

- Puede ser ejecutado de formá rápida incluso cuando existen muchos polígonos.
- Puede ser implementado en hardware para superar el problema de velocidad
- Es sencillo y no requiere de ninguna estructura de datos adicional además de las mencionadas.
- El valor z de un poligono puede ser calculado de forma incremental.

## Limitaciones

- Procesa unicamente superficies opacas: Una opción para poder abordar una situación que requiera procesamiento de superficies con cierta transparencia es hacer uso del A-Buffer, que añade información extra al Z-Buffer clásico. Cada pixel se conforma de un grupo de subpixeles, y el color final es calculado por la suma de todos los subpixeles, esta acumulación le da el nombre de Accumulation Buffer. 

 ![ABuffer](/docs/sketches/rendering/img/ABuffer.png)

- Puede sufrir artefactos debido a los errores de precisión: Este tipo de artefactos (z-fighting) suceden cuando las distancias de al menos dos poligonos se encuentran muy cercanas, y al momento de representar la información de profundidad en el zBuffer resulta imposible determinar cual es la que se encuentra más alejada/cerca. Se puede mitigar de varias formas, como reducir la distancia del plano lejano, lo que aumenta la precisión, almacenar en el zbuffer los inversos multiplicativos de las profundidades, o distanciar las primitivas en conflicto. 

 ![Z-Fighting](/docs/sketches/rendering/img/ZFighting.gif)

- Puede llegar a usar mucha memoria.


## Ejemplos

### Objetos con diferentes coordenadas Z

> :Tabs
>
> > :Tab title=Sin shader
> >
> > > :P5 sketch=/docs/sketches/rendering/zBufferBefore.js, width=500, height=500
>
> > :Tab title=Codigo
> >
> > ```javascript
> > let W;
> > let H;
> >
> > // let myShader;
> >
> > let x;
> >
> > function preload() {
> >     // myShader = loadShader("/vc/docs/sketches/rendering/shader.vert", "/vc/docs/sketches/rendering/zBuffer.frag")
> > }
> >
> > function setup() {
> >     W = 500;
> >     H = 500;
> >     createCanvas(W, H, WEBGL);
> >     // shader(myShader);
> > }
> >
> > function draw() {
> >     strokeWeight(1)
> >     fill(255, 0, 0, 0)
> >     translate(0, 0, 20);
> >     ellipse(0, 0, 20, 30)
> >     fill(0, 255, 0, 0)
> >     translate(30, 10, -20);
> >     ellipse(0, 0, 120, 80)
> >     fill(0, 0, 255, 0)
> >     translate(70, 7, -10);
> >     box(30)
> >     fill(0, 255, 255, 0)
> >     strokeWeight(0.3)
> >     translate(-120, 0, 300);
> >     box(30)
> >     strokeWeight(5)
> >     fill(255, 0, 255, 0)
> >     translate(-300, -100, -3500);
> >     box(300)
> > }
> > ```

> :Tabs
>
> > :Tab title=Con shader
> >
> > > :P5 sketch=/docs/sketches/rendering/zBuffer.js, width=500, height=500
>
> > :Tab title=Codigo
> >
> > ```javascript
> > let W;
> > let H;
> >
> > let myShader;
> >
> > let x;
> >
> > function preload() {
> >     myShader = loadShader("/vc/docs/sketches/rendering/shader.vert", "/vc/docs/sketches/rendering/zBuffer.frag")
> > }
> >
> > function setup() {
> >     W = 500;
> >     H = 500;
> >     createCanvas(W, H, WEBGL);
> >     shader(myShader);
> > }
> >
> > function draw() {
> >     strokeWeight(1)
> >     fill(255, 0, 0, 0)
> >     translate(0, 0, 20);
> >     ellipse(0, 0, 20, 30)
> >     fill(0, 255, 0, 0)
> >     translate(30, 10, -20);
> >     ellipse(0, 0, 120, 80)
> >     fill(0, 0, 255, 0)
> >     translate(70, 7, -10);
> >     box(30)
> >     fill(0, 255, 255, 0)
> >     strokeWeight(0.3)
> >     translate(-120, 0, 300);
> >     box(30)
> >     strokeWeight(5)
> >     fill(255, 0, 255, 0)
> >     translate(-300, -100, -3500);
> >     box(300)
> > }
> > ```
>
> > :Tab title=Vertex Shader
> >
> > ```glsl
> > // Precision seems mandatory in webgl
> > precision highp float;
> >
> > // 1. Attributes and uniforms sent by p5.js
> >
> > // Vertex attibutes and some uniforms are sent by
> > // p5.js following these naming conventions:
> > // https://github.com/processing/p5.js/blob/main/contributor_docs/webgl_mode_architecture.md
> >
> > // 1.1. Attributes
> > // Geometry position attribute
> > attribute vec3 aPosition;
> >
> > // Geometry texture coordinate
> > attribute vec2 aTexCoord;
> >
> > // Geometry color attribute
> > attribute vec4 aVertexColor;
> >
> > // 1.2. Matrix uniforms
> >
> > // The vertex shader should project the vertex position into clip space:
> > // vertex_clipspace = vertex * projection * view * model (see the gl_Position below)
> > // Details here: http://visualcomputing.github.io/Transformations
> >
> > // Either a perspective or an orthographic projection
> > uniform mat4 uProjectionMatrix;
> >
> > // modelview = view * model
> > uniform mat4 uModelViewMatrix;
> >
> >
> > uniform mat4 uModelViewMatrixInverseTranspose;
> >
> > // B. varying variables are defined by the shader programmer:
> > // vertex color
> > varying vec4 vVertexColor;
> >
> > // vertex texcoord
> > varying vec2 vTexCoord;
> >
> > varying float vZPos;
> >
> >
> >
> > void main() {
> >
> >     // copy / interpolate color
> >     vVertexColor = aVertexColor;
> >     // copy / interpolate texcoords
> >     vTexCoord = aTexCoord;
> >     // vertex projection into clipspace
> >     gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aPosition, 1.0);
> >
> > //    vZPos = aPosition.z;
> >     vZPos =( (gl_Position.z/gl_Position.w)-0.5);
> >
> > }
> > ```
>
> > :Tab title=Fragment Shader
> >
> > ```glsl
> > // precision mediump float;
> >
> > // interpolated color (same name as in vertex shader)
> > varying vec4 vVertexColor;
> > // interpolated texcoord (same name as in vertex shader)
> > varying vec2 vTexCoord;
> >
> > varying float vZPos;
> >
> > void main() {
> >
> >     float color = vZPos;
> >
> >     vec4 pixelColor = vVertexColor;
> >
> >     pixelColor.r = color;
> >     pixelColor.g = color;
> >     pixelColor.b = color;
> >
> >     gl_FragColor = pixelColor;
> > }
> > ```

### Objetos con misma coordenada Z

> :Tabs
>
> > :Tab title=Sin shader
> >
> > > :P5 sketch=/docs/sketches/rendering/zBuffer2Before.js, width=500, height=500
>
> > :Tab title=Codigo
> >
> > ```javascript
> > let W;
> > let H;
> >
> > // let myShader;
> >
> > let x;
> >
> > function preload() {
> >   // myShader = loadShader("/vc/docs/sketches/rendering/shader.vert", "/vc/docs/sketches/rendering/zBuffer.frag")
> > }
> >
> > function setup() {
> >   W = 500;
> >   H = 500;
> >   createCanvas(W, H, WEBGL);
> >   // shader(myShader);
> > }
> >
> > function draw() {
> >   fill(255, 0, 0);
> >   translate(-150, 150, 0);
> >   box(100);
> >   fill(0, 0, 255);
> >   translate(150, -150, 0);
> >   box(100);
> >   fill(0, 255, 0);
> >   translate(150, -150, 0);
> >   box(100);
> > }
> > ```

> :Tabs
>
> > :Tab title=Con shader
> >
> > > :P5 sketch=/docs/sketches/rendering/zBuffer2.js, width=500, height=500
>
> > :Tab title=Codigo
> >
> > ```javascript
> > let W;
> > let H;
> >
> > let myShader;
> >
> > let x;
> >
> > function preload() {
> >   myShader = loadShader(
> >     "/vc/docs/sketches/rendering/shader2.vert",
> >     "/vc/docs/sketches/rendering/zBuffer.frag"
> >   );
> > }
> >
> > function setup() {
> >   W = 500;
> >   H = 500;
> >   createCanvas(W, H, WEBGL);
> >   shader(myShader);
> > }
> >
> > function draw() {
> >   fill(255, 0, 0);
> >   translate(-150, 150, 0);
> >   box(100);
> >   fill(0, 0, 255);
> >   translate(150, -150, 0);
> >   box(100);
> >   fill(0, 255, 0);
> >   translate(150, -150, 0);
> >   box(100);
> > }
> > ```
>
> > :Tab title=Vertex Shader
> >
> > ```glsl
> > // Precision seems mandatory in webgl
> > precision highp float;
> >
> > // 1. Attributes and uniforms sent by p5.js
> >
> > // Vertex attibutes and some uniforms are sent by
> > // p5.js following these naming conventions:
> > // https://github.com/processing/p5.js/blob/main/contributor_docs/webgl_mode_architecture.md
> >
> > // 1.1. Attributes
> > // Geometry position attribute
> > attribute vec3 aPosition;
> >
> > // Geometry texture coordinate
> > attribute vec2 aTexCoord;
> >
> > // Geometry color attribute
> > attribute vec4 aVertexColor;
> >
> > // 1.2. Matrix uniforms
> >
> > // The vertex shader should project the vertex position into clip space:
> > // vertex_clipspace = vertex * projection * view * model (see the gl_Position below)
> > // Details here: http://visualcomputing.github.io/Transformations
> >
> > // Either a perspective or an orthographic projection
> > uniform mat4 uProjectionMatrix;
> >
> > // modelview = view * model
> > uniform mat4 uModelViewMatrix;
> >
> >
> > uniform mat4 uModelViewMatrixInverseTranspose;
> >
> > // B. varying variables are defined by the shader programmer:
> > // vertex color
> > varying vec4 vVertexColor;
> >
> > // vertex texcoord
> > varying vec2 vTexCoord;
> >
> > varying float vZPos;
> >
> >
> >
> > void main() {
> >
> >     // copy / interpolate color
> >     vVertexColor = aVertexColor;
> >     // copy / interpolate texcoords
> >     vTexCoord = aTexCoord;
> >     // vertex projection into clipspace
> >     gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aPosition, 1.0);
> >
> >     vZPos = (aPosition.z+0.5)*0.8;
> > }
> > ```
>
> > :Tab title=Fragment Shader
> >
> > ```glsl
> > // precision mediump float;
> >
> > // interpolated color (same name as in vertex shader)
> > varying vec4 vVertexColor;
> > // interpolated texcoord (same name as in vertex shader)
> > varying vec2 vTexCoord;
> >
> > varying float vZPos;
> >
> > void main() {
> >
> >     float color = vZPos;
> >
> >     vec4 pixelColor = vVertexColor;
> >
> >     pixelColor.r = color;
> >     pixelColor.g = color;
> >     pixelColor.b = color;
> >
> >     gl_FragColor = pixelColor;
> > }
> > ```

### Interactivo con shader

> :Tabs
>
> > :Tab title=sketch
> >
> > > :P5 sketch=/docs/sketches/rendering/zBuffer4.js, lib1="https://cdn.jsdelivr.net/gh/freshfork/p5.EasyCam@1.2.1/p5.easycam.js", width=500, height=500
>
> > :Tab title=Código
> >
> > ```javascript
> > let W;
> > let H;
> >
> > var near, far;
> >
> > let myShader;
> >
> > function preload() {
> >   myShader = loadShader("/vc/docs/sketches/rendering/shaderOriginal.vert", "/vc/docs/sketches/rendering/depthmap.frag");
> > }
> >
> > function setup() {
> >   W = 500;
> >   H = 500;
> >   createCanvas(W, H, WEBGL);
> >   createEasyCam();
> >
> >   shader(myShader);
> >   near = 1;
> >   far = 800;
> >   myShader.setUniform('near', near);
> >   myShader.setUniform('far', far);
> > }
> >
> > function draw() {
> >   // projection
> >   perspective(60 * PI/180, width/height, near, far);
> >
> >   // clear BG
> >   background(255);
> >   noStroke();
> >
> >   fill(255, 0, 0)
> >   translate(-150, 150, 0);
> >   box(100)
> >   fill(0, 0, 255)
> >   translate(150, -150, 0);
> >   box(100)
> >   fill(0, 255, 0)
> >   translate(150, -150, 0);
> >   box(100)
> > 
> > }
> > 
> > ```
>
> > :Tab title=Fragment Shader
> >
> > ```glsl
> > precision mediump float;
> > 
> > // The fragment eye depth is obtained by solving z_e in terms z_n from here:
> > // http://visualcomputing.github.io/Transformations/#/6/14 and:
> > // http://visualcomputing.github.io/Transformations/#/6/15
> > // yielding to: z_e = (2 * near * far) / (z_n * (far - near) - far - near) (eq1)
> > 
> > uniform float near;
> > uniform float far;
> > 
> > // remapping of a value among 2 ranges: http://visualcomputing.github.io/Transformations/#/7/1
> > // same as: https://processing.org/reference/map_.html
> > float map(float value, float start1, float stop1, float start2, float stop2) {
> >     return start2 + (value - start1) * (stop2 - start2) / (stop1 - start1);
> > }
> > 
> > void main() {
> >     // z_n is obtained by remapping gl_FragCoord.z from [0..1] to [-1..1]
> >     float z_n = map(gl_FragCoord.z, 0.0, 1.0, -1.0, 1.0);
> >     // eq 1
> >     float z_e = (2.0 * near * far) / (z_n * (far - near) - far - near);
> >     // the normalized eye depth is obtained by remapping z_e from [-near..-far] to [0..1]
> >     float depth = map(z_e, -near, -far, 1.0, 0.0);
> >     // render the depth as a grey scale color
> >     gl_FragColor = vec4(vec3(depth), 1.0);
> > }
> > 
> > ```
### Interactivo visual


> :Tabs
>
> > :Tab title=3D
> >
> > > :P5 sketch=/docs/sketches/rendering/zBuffer3.js, width=500, height=500
>
> > :Tab title=Código
> >
> > ```javascript
> > let W;
> > let H;
> > 
> > let myShader;
> > 
> > function preload() {
> >   // myShader = loadShader(
> >   // "/vc/docs/sketches/rendering/shader2.vert",
> >   //  "/vc/docs/sketches/rendering/zBuffer.frag"
> >   // ); 
> > }
> > 
> > function setup() {
> >   W = 720;
> >   H = 500;
> >   createCanvas(W, H, WEBGL);
> >   //shader(myShader);
> > 
> >   sliderX = createSlider(0, 360, 1);
> >   sliderX.position(12, 24);
> >   sliderY = createSlider(0, 360, 1);
> >   sliderY.position(12, 48);
> >   sliderEnable = createSlider(1, 2, 2);
> >   sliderEnable.position(12, 72);
> >  
> > }
> > 
> > function draw() {
> >   gl = this._renderer.GL;
> >   if (sliderEnable.value() === 2) {
> >     gl.enable(gl.DEPTH_TEST);
> >   } else {
> >     gl.disable(gl.DEPTH_TEST);
> >   }
> > 
> >   let sliderXVal = sliderX.value();
> >   let sliderYVal = sliderY.value();
> >   angleMode(DEGREES);
> > 
> >   fill(255, 0, 0);
> >   translate(-150, 150, 0);
> >   background(200);
> >   rotateX(sliderXVal);
> >   rotateY(sliderYVal);
> >   box(100);
> >   fill(0, 0, 255);
> >   translate(150, -150, 0);
> >   box(100);
> >   fill(0, 255, 0);
> >   translate(150, -150, 0);
> >   box(100);
> > 
> > }
> > 
> > ```
>



## Conclusiones y Trabajo futuro
El ZBuffer es la opción más común para abordar el problema de la visibilidad, es elegido por su simplicidad,  por la aceleración que brinda una posible implementación por hardware, además que junto con el proceso de culling se logra aumentar la velocidad con la que se renderiza, ya que disminuye la cantidad de polígonos que pasan a través del rendering pipeline. Como ya se mencionó algunas de sus debilidades pueden ser atenuadas por medio del almacenamiento de información adicional que le de un conocimiento mayor del contexto, quizá el único problema que esto implicaría sería el resaltar la debilidad del uso del espacio en memoria, sin embargo, es normal que se sacrifique capacidad de almacenamiento por disminuir el esfuerzo de cómputo o viceversa (Complejidad Espacial vs Complejidad temporal), queda entonces a consideración de quién desee implementarlo, decidir si vale la pena.

Para el trabajo futuro, sería desafiante realizar una exploración más minuciosa del algoritmo, que permita hacer una implementación del mismo junto con el conjunto de mejoras o desarrollos disponibles, para poder notar el impacto que estos suponen. Quizá mas adelante valdría la pena estudiar otros métodos para solucionar el problema de la visibilidad, sus pros y contras, y plantear una comparativa con el método del ZBuffer. 

## Referencias

- https://www.pearson.com/us/higher-education/program/ANGEL-Pearson-e-Text-Interactive-Computer-Graphics-Access-Card-8th-Edition/PGM2160099.html
- http://www.songho.ca/opengl/gl_transform.html
- https://www.tutorialspoint.com/computer_graphics/visible_surface_detection.htm
- https://www.geeksforgeeks.org/z-buffer-depth-buffer-method/
- https://www.scratchapixel.com/lessons/3d-basic-rendering/rasterization-practical-implementation/visibility-problem-depth-buffer-depth-interpolation
- https://en.wikipedia.org/wiki/Visibility_(geometry)
- https://en.wikipedia.org/wiki/Hidden-surface_determination
- https://www.youtube.com/watch?v=GxpPpG5pFpE
- https://en.wikipedia.org/wiki/Z-buffering#W-buffer
- https://editor.p5js.org/ffd8/sketches/k00WttDRc
- https://webglfundamentals.org/webgl/lessons/webgl-3d-perspective.html
