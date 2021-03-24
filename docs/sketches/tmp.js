let img;
let grayPixels = [];
let redPixels = [];
let greenPixels = [];
let bluePixels = [];
let yStep = 8;
let xStep = 7;

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
    textSize(11);
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
    noLoop();
}

function draw() {
    background(255);
    fill(0);
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
}