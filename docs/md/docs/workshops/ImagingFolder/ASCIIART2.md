# ASCII ART (Color)

El algoritmo es igual al del ASCII ART en escala de grises pero ahora
se calcula también el promedio de R, G y B de cada bloque y se le asigna
ese color a los caracteres. 

## Imagen

> :P5 sketch=/docs/sketches/image.js

## ASCII ART (Color)

> :P5 sketch=/docs/sketches/ASCIIArt2.js

### Código

```js
let img;
let grayPixels = [];
let redPixels = [];
let greenPixels = [];
let bluePixels = [];
let yStep = 8;
let xStep = 8;
let slider;

let W;
let H;

const BASE = "@MNHQ&OC?7>!;:-.";

function preload() {
    // is loaded before setup() and draw() are called
    img = loadImage('/vc/docs/sketches/test.jpeg');
}

function setup() {
    W = img.width;
    H = img.height;
    createCanvas(W, H);
    textAlign(LEFT, TOP);


    image(img, 0, 0, W, H);
    loadPixels();

    for (let i = 0; i < pixels.length; i += 4) {
        let prom = pixels[i] * 0.21 + pixels[i + 1] * 0.71 + pixels[i + 2] * 0.07;
        redPixels.push(pixels[i])
        greenPixels.push(pixels[i + 1])
        bluePixels.push(pixels[i + 2])
        grayPixels.push(prom)
    }

    slider = createSlider(2, 16, 100);
    slider.position(10, 10);

}

function draw() {
    background(255);

    xStep = slider.value();
    yStep = xStep;

    fill(0)
    textSize(xStep + 2);

    for (let i = 0; i < height - (yStep - 1); i += yStep) {
        for (let j = 0; j < width - (xStep - 1); j += xStep) {
            let gray = 0
            let red = 0
            let green = 0
            let blue = 0
            for (let k = 0; k < yStep; k++) {
                for (let l = 0; l < xStep; l++) {
                    gray += grayPixels[(W * (i + k)) + (j + l)]
                    red += redPixels[(W * (i + k)) + (j + l)]
                    green += greenPixels[(W * (i + k)) + (j + l)]
                    blue += bluePixels[(W * (i + k)) + (j + l)]
                }
            }
            gray = Math.round(gray / (yStep * xStep))
            red = Math.round(red / (yStep * xStep))
            green = Math.round(green / (yStep * xStep))
            blue = Math.round(blue / (yStep * xStep))

            fill(red, green, blue)
            let index = Math.round(gray * (BASE.length + 1) / 255);

            if (index >= BASE.length) {
                text(" ", j, i)
            } else {
                text(BASE[index], j, i)
            }

        }
    }

    textSize(20);
    rect(10, 30, 28, 20);
    fill(255);
    text(xStep, 10, 30);
}
```

> :ToCPrevNext