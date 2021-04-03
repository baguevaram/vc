// Lightness

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