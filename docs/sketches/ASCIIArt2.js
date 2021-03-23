let img;
let grayPixels = [];
let result = "";
let yStep = 4;
let xStep = 3;

const BASE = "@MNHQ&OC?7>!;:-.";

function preload() {
    // is loaded before setup() and draw() are called
    img = loadImage('/vc/docs/sketches/spiderman.jpg');
}

function setup() {
    createCanvas(600, 600);
    textSize(5);
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
    for (let i = 0; i < height-(yStep-1); i+=yStep) {
        for (let j = 0; j < width-(xStep-1); j+=xStep) {
            let gray = 0
            for (let k = 0; k < yStep; k++) {
                for (let l = 0; l < xStep; l++) {
                    gray += grayPixels[(600*(i+k))+(j+l)]
                }
            }
            gray = Math.round(gray/(yStep*xStep))
            let index = Math.round(gray * (BASE.length + 1) / 255);

            if (index >= BASE.length) {
                text(" ",j,i)
            } else {
                text(BASE[index],j,i)
            }

        }
    }
}