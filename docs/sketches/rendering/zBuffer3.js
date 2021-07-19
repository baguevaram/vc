let W;
let H;

let myShader;

function preload() {
  /*myShader = loadShader(
    "/vc/docs/sketches/rendering/shader2.vert",
    "/vc/docs/sketches/rendering/zBuffer.frag"
  );*/
}

function setup() {
  W = 500;
  H = 500;
  createCanvas(W, H, WEBGL);
  //shader(myShader);

  sliderX = createSlider(0, 360, 1);
  sliderX.position(12, 24);
  sliderY = createSlider(0, 360, 1);
  sliderY.position(12, 48);
  sliderEnable = createSlider(1, 2, 2);
  sliderEnable.position(12, 72);

 
}

function draw() {
  gl = this._renderer.GL;
  if (sliderEnable.value() === 2) {
    gl.enable(gl.DEPTH_TEST);
  } else {
    gl.disable(gl.DEPTH_TEST);
  }

  let sliderXVal = sliderX.value();
  let sliderYVal = sliderY.value();
  angleMode(DEGREES);

  fill(255, 0, 0);
  translate(-150, 150, 0);
  background(200);
  rotateX(sliderXVal);
  rotateY(sliderYVal);
  box(100);
  fill(0, 0, 255);
  translate(150, -150, 0);
  box(100);
  fill(0, 255, 0);
  translate(150, -150, 0);
  box(100);


 
}
