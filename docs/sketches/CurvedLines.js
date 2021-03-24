function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);

  for (let i = 0; i <= 600; i += 50) {
    line(0, i, i + 50, 600);
    line(600, i + 50, i, 0);
  }
}
