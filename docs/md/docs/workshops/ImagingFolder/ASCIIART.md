# ASCII ART

1. A cada carácter ASCII se le puede asignar un aproximado de densidad en escala de grises; 
el signo @ obviamente es visualmente más oscuro que el signo +, por ejemplo.

2. Se divide la imagen en bloques de "super pixeles". Cada bloque se convertirá en uno de los 
caracteres de la salida.

3. Calcular el promedio de la escala de grises valor de cada píxel de bloque.
   
4. Para cada bloque, seleccionar un carácter cuya densidad de escala de grises (del paso 1) sea 
una buena aproximación del bloque del paso 3

## Imagen

> :P5 sketch=/docs/sketches/Grises2.js

## ASCII ART

> :P5 sketch=/docs/sketches/ASCIIArt.js

### Código

```js
let img;
let grayPixels = [];
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
            for (let k = 0; k < yStep; k++) {
                for (let l = 0; l < xStep; l++) {
                    gray += grayPixels[(W * (i + k)) + (j + l)]
                }
            }
            gray = Math.round(gray / (yStep * xStep))
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

# Referencias

[Código](https://programmerclick.com/article/32561446342/#ASCii_17)

[Explicación](https://www.iteramos.com/pregunta/42887/como-hacer-arte-ascii-conversion-de-imagenes-algoritmos-de-trabajo)

> :ToCPrevNext