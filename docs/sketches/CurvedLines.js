function setup() {
  createCanvas(600, 600);

  slider = createSlider(1, 5, 1);
  slider.position(12, 24);
}

function draw() {
  background(255);
  let sliderValue = slider.value();

  for (let i = 0; i <= 600; i += (5 - sliderValue + 1) * 10) {
    line(0, i, i + (5 - sliderValue + 1) * 10, 600);
    line(600, i + (5 - sliderValue + 1) * 10, i, 0);
  }
  line(0, 0, 0, 600);
  line(600, 0, 0, 0);
}
