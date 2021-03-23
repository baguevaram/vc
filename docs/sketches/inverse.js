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