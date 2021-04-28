let W;
let H;

function preload() {
    img = loadImage('/vc/docs/sketches/rendering/texture.jpg');
}

function setup() {
    W = 500;
    H = 500;
    createCanvas(W, H, WEBGL);
    createEasyCam();
}

function draw() {
    clear();
    texture(img);
    textureMode(NORMAL);
    beginShape();
    vertex(-W / 2, -H / 2, 0, 0, 0);
    vertex(W / 2, -H / 2, 0, 1, 0);
    vertex(W / 2, H / 2, 0, 1, 1);
    vertex(-W / 2, H / 2, 0, 0, 1);
    endShape();
}