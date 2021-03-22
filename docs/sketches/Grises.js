let img;

function setup() {
    createCanvas(600, 600);
    img = loadImage('/vc/docs/sketches/spiderman.jpg');
}

function draw() {
    image(img, 0, 0, 600, 600);
    loadPixels();
    for (let i = 0; i < pixels.length; i += 4) {
        let prom = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3
        pixels[i] = prom;
        pixels[i + 1] = prom;
        pixels[i + 2] = prom;

    }
    updatePixels();
}