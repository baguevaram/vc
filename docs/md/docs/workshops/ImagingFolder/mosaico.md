# Imagen

> :P5 sketch=/docs/sketches/image.js

# Mosaico de Imagenes

Un mosaico es un recubrimiento del plano mediante unas determinadas piezas, que se denominan teselas, de forma que no se
superpongan ni dejen huecos.

Un mosaico regular es aquel en el que las teselas son todas un mismo polıgono regular y
estan unidas haciendo coincidir vertices y lados.

1. Se crea una grilla con una determinada cantidad de pixeles por sector.

2. Se cargan las imagenes que se usaran en el mosaico.

3. Usando la función brightness() se calcula el promedio de brillo de las imagenes

4. Se calcula el promedio de de brillo de los pixeles de la imagen original y se reemplaza por la foto cuya diferencia de brillo sea la más pequeña

> :P5 sketch=/docs/sketches/mosaico.js

# Código

```js | mosaico.js
function setup() {
  W = img.width / scl;
  H = img.height / scl;
  createCanvas(img.width, img.height);
  smaller = createImage(W, H);
  smaller.copy(img, 0, 0, img.width, img.height, 0, 0, W, H);
  for (var i = 0; i < cantImg; i++) {
    allImages[i] = createImage(scl, scl);
    allImages[i].copy(
      imgTemp[i],
      0,
      0,
      imgTemp[i].width,
      imgTemp[i].height,
      0,
      0,
      scl,
      scl
    );
  }
}

function draw() {
  for (var i = 0; i < cantImg; i++) {
    allImages[i].loadPixels();
    let avg = 0;
    for (var j = 0; j < allImages[i].pixels.length; j += 4) {
      let b = brightness(
        allImages[i].pixels[j],
        allImages[i].pixels[j + 1],
        allImages[i].pixels[j + 2]
      );
      avg += b;
    }
    avg /= allImages[i].pixels.length / 4;
    bright[i] = avg;
  }
  for (var k = 0; k < brightImages.length; k++) {
    var record = 256;
    for (var r = 0; r < bright.length; r++) {
      var diff = abs(k - bright[r]);
      if (diff < record) {
        record = diff;
        brightImages[int(k / 5)] = allImages[r];
        console.log(int(k / 5));
      }
    }
  }
  smaller.loadPixels();
  for (let x = 0; x < W; x++) {
    for (let y = 0; y < H; y++) {
      let index = 4 * (x + y * W);
      let c = color(
        smaller.pixels[index],
        smaller.pixels[index + 1],
        smaller.pixels[index + 2]
      );
      //   fill(brightness(c));
      //   noStroke();
      //   rect(x * scl, y * scl, scl, scl);
      let imageIndex = brightness(c);
      if (brightImages[int(imageIndex / 5)] !== undefined)
        image(brightImages[int(imageIndex / 5)], x * scl, y * scl, scl, scl);
      console.log(int(imageIndex / 5));
    }
  }
  smaller.updatePixels();
  noLoop();
}
```

# Referencias

[Definición](https://www.um.es/c/document_library/get_file?uuid=7ba9e3e0-8820-49d3-86ef-bf17bfe0ea07&groupId=118351#:~:text=Un%20mosaico%20regular%20es%20aqu%C3%A9l,haciendo%20coincidir%20v%C3%A9rtices%20y%20lados.)

[Explicación](https://www.youtube.com/watch?v=nnlAH1zDBDE)

> :ToCPrevNext