let W;
let H;

// let myShader;

let x ;

function preload() {
    // myShader = loadShader("/vc/docs/sketches/rendering/shader.vert", "/vc/docs/sketches/rendering/zBuffer.frag")
}

function setup() {
    W = 500;
    H = 500;
    createCanvas(W, H, WEBGL);
    // shader(myShader);
}

function draw() {
    fill(255, 0, 0)
    translate(-150, 150, 0);
    box(100)
    fill(0, 0, 255)
    translate(150, -150, 0);
    box(100)
    fill(0, 255, 0)
    translate(150, -150, 0);
    box(100)
}