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
}

function mousePressed() {
    fingers.loop(); // set the video to loop and start playing
}