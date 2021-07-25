# Texturas

## Textura Simple

> :Tabs
> > :Tab title=Implementación
> > >
> > > :P5 sketch=/docs/sketches/hardware/simpleTexture.js, width=500, height=500
>
> > :Tab title=Código
> >
> > ```js
let W;
let H;
function preload() {
    img = loadImage('/vc/docs/sketches/hardware/test.jpeg');
}
function setup() {
    W = 500;
    H = 500;
    createCanvas(W, H, WEBGL);
    noLoop();
}
function draw() {
    texture(img);
    textureMode(NORMAL);
    beginShape();
    vertex(-W / 2, -H / 2, 0, 0, 0);
    vertex(W / 2, -H / 2, 0, 1, 0);
    vertex(W / 2, H / 2, 0, 1, 1);
    vertex(-W / 2, H / 2, 0, 0, 1);
    endShape();
}
> > ```

## Perspectiva

Se utiliza el slider que va de 0 a 359 para modificar el frostum del campo de vision vertical
de la cámara en grados.

Se puede observar que a partir de 180 la imagen se invierte.

> :Tabs
> > :Tab title=Implementación
> > >
> > > :P5 sketch=/docs/sketches/hardware/perspectiva.js, width=500, height=500
>
> > :Tab title=Código
> >
> > ```js
let W;
let H;
let slider;
function preload() {
    img = loadImage('/vc/docs/sketches/hardware/test.jpeg');
}
function setup() {
    W = 500;
    H = 500;
    createCanvas(W, H, WEBGL);
    slider = createSlider(0, 359, 60);
    slider.position(10, 10);
}
function draw() {
    clear();
    let grades = slider.value();
    let rads = grades * Math.PI / 180
    perspective(rads, W / H, 0.1, 500)
    texture(img);
    textureMode(NORMAL);
    beginShape();
    vertex(-W / 2, -H / 2, 0, 0, 0);
    vertex(W / 2, -H / 2, 0, 1, 0);
    vertex(W / 2, H / 2, 0, 1, 1);
    vertex(-W / 2, H / 2, 0, 0, 1);
    endShape();
}
> > ```

## Navegación con ratón

> :Tabs
> > :Tab title=Implementación
> > >
> > > :P5 sketch=/docs/sketches/hardware/navegacion.js, lib1="https://cdn.jsdelivr.net/gh/freshfork/p5.EasyCam@1.2.1/p5.easycam.js" ,width=500, height=500
>
> > :Tab title=Código
> >
> > ```js
let W;
let H;
function preload() {
    img = loadImage('/vc/docs/sketches/hardware/test.jpeg');
}
function setup() {
    W = 500;
    H = 500;
    createCanvas(W, H, WEBGL);
    createEasyCam();
}
function draw() {
    clear();
    texture(img);
    textureMode(NORMAL);
    beginShape();
    vertex(-W / 2, -H / 2, 0, 0, 0);
    vertex(W / 2, -H / 2, 0, 1, 0);
    vertex(W / 2, H / 2, 0, 1, 1);
    vertex(-W / 2, H / 2, 0, 0, 1);
    endShape();
}
> > ```

> :ToCPrevNext