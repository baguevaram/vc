let img;

let edgeKernel = [
    [  -1,  -1,  -1 ],
    [  -1,   8,  -1 ],
    [  -1,  -1,  -1 ]
  ];


function preload() {
    img = loadImage('/vc/docs/sketches/test.jpeg');
}

function setup() {
    img.resize(windowWidth, 0);
    createCanvas(img.width, img.height);
    noLoop();

    img = applyFilter(img, edgeKernel);
    
  }
  
  
  function draw() {
    image(img, 0,0);
  }
  
  
  function applyFilter(input, kernel) {
    
    // se crea una nueva imagen con las mismas dimensiones en blanco para trabajar con ella
    let output = createImage(input.width, input.height);
    

    // Se empieza en 1 y termina en -1 para evitar acceder a un pixel que no existe 
    // (debido a que se trabaja con los pixeles vecinos)
    input.loadPixels();
    output.loadPixels();
    for (let y=1; y<input.height-1; y++) {
      for (let x=1; x<input.width-1; x++) {
  
        // se establecen las sumas en 0 que usaremos para los valores RGB
        // tanto del mismo pixel como de sus vecinos (ponderados por la matriz)

        let sumR = 0;
        let sumG = 0;
        let sumB = 0;
        
        // Se recorren los vecinos
        for (let offsetY=-1; offsetY<=1; offsetY++) {
          for (let offsetX=-1; offsetX<=1; offsetX++) {
            
            // elige un pixel
            let neighborIndex = ((y+offsetY) * input.width + (x+offsetX)) * 4;
            let r = input.pixels[neighborIndex];
            let g = input.pixels[neighborIndex+1];
            let b = input.pixels[neighborIndex+2];
            

            // se aplica la matriz y se añade a la suma teniendo en cuenta el valor de cada offset
            // para poder acceder a los valores de la matriz de convolución.
            sumR += kernel[offsetY+1][offsetX+1] * r;
            sumG += kernel[offsetY+1][offsetX+1] * g;
            sumB += kernel[offsetY+1][offsetX+1] * b;
          }
        }
        
    
        // despues de visitar todos los vecinos
        // se asegura de que los valores estan restringidos en el rango RGB (0-255)
        sumR = constrain(sumR, 0,255);
        sumG = constrain(sumG, 0,255);
        sumB = constrain(sumB, 0,255);
        
        // cambia el pixel de la imagen nueva.
        let index = (y * input.width + x) * 4;
        output.pixels[index] =   sumR;
        output.pixels[index+1] = sumG;
        output.pixels[index+2] = sumB;
        output.pixels[index+3] = 255;
      }
    }
    
    // devuelve la imagen
    output.updatePixels();
    return output;
  }