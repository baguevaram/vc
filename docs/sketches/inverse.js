// let img;
//
// function setup () {
//     // createCanvas(600, 600);
//     img = createImg("/vc/docs/sketches/mewtwo.png");
//
// }
//
// function draw  () {
//
//     image(img, 0, 0);
//     loadPixels();
//     for (let i = 0; i < pixels.length; i++) {
//
//         let r = red(pixels[i]);
//         let g = green(pixels[i]);
//         let b = blue(pixels[i]);
//         pixels[pixels.length-i] = color(g, b, r);
//
//     }
//     updatePixels();
// }

let img;
function setup() {
    createCanvas(600, 600);
    img = loadImage('/vc/docs/sketches/mewtwo.png');
}

function draw() {
    image(img, 0, 0,width,height);
    loadPixels();
    pixels = pixels.reverse();
    updatePixels();
}