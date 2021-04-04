function setup() {
  createCanvas(800, 400);
  angleMode(DEGREES);
}

function draw() {
  background("white");
  noStroke();
  fill("gray");
  translate(width / 4, height / 2);

  push();
  fill("orange");
  ellipse(0, 0, 60, 60);
  pop();

  for (let i = 0; i < 6; ++i) {
    push();
    rotate((360 / 6) * i);
    translate(width / 6, 0);
    ellipse(0, 0, 100, 100);
    pop();
  }

  noStroke();
  fill("gray");
  translate(width / 2, height / 16 - 20);
  push();
  fill("orange");
  ellipse(0, 0, 60, 60);
  pop();

  for (let i = 0; i < 6; ++i) {
    push();
    rotate((360 / 6) * i);
    translate(width / 12, 0);
    ellipse(0, 0, 50, 50);
    pop();
  }
}
