let img;
function setup() {
    createCanvas(600, 600);
    img = loadImage('/vc/docs/sketches/spiderman.jpg');
}

function draw() {
    image(img, 0, 0,width,height);
    loadPixels();
    for (let i = 0; i < pixels.length; i+=4) {

        pixels[i] = 255-pixels[i] ;
        pixels[i+1] = 255-pixels[i+1] ;
        pixels[i+2] = 255-pixels[i+2];

    }
    updatePixels();
}