function setup() {
    createCanvas(400, 400);
    noLoop();
}

function draw() {
    background(0);

    for (let i = 50; i < height; i += 50) {
        for (let j = 50; j < width; j += 50) {
            stroke(250)
            strokeWeight(10)
            line(0, i, width, i)
            line(j, 0, j, height)
        }
    }

}