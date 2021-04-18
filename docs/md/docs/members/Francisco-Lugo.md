# Jose Francisco Lugo 

## Bio

## Interests

FullStack Development

## Hobbies

Soccer & Videogames

## Optical illusion

La ilusión de Cafe Wall (vista en los azulejos de un café local) es una figura de tablero de yeso de Münsterberg, pero con líneas paralelas horizontales que pueden tener cualquier luminancia que separa las filas de cuadrados desplazados. Estas líneas de 'mortero' muestran una distorsión de cuña marcada que se ve especialmente afectada por: contraste de los cuadrados ('baldosas'); ancho de las líneas de 'mortero', y su luminancia. La ilusión de Café Wall se atribuye al bloqueo de borde que produce desplazamientos de contorno inapropiados desde regiones vecinas de luminancia contrastante cuando se separan por espacios estrechos de luminancia neutra.

> :P5 sketch=/docs/sketches/Gregory.js width=400, height=400

## Código

```javascript
function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(255);

  let c = 0;
  for (let i = 0, y = 0; i < height; i += 20, y++) {
    if (y % 4 == 0) {
      c = -2;
    } else if (y % 2 == 0) {
      c = 10;
    } else {
      c = 5;
    }

    for (let j = 0, x = 0; j < width; j += 20, x++) {
      if (x % 2 == 0) {
        fill(0);
        rect(j + c, i, 20, 20);
      } else {
        fill(255);
        rect(j + c, i, 20, 20);
      }
    }
  }
}
```

### Referencias

[Explicación](https://proyectodescartes.org/iCartesiLibri/materiales_didacticos/Percepcion_Visual/indexb.html)

> :ToCPrevNext
