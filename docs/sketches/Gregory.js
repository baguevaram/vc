function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(255);

  let c = 0;
  for (let i = 0, y = 0; i < height; i += 20, y++) {
    if (y % 4 == 0) {
      c = -2;
    } else if (y % 2 == 0) {
      c = 10;
    } else {
      c = 5;
    }

    for (let j = 0, x = 0; j < width; j += 20, x++) {
      if (x % 2 == 0) {
        fill(0);
        rect(j + c, i, 20, 20);
      } else {
        fill(255);
        rect(j + c, i, 20, 20);
      }
    }
  }
}
