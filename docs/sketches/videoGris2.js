let fingers;

function preload() {
    // specify multiple formats for different browsers
    fingers = createVideo(['/vc/docs/sketches/fingers.mov', '/vc/docs/sketches/fingers.webm']);
    fingers.hide(); // by default video shows up in separate dom
    // element. hide it and draw it to the canvas
    // instead
}

function setup() {
    createCanvas(320, 240);
}

function draw() {
    image(fingers, 10, 10); // draw the video frame to canvas
    loadPixels();
    for (let i = 0; i < pixels.length; i += 4) {
        let gray = (Math.max(pixels[i], pixels[i + 1], pixels[i + 2]) + Math.min(pixels[i], pixels[i + 1], pixels[i + 2])) / 2
        pixels[i] = gray;
        pixels[i + 1] = gray;
        pixels[i + 2] = gray;
    }
    updatePixels();
}

function mousePressed() {
    fingers.loop(); // set the video to loop and start playing
}