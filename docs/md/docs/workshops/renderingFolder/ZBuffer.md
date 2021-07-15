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

El método del Z-Buffer usa el segundo enfoque (image-space), este tipo de métodos tienen una complejidad temporal que corresponden al número de pixeles multiplicado por el número de objetos, en cambio su complejidad espacial corresponde a dos veces el número de pixeles debido a que es el tamaño de cada uno de los dos buffers con los que se trabaja.
La idea principal consiste en probar la profundidad de cada superficie (z-depth) y así determinar si ésta resulta visible partiendo de la noción de visibilidad de la geometría que dice que dos puntos son visibles el uno con el otro, siempre que el segmento de recta que los une, no interseca ningún obstáculo dentro de un conjunto de obstáculos en un espacio.
Para llevar a cabo el método se procesan de forma separada un pixel a la vez a lo largo de toda la superficie. Los valores de Profundidad para cada pixel se comparan sobre el plano de proyección y la superficie más cercana (smallestz) determina el color a ser mostrado.

## El algoritmo

El algoritmo del Z-Buffer usa dos buffers, el de profundidad (Depth Buffer) y el de color (Frame Buffer)

### Pseudocodigo

```markdown
//Inicializamos los valores del Depth Buffer con la profundidad máxima
d(i, j) = MAX_DEPTH;
//Inicializamos el valor de color en el Frame Buffer con el color del fondo o background
C(i, j) = BACKGROUND_COLOR;
Para cada polígono:
	Para cada pixel en la proyección del polígono:
	{ Hallar la profundidad 'z' del polígono en (x, y)  correspondiente al pixel (i, j)
	    if ( z < d(i, j) ){
	        d(i, j) = z;
		    c(i, j) = color;
        }
     }
```

## Limitaciones

- Solo puede procesar superficies opacas
- Puede llegar a usar mucha memoria
- Puede sufrir artefactos debido a los errores de precisión (z-fighting)

## Ejemplos

### Objetos con diferentes coordenadas Z

> :Tabs
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
> > let x ;
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
> >     fill(255, 0, 0)
> >     translate(0, 0, 20);
> >     ellipse(0, 0, 20, 30)
> >     fill(0, 255, 0)
> >     translate(30, 10,-20);
> >     ellipse(0,0,120,80)
> >     fill(0, 0, 255)
> >     translate(100, 0, -10);
> >     box(30)
> >     fill(0, 255, 255)
> >     translate(-180, 0, 300);
> >     box(30)
> >     fill(255, 0, 255)
> >     translate(-300,-100, -3500);
> >     box(300)
> > }
> > ```
>

> :Tabs
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
> > let x ;
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
> >     fill(255, 0, 0)
> >     translate(0, 0, 20);
> >     ellipse(0, 0, 20, 30)
> >     fill(0, 255, 0)
> >     translate(30, 10,-20);
> >     ellipse(0,0,120,80)
> >     fill(0, 0, 255)
> >     translate(100, 0, -10);
> >     box(30)
> >     fill(0, 255, 255)
> >     translate(-180, 0, 300);
> >     box(30)
> >     fill(255, 0, 255)
> >     translate(-300,-100, -3500);
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
>


### Objetos con misma coordenada Z

> :Tabs
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
> > let x ;
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
> >     fill(255, 0, 0)
> >     translate(-150, 150, 0);
> >     box(100)
> >     fill(0, 0, 255)
> >     translate(150, -150, 0);
> >     box(100)
> >     fill(0, 255, 0)
> >     translate(150, -150, 0);
> >     box(100)
> > }
> > ```
>

> :Tabs
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
> > let x ;
> >
> > function preload() {
> >     myShader = loadShader("/vc/docs/sketches/rendering/shader2.vert", "/vc/docs/sketches/rendering/zBuffer.frag")
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
> >     fill(255, 0, 0)
> >     translate(-150, 150, 0);
> >     box(100)
> >     fill(0, 0, 255)
> >     translate(150, -150, 0);
> >     box(100)
> >     fill(0, 255, 0)
> >     translate(150, -150, 0);
> >     box(100)
> >
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
>

## Referencias

- https://en.wikipedia.org/wiki/Visibility_(geometry)
- https://en.wikipedia.org/wiki/Hidden-surface_determination
- https://www.tutorialspoint.com/computer_graphics/visible_surface_detection.htm
- https://www.geeksforgeeks.org/z-buffer-depth-buffer-method/
- https://www.youtube.com/watch?v=GxpPpG5pFpE
- https://www.pearson.com/us/higher-education/program/ANGEL-Pearson-e-Text-Interactive-Computer-Graphics-Access-Card-8th-Edition/PGM2160099.html
- https://www.scratchapixel.com/lessons/3d-basic-rendering/rasterization-practical-implementation/visibility-problem-depth-buffer-depth-interpolation
- https://en.wikipedia.org/wiki/Z-buffering#W-buffer
- http://www.songho.ca/opengl/gl_transform.html
