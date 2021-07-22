let W;
let H;

let slider;

let weights = [[0.2989, 0.5870, 0.1140], [0.2120, 0.7010, 0.0870], [0.2126, 0.7152, 0.0722], [0.2627, 0.6780, 0.0593]]

let fingers;

let myShader;

function preload() {
    fingers = createVideo(['/vc/docs/sketches/fingers.mov', '/vc/docs/sketches/fingers.webm']);
    fingers.hide(); // by default video shows up in separate dom

    myShader = loadShader("/vc/docs/sketches/hardware/shader.vert", "/vc/docs/sketches/hardware/textureLUMA.frag")
}

function setup() {
    W = 500;
    H = 500;
    createCanvas(W, H, WEBGL);
    textureMode(NORMAL);
    shader(myShader);

    myShader.setUniform("texture", fingers)


    slider = createSlider(0, 3, 40);
    slider.position(10, 10);


    fingers.loop();
    // noLoop();
}

function draw() {
    let posSlider = slider.value();

    myShader.setUniform("weights", weights[posSlider])

    beginShape();
    fill(150);
    vertex(-W / 2, -H / 2, 0, 0, 0);
    vertex(W / 2, -H / 2, 0, 1, 0);
    vertex(W / 2, H / 2, 0, 1, 1);
    vertex(-W / 2, H / 2, 0, 0, 1);
    endShape();
}