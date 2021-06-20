let W;
let H;

let myShader;

function preload() {
    // img = loadImage('/vc/docs/sketches/rendering/texture.jpg');
    myShader = loadShader("/vc/docs/sketches/rendering/shader.vert", "/vc/docs/sketches/rendering/zBuffer.frag")
}

function setup() {
    W = 500;
    H = 500;
    createCanvas(W, H, WEBGL);
    textureMode(NORMAL);
    shader(myShader);
    // myShader.setUniform("texture", img)

    noLoop();
}

function draw() {
    beginShape();
    fill(255,0,0);
    vertex(-50, -20, 10);
    vertex(50, -20, 10);
    vertex(50, 20, 10);
    vertex(-50, 20, 10);
    endShape();
    beginShape();
    fill(0,255,0);
    vertex(-200, -100, -10);
    vertex(-100, -100, -10);
    vertex(-100, -20, -10);
    vertex(-200, -20, -10);
    endShape();
    beginShape();
    fill(0,0,255);
    vertex(200, 100, 50);
    vertex(100, 100, 50);
    vertex(100, 20, 50);
    vertex(200, 20, 50);
    endShape();
}