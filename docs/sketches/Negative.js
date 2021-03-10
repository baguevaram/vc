let img;
function setup() {
    createCanvas(600, 600);
    img = loadImage('/vc/docs/sketches/mewtwo.png');
}

function draw() {
    image(img, 0, 0,width,height);
    loadPixels();
    pixels = pixels.reverse();

    updatePixels();
}