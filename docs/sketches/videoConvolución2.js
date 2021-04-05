let fingers;

let kernel = [
    [  1/16,  2/16,  1/16 ],
    [  2/16,  4/16,  2/16 ],
    [  1/16,  2/16,  1/16 ]
];

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
    for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {

            // se establecen las sumas en 0 que usaremos para los valores RGB
            // tanto del mismo pixel como de sus vecinos (ponderados por la matriz)

            let sumR = 0;
            let sumG = 0;
            let sumB = 0;

            // Se recorren los vecinos
            for (let offsetY = -1; offsetY <= 1; offsetY++) {
                for (let offsetX = -1; offsetX <= 1; offsetX++) {

                    // elige un pixel
                    let neighborIndex = ((y + offsetY) * width + (x + offsetX)) * 4;
                    let r = pixels[neighborIndex];
                    let g = pixels[neighborIndex + 1];
                    let b = pixels[neighborIndex + 2];


                    // se aplica la matriz y se añade a la suma teniendo en cuenta el valor de cada offset
                    // para poder acceder a los valores de la matriz de convolución.
                    sumR += kernel[offsetY + 1][offsetX + 1] * r;
                    sumG += kernel[offsetY + 1][offsetX + 1] * g;
                    sumB += kernel[offsetY + 1][offsetX + 1] * b;
                }
            }


            // despues de visitar todos los vecinos
            // se asegura de que los valores estan restringidos en el rango RGB (0-255)
            sumR = constrain(sumR, 0, 255);
            sumG = constrain(sumG, 0, 255);
            sumB = constrain(sumB, 0, 255);

            // cambia el pixel de la imagen nueva.
            let index = (y * width + x) * 4;
            pixels[index] = sumR;
            pixels[index + 1] = sumG;
            pixels[index + 2] = sumB;
            pixels[index + 3] = 255;
        }
    }
    updatePixels();
}

function mousePressed() {
    fingers.loop(); // set the video to loop and start playing
}