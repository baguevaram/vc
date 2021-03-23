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