# Andrés

## Bio

## Interests

Back

## Hobbies

Futsal

## Optical illusion

Es denominada así en honor a su descubridor, el psícólogo alemán Hermann Ebbinghaus(1850-1909) fue popularizada en el mundo de habla inglesa por Titchener en un libro de texto sobre psicología experimental de año 1901, de ahí que su nombre alternativo sea "Círculos de Titchener".

Aunque comúnmente se le ha asimilado como una ilusión de tamaño, trabajos recientes, sugieren que el factor crítico en la ilusión es la distancia de los círculos circundantes y la continuidad del anillo, lo que lo convierten en una variación de la Ilusión de Delboeuf. Si los círculos que rodean están cerca del círculo central, éste aparentará ser más grande, mientras que si se alejan la percepción será contraria.

> :P5 sketch=/docs/sketches/Circles.js width=800, height=400

## Código

```javascript
function setup() {
  createCanvas(800, 400);
  angleMode(DEGREES);
}

function draw() {
  background("white");
  noStroke();
  fill("gray");
  translate(width / 4, height / 2);

  push();
  fill("orange");
  ellipse(0, 0, 60, 60);
  pop();

  for (let i = 0; i < 6; ++i) {
    push();
    rotate((360 / 6) * i);
    translate(width / 6, 0);
    ellipse(0, 0, 100, 100);
    pop();
  }

  noStroke();
  fill("gray");
  translate(width / 2, height / 16 - 20);
  push();
  fill("orange");
  ellipse(0, 0, 60, 60);
  pop();

  for (let i = 0; i < 6; ++i) {
    push();
    rotate((360 / 6) * i);
    translate(width / 12, 0);
    ellipse(0, 0, 50, 50);
    pop();
  }
}
```

### Referencias

[Explicación](https://proyectodescartes.org/iCartesiLibri/materiales_didacticos/Percepcion_Visual/indexb.html)

> :ToCPrevNext
