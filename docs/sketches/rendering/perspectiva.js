let W;
let H;
let slider;

function preload() {
    img = loadImage('/vc/docs/sketches/rendering/texture.jpg');
}

function setup() {
    W = 500;
    H = 500;
    createCanvas(W, H, WEBGL);

    slider = createSlider(0, 359, 60);
    slider.position(10, 10);
}

function draw() {

    clear();

    let grades = slider.value();
    let rads = grades * Math.PI / 180

    perspective(rads, W / H, 0.1, 500)

    texture(img);
    textureMode(NORMAL);
    beginShape();
    vertex(-W / 2, -H / 2, 0, 0, 0);
    vertex(W / 2, -H / 2, 0, 1, 0);
    vertex(W / 2, H / 2, 0, 1, 1);
    vertex(-W / 2, H / 2, 0, 0, 1);
    endShape();

}