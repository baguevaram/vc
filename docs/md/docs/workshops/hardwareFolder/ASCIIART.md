# ASCII ART

1. A cada carácter ASCII se le puede asignar un aproximado de densidad en escala de grises; 
el signo @ obviamente es visualmente más oscuro que el signo +, por ejemplo.

2. Se divide la imagen en bloques, estos son sacados a partir de una sección de la textura. Cada bloque se convierte en uno de los 
caracteres ASCII.

3. En cada bloque se toma un píxel representativo ubicado en la esquina superior izquierda, ya que la coherencia espacial nos dice que los píxeles en la misma región del bloque no serán muy diferentes.
   
4. En cada bloque se selecciona un carácter cuya densidad en escala de grises previamente calculado en el paso 1 es 
una buena aproximación al pixel representativo en el bloque del paso 3.

> :Tabs
> > :Tab title=Implementación
> > >
> > > :P5 sketch=/docs/sketches/hardware/ASCIIART.js, width=500, height=500
>
> > :Tab title=P5Code
> >
> > ```js
let W;
let H;
let slider;
let myShader;
function preload() {
    img = loadImage('/vc/docs/sketches/hardware/test.jpeg');
    alpha0 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/0.png')
    alpha1 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/1.png')
    alpha2 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/2.png')
    alpha3 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/3.png')
    alpha4 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/4.png')
    alpha5 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/5.png')
    alpha6 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/6.png')
    alpha7 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/7.png')
    alpha8 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/8.png')
    alpha9 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/9.png')
    alpha10 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/10.png')
    alpha11 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/11.png')
    alpha12 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/12.png')
    alpha13 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/13.png')
    alpha14 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/14.png')
    myShader = loadShader("/vc/docs/sketches/hardware/shader.vert", "/vc/docs/sketches/hardware/ASCIIShader.frag")
}
function setup() {
    W = 500;
    H = 500;
    createCanvas(W, H, WEBGL);
    textureMode(NORMAL);
    noStroke();
    shader(myShader);
    myShader.setUniform("texture", img);
    myShader.setUniform("alpha", alpha);
    myShader.setUniform("alpha0", alpha0);
    myShader.setUniform("alpha1", alpha1);
    myShader.setUniform("alpha2", alpha2);
    myShader.setUniform("alpha3", alpha3);
    myShader.setUniform("alpha4", alpha4);
    myShader.setUniform("alpha5", alpha5);
    myShader.setUniform("alpha6", alpha6);
    myShader.setUniform("alpha7", alpha7);
    myShader.setUniform("alpha8", alpha8);
    myShader.setUniform("alpha9", alpha9);
    myShader.setUniform("alpha10", alpha10);
    myShader.setUniform("alpha11", alpha11);
    myShader.setUniform("alpha12", alpha12);
    myShader.setUniform("alpha13", alpha13);
    myShader.setUniform("alpha14", alpha14);
    slider = createSlider(2, 16, 40);
    slider.position(10, 10);
}
function draw() {
    let posSlider = slider.value();
    myShader.setUniform("resolution", parseInt(500 / posSlider));
    beginShape();
    vertex(-W / 2, -H / 2, 0, 0, 0);
    vertex(W / 2, -H / 2, 0, 1, 0);
    vertex(W / 2, H / 2, 0, 1, 1);
    vertex(-W / 2, H / 2, 0, 0, 1);
    endShape();
}
> > ```
>
> > :Tab title=Fragment Shader
> >
> > ```glsl
precision mediump float;
uniform sampler2D texture;
//uniform sampler2DArray alpha[15];
uniform sampler2D alpha0;
uniform sampler2D alpha1;
uniform sampler2D alpha2;
uniform sampler2D alpha3;
uniform sampler2D alpha4;
uniform sampler2D alpha5;
uniform sampler2D alpha6;
uniform sampler2D alpha7;
uniform sampler2D alpha8;
uniform sampler2D alpha9;
uniform sampler2D alpha10;
uniform sampler2D alpha11;
uniform sampler2D alpha12;
uniform sampler2D alpha13;
uniform sampler2D alpha14;
uniform float resolution;
// interpolated color (same name as in vertex shader)
varying vec4 vVertexColor;
// interpolated texcoord (same name as in vertex shader)
varying vec2 vTexCoord;
void main() {
    vec2 symbolCoord = vTexCoord * resolution;
    vec2 imageCoord = floor(symbolCoord);
    symbolCoord = symbolCoord - imageCoord;
    imageCoord = imageCoord * vec2(1.0) / vec2(resolution);
    // obtener nivel de gris
    vec4 pixelColor = texture2D(texture, imageCoord);
    float mean = (pixelColor.r + pixelColor.g + pixelColor.b)/3.0;
    int index = int(floor(mean * 15.0-0.001));
    if (index == 0){
        gl_FragColor = texture2D(alpha0, symbolCoord);
    } else if (index ==1){
        gl_FragColor = texture2D(alpha1, symbolCoord);
    } else if (index ==2){
        gl_FragColor = texture2D(alpha2, symbolCoord);
    } else if (index ==3){
        gl_FragColor = texture2D(alpha3, symbolCoord);
    } else if (index ==4){
        gl_FragColor = texture2D(alpha4, symbolCoord);
    } else if (index ==5){
        gl_FragColor = texture2D(alpha5, symbolCoord);
    } else if (index ==6){
        gl_FragColor = texture2D(alpha6, symbolCoord);
    } else if (index ==7){
        gl_FragColor = texture2D(alpha7, symbolCoord);
    } else if (index ==8){
        gl_FragColor = texture2D(alpha8, symbolCoord);
    } else if (index ==9){
        gl_FragColor = texture2D(alpha9, symbolCoord);
    } else if (index ==10){
        gl_FragColor = texture2D(alpha10, symbolCoord);
    } else if (index ==11){
        gl_FragColor = texture2D(alpha11, symbolCoord);
    } else if (index ==12){
        gl_FragColor = texture2D(alpha12, symbolCoord);
    } else if (index ==13){
        gl_FragColor = texture2D(alpha13, symbolCoord);
    } else {
        gl_FragColor = texture2D(alpha14, symbolCoord);
    }
}
> > ```



