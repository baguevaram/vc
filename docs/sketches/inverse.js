let img;
function setup() {
    createCanvas(600, 600);
    img = loadImage('/vc/docs/sketches/spiderman.jpg');
}

function draw() {
    image(img, 0, 0,width,height);
    loadPixels();
    let tmp = pixels.slice();
    for (let i = 0; i < pixels.length; i+=4) {

        pixels[i] = tmp[pixels.length-i-4];
        pixels[i+1] = tmp[pixels.length-i-3];
        pixels[i+2] = tmp[pixels.length-i-2];
        pixels[i+3] = tmp[pixels.length-i-1];

    }
    updatePixels();
}