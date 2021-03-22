let img;
let grayPixels = [];
let result = "";

const BASE = "@MNHQ&OC?7>!;:-.";

function preload() {
    // Ensure the .ttf or .otf font stored in the assets directory
    // is loaded before setup() and draw() are called
    img = loadImage('/vc/docs/sketches/spiderman.jpg');
}

function setup() {
    createCanvas(600, 600);
    textSize(10);
    // textLeading(12);
    textAlign(LEFT, TOP);


    image(img, 0, 0, 600, 600);
    loadPixels();


    for (let i = 0; i < pixels.length; i += 4) {
        let prom = (pixels[i] + pixels[i + 1] + pixels[i + 2] ) / 3;
        grayPixels.push(prom)
    }


}

function draw() {
    background(255);
    fill(0);
    for (let i = 0; i < height-6; i+=7) {
        for (let j = 0; j < width-5; j+=6) {
            let gray = 0
            for (let k = 0; k < 7; k++) {
                for (let l = 0; l < 6; l++) {
                    gray += grayPixels[(600*(i+k))+(j+l)]
                }
            }
            gray = Math.round(gray/(7*6))
            let index = Math.round(gray * (BASE.length + 1) / 255);

            if (index >= BASE.length) {
                text(" ",j,i)
            } else {
                text(BASE[index],j,i)
            }

        }
    }
}