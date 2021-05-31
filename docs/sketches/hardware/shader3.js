let W;
let H;

let myShader;

function preload() {
    img = loadImage('/vc/docs/sketches/hardware/test.jpeg');
    myShader = loadShader("/vc/docs/sketches/hardware/shader.vert", "/vc/docs/sketches/hardware/texture3.frag")
}

function setup() {
    W = 500;
    H = 500;
    createCanvas(W, H, WEBGL);
    textureMode(NORMAL);
    shader(myShader);
    myShader.setUniform("texture", img)

    noLoop();
}

function draw() {
    beginShape();
    fill(150);
    vertex(-W / 2, -H / 2, 0, 0, 0);
    fill(255,0,0);
    vertex(W / 2, -H / 2, 0, 1, 0);
    fill(0,255,0);
    vertex(W / 2, H / 2, 0, 1, 1);
    fill(0,0,255);
    vertex(-W / 2, H / 2, 0, 0, 1);
    endShape();
}