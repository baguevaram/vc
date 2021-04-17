// Luminosity

let img;
let slider;

let weights = [[0.2989, 0.5870, 0.1140], [0.2120, 0.7010, 0.0870], [0.2126, 0.7152, 0.0722], [0.2627, 0.6780, 0.0593]]

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

    slider = createSlider(1, 4, 40);
    slider.position(10, 10);
}

function draw() {

    posSlider = slider.value();

    image(img, 0, 0, W, H);
    loadPixels();
    originalPixels = pixels.slice()
    for (let i = 0; i < pixels.length; i += 4) {
        let prom = originalPixels[i] * weights[posSlider - 1][0] + originalPixels[i + 1] * weights[posSlider - 1][1] + originalPixels[i + 2] * weights[posSlider - 1][2]
        pixels[i] = prom;
        pixels[i + 1] = prom;
        pixels[i + 2] = prom;
    }
    updatePixels();

    textSize(20);
    fill(255, 0, 0);
    text(weights[posSlider - 1][0], 7, 35);
    fill(0, 255, 0);
    text(weights[posSlider - 1][1], 7, 55);
    fill(0, 0, 255);
    text(weights[posSlider - 1][2], 7, 75);
}