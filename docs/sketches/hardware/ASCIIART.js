let W;
let H;

let myShader;

function preload() {
    img = loadImage('/vc/docs/sketches/hardware/test.jpeg');
    myShader = loadShader("/vc/docs/sketches/hardware/shader.vert", "/vc/docs/sketches/hardware/ASCIIShader.frag")
}

function setup() {
    W = 500;
    H = 500;
    createCanvas(W, H, WEBGL);
    textureMode(NORMAL);
    shader(myShader);
    myShader.setUniform("texture", img)
    myShader.setUniform("offset", [1 / img.width, 1 / img.height])

    noLoop();
}

function draw() {
    beginShape();
    fill(150);
    vertex(-W / 2, -H / 2, 0, 0, 0);
    vertex(W / 2, -H / 2, 0, 1, 0);
    vertex(W / 2, H / 2, 0, 1, 1);
    vertex(-W / 2, H / 2, 0, 0, 1);
    endShape();
}