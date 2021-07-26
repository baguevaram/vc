let img;
let W;
let H;

function preload() {
    img = loadImage('/vc/docs/sketches/1.jpeg');

}

function setup() {
    W = img.width;
    H = img.height;
    createCanvas(W, H);
}

function draw() {
    image(img, 0, 0, W, H);
    loadPixels();
}