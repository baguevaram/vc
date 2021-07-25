# Mosaico

## Intento 1: Con brillo: (0.299*R + 0.587*G + 0.114*B)

> :Tabs
> > :Tab title=Implementación
> > >
> > > :P5 sketch=/docs/sketches/hardware/Mosaico.js, width=500, height=500
>
> > :Tab title=Código
> >
> > ```js
let W;
let H;
let slider;
let myShader;
function preload() {
    img = loadImage('/vc/docs/sketches/hardware/test.jpeg');
    alpha0 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/img0.jpg')
    alpha1 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/img1.jpg')
    alpha2 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/img2.jpg')
    alpha3 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/img3.jpg')
    alpha4 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/img4.jpg')
    alpha5 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/img5.jpg')
    alpha6 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/img6.jpg')
    myShader = loadShader("/vc/docs/sketches/hardware/shader.vert", "/vc/docs/sketches/hardware/MosaicoShader.frag")
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
uniform sampler2D alpha0;
uniform sampler2D alpha1;
uniform sampler2D alpha2;
uniform sampler2D alpha3;
uniform sampler2D alpha4;
uniform sampler2D alpha5;
uniform sampler2D alpha6;
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
    float mean = 0.299*pixelColor.r + 0.587*pixelColor.g +  0.114*pixelColor.b;
    int index = int(floor(mean * 7.0-0.001));
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
    } else {
        gl_FragColor = texture2D(alpha6, symbolCoord);
    }
}
> > ```


## Intento 2: Cercania al brillo de cada imagen 

> :Tabs
> > :Tab title=Implementación
> > >
> > > :P5 sketch=/docs/sketches/hardware/Mosaico2.js, width=500, height=500
>
> > :Tab title=Código
> >
> > ```js
let W;
let H;
let slider;
let myShader;
function preload() {
    img = loadImage('/vc/docs/sketches/hardware/test.jpeg');
    alpha0 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/img0.jpg')
    alpha1 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/img1.jpg')
    alpha2 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/img2.jpg')
    alpha3 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/img3.jpg')
    alpha4 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/img4.jpg')
    alpha5 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/img5.jpg')
    alpha6 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/img6.jpg')
    myShader = loadShader("/vc/docs/sketches/hardware/shader.vert", "/vc/docs/sketches/hardware/MosaicoShader2.frag")
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
    float mean = (0.299*pixelColor.r + 0.587*pixelColor.g + 0.114*pixelColor.b)*255.0;
    if (mean < 68.0){
        gl_FragColor = texture2D(alpha0, symbolCoord);
    } else if (mean < 124.3){
        gl_FragColor = texture2D(alpha1, symbolCoord);
    } else if (mean < 139.1){
        gl_FragColor = texture2D(alpha2, symbolCoord);
    } else if (mean < 159.5){
        gl_FragColor = texture2D(alpha3, symbolCoord);
    } else if (mean < 172.3){
        gl_FragColor = texture2D(alpha4, symbolCoord);
    } else if (mean < 197.5){
        gl_FragColor = texture2D(alpha5, symbolCoord);
    } else {
        gl_FragColor = texture2D(alpha6, symbolCoord);
    }
}
> > ```

## Intento 3: Cercanía entre colores