# Color

Para la parte de los colores solo calculamos el promedio rgb del pixel representativo para calcular el color de la letra.

> :Tabs
> > :Tab title=Implementación
> > >
> > > :P5 sketch=/docs/sketches/hardware/ASCIIARTColor.js, width=500, height=500
>
> > :Tab title=P5Code
> >
> > ```js
let W;
let H;
let slider;
let myShader;
function preload() {
    img = loadImage('/vc/docs/sketches/hardware/test.jpeg');
    alpha0 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/0.png')
    alpha1 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/1.png')
    alpha2 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/2.png')
    alpha3 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/3.png')
    alpha4 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/4.png')
    alpha5 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/5.png')
    alpha6 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/6.png')
    alpha7 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/7.png')
    alpha8 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/8.png')
    alpha9 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/9.png')
    alpha10 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/10.png')
    alpha11 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/11.png')
    alpha12 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/12.png')
    alpha13 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/13.png')
    alpha14 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/14.png')
    myShader = loadShader("/vc/docs/sketches/hardware/shader.vert", "/vc/docs/sketches/hardware/ASCIIShaderColor.frag")
}
function setup() {
    W = 500;
    H = 500;
    createCanvas(W, H, WEBGL);
    textureMode(NORMAL);
    noStroke();
    shader(myShader);
    myShader.setUniform("texture", img);
    myShader.setUniform("alpha0", alpha0);
    myShader.setUniform("alpha1", alpha1);
    myShader.setUniform("alpha2", alpha2);
    myShader.setUniform("alpha3", alpha3);
    myShader.setUniform("alpha4", alpha4);
    myShader.setUniform("alpha5", alpha5);
    myShader.setUniform("alpha6", alpha6);
    myShader.setUniform("alpha7", alpha7);
    myShader.setUniform("alpha8", alpha8);
    myShader.setUniform("alpha9", alpha9);
    myShader.setUniform("alpha10", alpha10);
    myShader.setUniform("alpha11", alpha11);
    myShader.setUniform("alpha12", alpha12);
    myShader.setUniform("alpha13", alpha13);
    myShader.setUniform("alpha14", alpha14);
    slider = createSlider(2, 16, 40);
    slider.position(10, 10);
}
function draw() {
    let posSlider = slider.value();
    myShader.setUniform("resolution", parseInt(500 / posSlider));
    beginShape();
    vertex(-W / 2, -H / 2, 0, 0, 0);
    vertex(W / 2, -H / 2, 0, 1, 0);
    vertex(W / 2, H / 2, 0, 1, 1);
    vertex(-W / 2, H / 2, 0, 0, 1);
    endShape();
}
> > ```
>
> > :Tab title=Fragment Shader
> >
> > ```glsl
precision mediump float;
uniform sampler2D texture;
//uniform sampler2DArray alpha[15];
uniform sampler2D alpha0;
uniform sampler2D alpha1;
uniform sampler2D alpha2;
uniform sampler2D alpha3;
uniform sampler2D alpha4;
uniform sampler2D alpha5;
uniform sampler2D alpha6;
uniform sampler2D alpha7;
uniform sampler2D alpha8;
uniform sampler2D alpha9;
uniform sampler2D alpha10;
uniform sampler2D alpha11;
uniform sampler2D alpha12;
uniform sampler2D alpha13;
uniform sampler2D alpha14;
uniform float resolution;
// interpolated color (same name as in vertex shader)
varying vec4 vVertexColor;
// interpolated texcoord (same name as in vertex shader)
varying vec2 vTexCoord;
void main() {
    vec2 symbolCoord = vTexCoord * resolution;
    vec2 imageCoord = floor(symbolCoord);
    symbolCoord = symbolCoord - imageCoord;
    imageCoord = imageCoord * vec2(1.0) / vec2(resolution);
    vec4 pixelColor = texture2D(texture, imageCoord);
    float mean = (pixelColor.r + pixelColor.g + pixelColor.b)/3.0;
    int index = int(floor(mean * 15.0-0.001));
    vec4 res;
    if (index == 0){
        res = texture2D(alpha0, symbolCoord);
    } else if (index ==1){
        res = texture2D(alpha1, symbolCoord);
    } else if (index ==2){
        res = texture2D(alpha2, symbolCoord);
    } else if (index ==3){
        res = texture2D(alpha3, symbolCoord);
    } else if (index ==4){
        res = texture2D(alpha4, symbolCoord);
    } else if (index ==5){
        res = texture2D(alpha5, symbolCoord);
    } else if (index ==6){
        res = texture2D(alpha6, symbolCoord);
    } else if (index ==7){
        res = texture2D(alpha7, symbolCoord);
    } else if (index ==8){
        res = texture2D(alpha8, symbolCoord);
    } else if (index ==9){
        res = texture2D(alpha9, symbolCoord);
    } else if (index ==10){
        res = texture2D(alpha10, symbolCoord);
    } else if (index ==11){
        res = texture2D(alpha11, symbolCoord);
    } else if (index ==12){
        res = texture2D(alpha12, symbolCoord);
    } else if (index ==13){
        res = texture2D(alpha13, symbolCoord);
    } else {
        res = texture2D(alpha14, symbolCoord);
    }
    gl_FragColor = res[0] < 0.1? pixelColor:res;
}
> > ```

