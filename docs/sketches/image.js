let img;
function setup() {
    createCanvas(600, 600);
    img = loadImage('/vc/docs/sketches/spiderman.jpg');
}

function draw() {
    image(img, 0, 0,width,height);
}