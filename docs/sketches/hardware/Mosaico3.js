let W;
let H;

let slider;

let myShader;


function preload() {
    img = loadImage('/vc/docs/sketches/hardware/test.jpeg');

    alpha0 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img0.jpg')
    alpha1 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img1.jpg')
    alpha2 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img2.jpg')
    alpha3 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img3.jpg')
    alpha4 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img4.jpg')
    alpha5 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img5.jpg')
    alpha6 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img6.jpg')
    alpha7 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img7.jpg')
    alpha8 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img8.jpg')
    alpha9 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img9.jpg')
    alpha10 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img10.jpg')
    alpha11 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img11.jpg')
    alpha12 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img12.jpg')
    alpha13 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img13.jpg')
    alpha14 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img14.jpg')
    alpha15 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img15.jpg')
    alpha16 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img16.jpg')
    alpha17 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img17.jpg')
    alpha18 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img18.jpg')
    alpha19 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img19.jpg')
    alpha20= loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img20.jpg')
    alpha21 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img21.jpg')
    alpha22 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img22.jpg')
    alpha23 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img23.jpg')
    alpha24 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img24.jpg')
    // alpha25 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img25.jpg')
    alpha26 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img26.jpg')
    alpha27 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img27.jpg')
    alpha28 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img28.jpg')
    alpha29 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img29.jpg')
    alpha30 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img30.jpg')
    alpha31 = loadImage('/vc/docs/sketches/hardware/ImagenesMosaico/Intento3/img31.jpg')

    myShader = loadShader("/vc/docs/sketches/hardware/shader.vert", "/vc/docs/sketches/hardware/MosaicoShader3.frag")
}

function setup() {
    W = 500;
    H = 500;
    createCanvas(W, H, WEBGL);
    textureMode(NORMAL);
    noStroke();
    shader(myShader);
    myShader.setUniform("texture", img);
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
    myShader.setUniform("alpha15", alpha15);
    myShader.setUniform("alpha16", alpha16);
    myShader.setUniform("alpha17", alpha17);
    myShader.setUniform("alpha18", alpha18);
    myShader.setUniform("alpha19", alpha19);
    myShader.setUniform("alpha20", alpha20);
    myShader.setUniform("alpha21", alpha21);
    myShader.setUniform("alpha22", alpha22);
    myShader.setUniform("alpha23", alpha23);
    myShader.setUniform("alpha24", alpha24);
    // myShader.setUniform("alpha25", alpha25);
    myShader.setUniform("alpha26", alpha26);
    myShader.setUniform("alpha27", alpha27);
    myShader.setUniform("alpha28", alpha28);
    myShader.setUniform("alpha29", alpha29);
    myShader.setUniform("alpha30", alpha30);
    myShader.setUniform("alpha31", alpha31);

    slider = createSlider(2, 16, 40);
    slider.position(10, 10);
}

function draw() {

    let posSlider = slider.value();
    myShader.setUniform("resolution", parseInt(500 / posSlider));

    beginShape();
    vertex(-W / 2, -H / 2, 0, 0, 0);
    vertex(W / 2, -H / 2, 0, 1, 0);
    vertex(W / 2, H / 2, 0, 1, 1);
    vertex(-W / 2, H / 2, 0, 0, 1);
    endShape();
}