# ASCII ART (Video)

Usando los fragment shader previamente creados podemos usarlo para que estos filtros sean visibles en los videos.

> :Tabs
> > :Tab title=Implementación
> > >
> > > :P5 sketch=/docs/sketches/hardware/ASCIIARTVideo.js, width=500, height=500
>
> > :Tab title=Código
> >
> > ```js
let W;
let H;
let slider;
let myShader;
let fingers;
function preload() {
    fingers = createVideo(['/vc/docs/sketches/fingers.mov', '/vc/docs/sketches/fingers.webm']);
    fingers.hide(); // by default video shows up in separate dom
    alpha0 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/0.png')
    alpha1 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/1.png')
    alpha2 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/2.png')
    alpha3 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/3.png')
    alpha4 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/4.png')
    alpha5 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/5.png')
    alpha6 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/6.png')
    alpha7 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/7.png')
    alpha8 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/8.png')
    alpha9 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/9.png')
    alpha10 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/10.png')
    alpha11 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/11.png')
    alpha12 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/12.png')
    alpha13 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/13.png')
    alpha14 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/14.png')
    myShader = loadShader("/vc/docs/sketches/hardware/shader.vert", "/vc/docs/sketches/hardware/ASCIIShaderColor.frag")
}
function setup() {
    W = 500;
    H = 500;
    createCanvas(W, H, WEBGL);
    textureMode(NORMAL);
    noStroke();
    shader(myShader);
    myShader.setUniform("texture", fingers);
    myShader.setUniform("alpha0", alpha0);
    myShader.setUniform("alpha1", alpha1);
    myShader.setUniform("alpha2", alpha2);
    myShader.setUniform("alpha3", alpha3);
    myShader.setUniform("alpha4", alpha4);
    myShader.setUniform("alpha5", alpha5);
    myShader.setUniform("alpha6", alpha6);
    myShader.setUniform("alpha7", alpha7);
    myShader.setUniform("alpha8", alpha8);
    myShader.setUniform("alpha9", alpha9);
    myShader.setUniform("alpha10", alpha10);
    myShader.setUniform("alpha11", alpha11);
    myShader.setUniform("alpha12", alpha12);
    myShader.setUniform("alpha13", alpha13);
    myShader.setUniform("alpha14", alpha14);
    slider = createSlider(2, 16, 40);
    slider.position(10, 10);
    fingers.loop();
}
function draw() {
    let posSlider = slider.value();
    myShader.setUniform("resolution", parseInt(500 / posSlider));
    beginShape();
    vertex(-W / 2, -H / 2, 0, 0, 0);
    vertex(W / 2, -H / 2, 0, 1, 0);
    vertex(W / 2, H / 2, 0, 1, 1);
    vertex(-W / 2, H / 2, 0, 0, 1);
    endShape();
}
> > ```
>
> > :Tab title=Fragment Shader
> >
> > ```glsl
precision mediump float;
uniform sampler2D texture;
//uniform sampler2DArray alpha[15];
uniform sampler2D alpha0;
uniform sampler2D alpha1;
uniform sampler2D alpha2;
uniform sampler2D alpha3;
uniform sampler2D alpha4;
uniform sampler2D alpha5;
uniform sampler2D alpha6;
uniform sampler2D alpha7;
uniform sampler2D alpha8;
uniform sampler2D alpha9;
uniform sampler2D alpha10;
uniform sampler2D alpha11;
uniform sampler2D alpha12;
uniform sampler2D alpha13;
uniform sampler2D alpha14;
uniform float resolution;
// interpolated color (same name as in vertex shader)
varying vec4 vVertexColor;
// interpolated texcoord (same name as in vertex shader)
varying vec2 vTexCoord;
void main() {
    vec2 symbolCoord = vTexCoord * resolution;
    vec2 imageCoord = floor(symbolCoord);
    symbolCoord = symbolCoord - imageCoord;
    imageCoord = imageCoord * vec2(1.0) / vec2(resolution);
    vec4 pixelColor = texture2D(texture, imageCoord);
    float mean = (pixelColor.r + pixelColor.g + pixelColor.b)/3.0;
    int index = int(floor(mean * 15.0-0.001));
    vec4 res;
    if (index == 0){
        res = texture2D(alpha0, symbolCoord);
    } else if (index ==1){
        res = texture2D(alpha1, symbolCoord);
    } else if (index ==2){
        res = texture2D(alpha2, symbolCoord);
    } else if (index ==3){
        res = texture2D(alpha3, symbolCoord);
    } else if (index ==4){
        res = texture2D(alpha4, symbolCoord);
    } else if (index ==5){
        res = texture2D(alpha5, symbolCoord);
    } else if (index ==6){
        res = texture2D(alpha6, symbolCoord);
    } else if (index ==7){
        res = texture2D(alpha7, symbolCoord);
    } else if (index ==8){
        res = texture2D(alpha8, symbolCoord);
    } else if (index ==9){
        res = texture2D(alpha9, symbolCoord);
    } else if (index ==10){
        res = texture2D(alpha10, symbolCoord);
    } else if (index ==11){
        res = texture2D(alpha11, symbolCoord);
    } else if (index ==12){
        res = texture2D(alpha12, symbolCoord);
    } else if (index ==13){
        res = texture2D(alpha13, symbolCoord);
    } else {
        res = texture2D(alpha14, symbolCoord);
    }
    gl_FragColor = res[0] < 0.1? pixelColor:res;
}
> > ```

> :ToCPrevNext