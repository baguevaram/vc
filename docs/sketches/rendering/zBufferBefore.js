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
    translate(0, 0, 20);
    ellipse(0, 0, 20, 30)
    fill(0, 255, 0)
    translate(30, 10,-20);
    ellipse(0,0,120,80)
    fill(0, 0, 255)
    translate(100, 0, -10);
    box(30)
    fill(0, 255, 255)
    translate(-180, 0, 300);
    box(30)
    fill(255, 0, 255)
    translate(-300,-100, -3500);
    box(300)
}