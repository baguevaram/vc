let W;
let H;

let slider;

let myShader;

let alpha = []
let names = "@MNHQ&OC?7>!;-.";

function preload() {
    img = loadImage('/vc/docs/sketches/hardware/test.jpeg');

    // for (let i = 0; i < 15; i++) {
    //     alpha[i] = loadImage('/vc/docs/sketches/hardware/ASCIIImages/'+ String(i) +'.png');
    // }

    alpha0 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/0.png')
    alpha1 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/1.png')
    alpha2 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/2.png')
    alpha3 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/3.png')
    alpha4 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/4.png')
    alpha5 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/5.png')
    alpha6 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/6.png')
    alpha7 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/7.png')
    alpha8 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/8.png')
    alpha9 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/9.png')
    alpha10 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/10.png')
    alpha11 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/11.png')
    alpha12 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/12.png')
    alpha13 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/13.png')
    alpha14 = loadImage('/vc/docs/sketches/hardware/ASCIIImages/14.png')

    myShader = loadShader("/vc/docs/sketches/hardware/shader.vert", "/vc/docs/sketches/hardware/ASCIIShader.frag")
}

function setup() {
    W = 500;
    H = 500;
    createCanvas(W, H, WEBGL);
    textureMode(NORMAL);
    noStroke();
    shader(myShader);
    myShader.setUniform("texture", img);
    myShader.setUniform("alpha", alpha);
    myShader.setUniform("alpha0", alpha0);
    myShader.setUniform("alpha1", alpha1);
    myShader.setUniform("alpha2", alpha2);
    myShader.setUniform("alpha3", alpha3);
    myShader.setUniform("alpha4", alpha4);
    myShader.setUniform("alpha5", alpha5);
    myShader.setUniform("alpha6", alpha6);
    myShader.setUniform("alpha7", alpha7);
    myShader.setUniform("alpha8", alpha8);
    myShader.setUniform("alpha9", alpha9);
    myShader.setUniform("alpha10", alpha10);
    myShader.setUniform("alpha11", alpha11);
    myShader.setUniform("alpha12", alpha12);
    myShader.setUniform("alpha13", alpha13);
    myShader.setUniform("alpha14", alpha14);

    slider = createSlider(2, 16, 40);
    slider.position(10, 10);
}

function draw() {

    let posSlider = slider.value();
    myShader.setUniform("resolution", parseInt(500 / posSlider));

    beginShape();
    fill(150);
    vertex(-W / 2, -H / 2, 0, 0, 0);
    vertex(W / 2, -H / 2, 0, 1, 0);
    vertex(W / 2, H / 2, 0, 1, 1);
    vertex(-W / 2, H / 2, 0, 0, 1);
    endShape();
}