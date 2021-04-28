let W;
let H;

let myShader;

function preload() {
    img = loadImage('/vc/docs/sketches/rendering/texture.jpg');
    myShader = loadShader("/vc/docs/sketches/rendering/shader.vert", "/vc/docs/sketches/rendering/texture1.frag")
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
    vertex(-W / 2, -H / 2, 0, 0, 0);
    vertex(W / 2, -H / 2, 0, 1, 0);
    vertex(W / 2, H / 2, 0, 1, 1);
    vertex(-W / 2, H / 2, 0, 0, 1);
    endShape();
}