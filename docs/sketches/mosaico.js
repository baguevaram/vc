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
    //TODO
    image(img, 0, 0, W, H);
}