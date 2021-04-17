# Modificaciones Simples

Lo más importante en estas modificaciones es el arreglo de pixeles llamado "pixels".
El arreglo pixels contiene 1 pixel cada 4 posiciones de esta manera:

[r1,g1,b1,a1,r2,g2,b2,a2, ... , rn,gn,bn,an]

## Imagen Invertida

Simplemente el último pixel se pone de primeras, el penúltimo de segundas y así sucesivamente

> :P5 sketch=/docs/sketches/inverse.js

### Código

```js
let img;
let W;
let H;

function preload() {
    img = loadImage('/vc/docs/sketches/test.jpeg');

}

function setup() {
    W = img.width;
    H = img.height;
    createCanvas(W, H);
}

function draw() {
    image(img, 0, 0, W, H);
    loadPixels();
    let tmp = pixels.slice();
    for (let i = 0; i < pixels.length; i += 4) {

        pixels[i] = tmp[pixels.length - i - 4];
        pixels[i + 1] = tmp[pixels.length - i - 3];
        pixels[i + 2] = tmp[pixels.length - i - 2];
        pixels[i + 3] = tmp[pixels.length - i - 1];

    }
    updatePixels();
}
```

## Imagen Negativa

A cada componente (R,G y B) de cada pixel se le asigna el valor de 255 menos el valor original 

> :P5 sketch=/docs/sketches/Negative.js

### Código

```js

let img;

let W;
let H;

function preload() {
    img = loadImage('/vc/docs/sketches/test.jpeg');

}

function setup() {
    W = img.width;
    H = img.height;
    createCanvas(W, H);
}

function draw() {
    image(img, 0, 0, W, H);
    loadPixels();
    for (let i = 0; i < pixels.length; i += 4) {

        pixels[i] = 255 - pixels[i];
        pixels[i + 1] = 255 - pixels[i + 1];
        pixels[i + 2] = 255 - pixels[i + 2];

    }
    updatePixels();
}

```

## Imagen en escala de grises

### Average Method

Se saca el promedio de los componentes de cada pixel y ese promedio se le asigna a los 3 componentes del pixel

> :P5 sketch=/docs/sketches/Grises.js

#### Código

```js
let img;

let W;
let H;

function preload() {
    img = loadImage('/vc/docs/sketches/test.jpeg');
}

function setup() {
    W = img.width;
    H = img.height;
    createCanvas(W, H);
    noLoop();
}

function draw() {
    image(img, 0, 0, W, H);
    loadPixels();
    for (let i = 0; i < pixels.length; i += 4) {
        let prom = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3
        pixels[i] = prom;
        pixels[i + 1] = prom;
        pixels[i + 2] = prom;

    }
    updatePixels();
}
```

### Lightness Method

Se toma el componente máximo y mínimo de cada pixel, se suman, se divide en 2 y ese valor se le asigna a los 3 componentes del pixel

> :P5 sketch=/docs/sketches/Grises2.js

#### Código

```js
let img;

let W;
let H;

function preload() {
    img = loadImage('/vc/docs/sketches/test.jpeg');
}

function setup() {
    W = img.width;
    H = img.height;
    createCanvas(W, H);
    noLoop();
}

function draw() {
    image(img, 0, 0, W, H);
    loadPixels();
    for (let i = 0; i < pixels.length; i += 4) {
        let gray = (Math.max(pixels[i], pixels[i + 1], pixels[i + 2]) + Math.min(pixels[i], pixels[i + 1], pixels[i + 2])) / 2
        pixels[i] = gray;
        pixels[i + 1] = gray;
        pixels[i + 2] = gray;
    }
    updatePixels();
}
```

### Luma Method

Se hace un promedio ponderado entre los 3 componentes de cada pixel y se le asigna ese valor a cada componente

> :P5 sketch=/docs/sketches/Grises3.js

#### Código

```js
let img;
let slider;

let weights = [[0.2989, 0.5870, 0.1140], [0.2120, 0.7010, 0.0870], [0.2126, 0.7152, 0.0722], [0.2627, 0.6780, 0.0593]]

let W;
let H;

function preload() {
    img = loadImage('/vc/docs/sketches/test.jpeg');
}

function setup() {
    W = img.width;
    H = img.height;
    createCanvas(W, H);

    slider = createSlider(1, 4, 40);
    slider.position(10, 10);
}

function draw() {

    posSlider = slider.value();

    image(img, 0, 0, W, H);
    loadPixels();
    originalPixels = pixels.slice()
    for (let i = 0; i < pixels.length; i += 4) {
        let prom = originalPixels[i] * weights[posSlider - 1][0] + originalPixels[i + 1] * weights[posSlider - 1][1] + originalPixels[i + 2] * weights[posSlider - 1][2]
        pixels[i] = prom;
        pixels[i + 1] = prom;
        pixels[i + 2] = prom;
    }
    updatePixels();

    textSize(20);
    fill(255, 0, 0);
    text(weights[posSlider - 1][0], 7, 35);
    fill(0, 255, 0);
    text(weights[posSlider - 1][1], 7, 55);
    fill(0, 0, 255);
    text(weights[posSlider - 1][2], 7, 75);
}
```

## Referencias

[Escala de grises](https://en.wikipedia.org/wiki/HSL_and_HSV#Disadvantages)

> :ToCPrevNext