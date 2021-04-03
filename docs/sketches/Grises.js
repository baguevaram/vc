// Average

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
        let prom = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3
        pixels[i] = prom;
        pixels[i + 1] = prom;
        pixels[i + 2] = prom;

    }
    updatePixels();
}