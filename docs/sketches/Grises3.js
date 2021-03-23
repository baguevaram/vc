// Luminosity

let img;

let W;
let H;

function preload() {
    img = loadImage('/vc/docs/sketches/test.jpeg');
    // img = loadImage('/vc/docs/sketches/lenna.png');
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
        let prom = pixels[i] * 0.21 + pixels[i + 1] * 0.71 + pixels[i + 2] * 0.07
        pixels[i] = prom;
        pixels[i + 1] = prom;
        pixels[i + 2] = prom;

    }
    updatePixels();
}