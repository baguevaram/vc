# Jhonatan R. Saumeth

## Bio


## Interests
FullStack Development

## Hobbies
Soccer & Videogames

## Optical illusion

### Lines like curves.

El arte de cuerdas  o de hilos se caracteríza por un arreglo de hilos amarrados a ciertos puntos con lo que se consigue formar patrones geométricos.
Resulta increible ver como a través de lineas rectas se consiguen por medio de simples variaciones de ángulos la conformación de aproximaciones visuales de curvas cuadráticas. Este arte se deriva de las actividades de "curve stitch" inventadas por Mary Everest Book quién tenia en mente promover la enseñanza de la matemática de manera sencilla a los niños. 

A continuación se puede ver una de las tantas figuras que se pueden armar usando lineas, y ver claramente el impacto en la aproximación de la curva a medida que se eleva el numero de rectas dibujadas.

> :P5 sketch=/docs/sketches/CurvedLines.js width=600, height=600


## Código

```javascript
function setup() {
  createCanvas(600, 600);

  slider = createSlider(1, 5, 1);
  slider.position(12, 24);
}

function draw() {
  background(255);
  let sliderValue = slider.value();

  for (let i = 0; i <= 600; i += (5 - sliderValue + 1) * 10) {
    line(0, i, i + (5 - sliderValue + 1) * 10, 600);
    line(600, i + (5 - sliderValue + 1) * 10, i, 0);
  }
  line(0, 0, 0, 600);
  line(600, 0, 0, 0);
}

```
### Referencias

[Mary Everest Boole](https://mujeresconciencia.com/2017/08/10/mary-everest-boole-1832-1916/)

> :ToCPrevNext