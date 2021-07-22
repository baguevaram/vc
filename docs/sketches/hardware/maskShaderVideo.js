let W;
let H;

let slider;

let masks = [
    // Identity
    [0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0],
    // Edges
    [-1.0, -1.0, -1.0, -1.0, 8.0, -1.0, -1.0, -1.0, -1.0],
    // Blur
    [1.0 / 16.0, 2.0 / 16.0, 1 / 16, 2.0 / 16.0, 4.0 / 16.0, 2 / 16, 1.0 / 16.0, 2.0 / 16.0, 1 / 16],
    // sharpen
    [0.0, -1.0, 0.0, -1.0, 5.0, -1.0, 0.0, -1.0, 0.0]
]

let fingers;

let myShader;

function preload() {
    fingers = createVideo(['/vc/docs/sketches/fingers.mov', '/vc/docs/sketches/fingers.webm']);
    fingers.hide(); // by default video shows up in separate dom

    myShader = loadShader("/vc/docs/sketches/hardware/shader.vert", "/vc/docs/sketches/hardware/mask1.frag")

}

function setup() {
    W = 500;
    H = 500;
    createCanvas(W, H, WEBGL);
    textureMode(NORMAL);
    shader(myShader);
    myShader.setUniform("texture", fingers)
    myShader.setUniform("offset", [1 / fingers.width, 1 / fingers.height])

    slider = createSlider(0, 3, 40);
    slider.position(10, 10);
    fingers.loop();
}

function draw() {
    let posSlider = slider.value();

    myShader.setUniform("mask", masks[posSlider])

    beginShape();
    fill(150);
    vertex(-W / 2, -H / 2, 0, 0, 0);
    vertex(W / 2, -H / 2, 0, 1, 0);
    vertex(W / 2, H / 2, 0, 1, 1);
    vertex(-W / 2, H / 2, 0, 0, 1);
    endShape();
}