> :Tabs
> > :Tab title=Implementación
> > >
> > > :P5 sketch=/docs/sketches/hardware/Mosaico3.js, width=500, height=500
>
> > :Tab title=Código
> >
> > ```js
let W;
let H;
let slider;
let myShader;
function preload() {
    img = loadImage('/vc/docs/sketches/hardware/test.jpeg');
    alpha0 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img0.jpg')
    alpha1 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img1.jpg')
    alpha2 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img2.jpg')
    alpha3 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img3.jpg')
    alpha4 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img4.jpg')
    alpha5 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img5.jpg')
    alpha6 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img6.jpg')
    alpha7 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img7.jpg')
    alpha8 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img8.jpg')
    alpha9 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img9.jpg')
    alpha10 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img10.jpg')
    alpha11 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img11.jpg')
    alpha12 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img12.jpg')
    alpha13 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img13.jpg')
    alpha14 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img14.jpg')
    alpha15 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img15.jpg')
    alpha16 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img16.jpg')
    alpha17 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img17.jpg')
    alpha18 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img18.jpg')
    alpha19 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img19.jpg')
    alpha20= loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img20.jpg')
    alpha21 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img21.jpg')
    alpha22 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img22.jpg')
    alpha23 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img23.jpg')
    alpha24 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img24.jpg')
    alpha26 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img26.jpg')
    alpha27 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img27.jpg')
    alpha28 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img28.jpg')
    alpha29 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img29.jpg')
    alpha30 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img30.jpg')
    alpha31 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img31.jpg')
    myShader = loadShader("/vc/docs/sketches/hardware/shader.vert", "/vc/docs/sketches/hardware/MosaicoShader3.frag")
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
    myShader.setUniform("alpha15", alpha15);
    myShader.setUniform("alpha16", alpha16);
    myShader.setUniform("alpha17", alpha17);
    myShader.setUniform("alpha18", alpha18);
    myShader.setUniform("alpha19", alpha19);
    myShader.setUniform("alpha20", alpha20);
    myShader.setUniform("alpha21", alpha21);
    myShader.setUniform("alpha22", alpha22);
    myShader.setUniform("alpha23", alpha23);
    myShader.setUniform("alpha24", alpha24);
    myShader.setUniform("alpha26", alpha26);
    myShader.setUniform("alpha27", alpha27);
    myShader.setUniform("alpha28", alpha28);
    myShader.setUniform("alpha29", alpha29);
    myShader.setUniform("alpha30", alpha30);
    myShader.setUniform("alpha31", alpha31);
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
uniform sampler2D alpha15;
uniform sampler2D alpha16;
uniform sampler2D alpha17;
uniform sampler2D alpha18;
uniform sampler2D alpha19;
uniform sampler2D alpha20;
uniform sampler2D alpha21;
uniform sampler2D alpha22;
uniform sampler2D alpha23;
uniform sampler2D alpha24;
uniform sampler2D alpha26;
uniform sampler2D alpha27;
uniform sampler2D alpha28;
uniform sampler2D alpha29;
uniform sampler2D alpha30;
uniform sampler2D alpha31;
uniform float resolution;
// interpolated color (same name as in vertex shader)
varying vec4 vVertexColor;
// interpolated texcoord (same name as in vertex shader)
varying vec2 vTexCoord;
float distancia(in vec4 pixel, in vec3 rgb){
    return sqrt(pow(pixel.r-rgb.r, 2.0)+pow(pixel.g-rgb.g, 2.0)+pow(pixel.b-rgb.b, 2.0));
}
void main() {
    vec2 symbolCoord = vTexCoord * resolution;
    vec2 imageCoord = floor(symbolCoord);
    symbolCoord = symbolCoord - imageCoord;
    imageCoord = imageCoord * vec2(1.0) / vec2(resolution);
    // obtener nivel de gris
    vec4 pixelColor = texture2D(texture, imageCoord)*255.0;
    float minDis = 1000.0;
    float dis = distancia(pixelColor, vec3 (35, 31, 32));
    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha0, symbolCoord);
    }
    dis = distancia(pixelColor, vec3 (85, 59, 40));
    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha1, symbolCoord);
    }
    dis = distancia(pixelColor, vec3 (148, 143, 144));
    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha2, symbolCoord);
    }
    dis = distancia(pixelColor, vec3 (194, 159, 156));
    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha3, symbolCoord);
    }
    dis = distancia(pixelColor, vec3 (160, 134, 116));
    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha4, symbolCoord);
    }
    dis = distancia(pixelColor, vec3 (137, 129, 122));
    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha5, symbolCoord);
    }
    dis = distancia(pixelColor, vec3 (199, 199, 193));
    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha6, symbolCoord);
    }
    dis = distancia(pixelColor, vec3 (169, 165, 159));
    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha7, symbolCoord);
    }
    dis = distancia(pixelColor, vec3 (88, 77, 70));
    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha8, symbolCoord);
    }
    dis = distancia(pixelColor, vec3 (137, 105, 85));
    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha9, symbolCoord);
    }
    dis = distancia(pixelColor, vec3 (56, 56, 54));
    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha10, symbolCoord);
    }
    dis = distancia(pixelColor, vec3 (176, 176, 182));
    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha11, symbolCoord);
    }
    dis = distancia(pixelColor, vec3 (112, 111, 112));
    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha12, symbolCoord);
    }
    dis = distancia(pixelColor, vec3 (119, 90, 71));
    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha13, symbolCoord);
    }
    dis = distancia(pixelColor, vec3 (97, 94, 94));
    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha14, symbolCoord);
    }
    dis = distancia(pixelColor, vec3 (246, 245, 242));
    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha15, symbolCoord);
    }
    dis = distancia(pixelColor, vec3 (188, 188, 172));
    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha16, symbolCoord);
    }
    dis = distancia(pixelColor, vec3 (73, 59, 56));
    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha17, symbolCoord);
    }
    dis = distancia(pixelColor, vec3 (118, 108, 96));
    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha18, symbolCoord);
    }
    dis = distancia(pixelColor, vec3 (62, 140, 185));
    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha19, symbolCoord);
    }
    dis = distancia(pixelColor, vec3 (194, 100, 111));
    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha20, symbolCoord);
    }
    dis = distancia(pixelColor, vec3 (224, 228, 230));
    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha21, symbolCoord);
    }
    dis = distancia(pixelColor, vec3 (44, 101, 143));
    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha22, symbolCoord);
    }
    dis = distancia(pixelColor, vec3 (109, 140, 181));
    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha23, symbolCoord);
    }
    dis = distancia(pixelColor, vec3 (221, 218, 214));
    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha24, symbolCoord);
    }
    dis = distancia(pixelColor, vec3 (84, 44, 36));
    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha26, symbolCoord);
    }
    dis = distancia(pixelColor, vec3 (227, 228, 219));
    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha27, symbolCoord);
    }
    dis = distancia(pixelColor, vec3 (156, 188, 196));
    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha28, symbolCoord);
    }
    dis = distancia(pixelColor, vec3 (48, 44, 60));
    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha29, symbolCoord);
    }
    dis = distancia(pixelColor, vec3 (132, 156, 164));
    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha30, symbolCoord);
    }
    dis = distancia(pixelColor, vec3 (168, 191, 196));
    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha31, symbolCoord);
    }
}
> > ```

> :ToCPrevNext