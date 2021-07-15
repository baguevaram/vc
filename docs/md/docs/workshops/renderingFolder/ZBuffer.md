# Z-Buffer (Depth Buffer)

> :P5 sketch=/docs/sketches/rendering/zBufferBefore.js, width=500, height=500

> :P5 sketch=/docs/sketches/rendering/zBuffer.js, width=500, height=500

> :P5 sketch=/docs/sketches/rendering/zBuffer2Before.js, width=500, height=500

> :P5 sketch=/docs/sketches/rendering/zBuffer2.js, width=500, height=500

## Introducción

Con el desarrollo de la tecnología en computación, se ha aumentado el potencial para la creación de entornos visuales cada vez más realistas, sin embargo, traer este realismo al usuario, supone también varios retos, que en términos generales tienen que ver con el modelamiento de la física del mundo real, dentro de una máquina de capacidad limitada. Partiendo de estas limitaciones lo que se busca es, aumentar el nivel de realidad visual, pero a su vez disminuir el tiempo que supone procesarla. Es claro que estas dos cosas están íntimamente relacionadas, por lo que se debe balancear entre ambas.

Al momento de disminuir el tiempo de procesamiento, juegan un rol clave los algoritmos que se usen, es por eso que los algoritmos deben ser soluciones “elegantes”, pero a la vez sencillas de procesar para una máquina.

En el mundo real, el ser humano no puede ver a través de la mayoría los objetos, así que constantemente existen obstáculos que nos impiden ver más allá, lo que hacemos para ver más allá de estos objetos es cambiar nuestro punto de vista de forma que no exista obstáculo alguno entre lo que se quiere visualizar y la persona. Para poder reproducir un entorno visual realista, modelar este comportamiento resulta vital. De ahí nace el problema de la visibilidad en computación gráfica, que consiste en la determinación de las superficies o partes de una superficie que se deben ocultar, dado un punto de vista o ángulo de vista particular.

## El problema de la visibilidad

En el mundo real, el ser humano no puede ver a través de la mayoría los objetos, así que constantemente existen obstáculos que nos impiden ver más allá, lo que hacemos para ver más allá de estos objetos es cambiar nuestro punto de vista de forma que no exista obstáculo alguno entre lo que se quiere visualizar y la persona. Para poder reproducir un entorno visual realista, modelar este comportamiento resulta vital. De ahí nace el problema de la visibilidad en computación gráfica, que consiste en la determinación de las superficies o partes de una superficie que se deben ocultar, dado un punto de vista o ángulo de vista particular.

## Trasladando el problema de la vida real a la computación visual

Cuando se quiere mostrar una escena 3D con varios objetos lo hacemos por medio de una pantalla en 2D, por lo que es importante identificar las partes de la escena que serán visibles en la pantalla.
Para abordar el problema de visibilidad en el contexto de la computación visual, existen dos enfoques:

1. En el espacio del objeto: este método se implementa en el sistema de coordenadas físicas y compara objetos o partes del objeto para determinar la superficie visible.
2. En el espacio de la imagen: Este método se implementa en el sistema de coordenadas de la pantalla y la visibilidad se decide punto por punto.

## El Z-Buffer como una posible solución

El método del Z-Buffer usa el segundo enfoque (image-space), este tipo de métodos tienen una complejidad temporal que corresponden al número de pixeles multiplicado por el número de objetos, en cambio su complejidad espacial corresponde a dos veces el número de pixeles debido a que es el tamaño de cada uno de los dos buffers con los que se trabaja.
La idea principal consiste en probar la profundidad de cada superficie (z-depth) y así determinar si ésta resulta visible partiendo de la noción de visibilidad de la geometría que dice que dos puntos son visibles el uno con el otro, siempre que el segmento de recta que los une, no interseca ningún obstáculo dentro de un conjunto de obstáculos en un espacio.
Para llevar a cabo el método se procesan de forma separada un pixel a la vez a lo largo de toda la superficie. Los valores de Profundidad para cada pixel se comparan sobre el plano de proyección y la superficie más cercana (smallestz) determina el color a ser mostrado.

## El algoritmo

El algoritmo del Z-Buffer usa dos buffers, el de profundidad (Depth Buffer) y el de color (Frame Buffer)

### Pseudocodigo

```javascript
//Inicializamos los valores del Depth Buffer con la profundidad máxima
d(i, j) = MAX_DEPTH;
//Inicializamos el valor de color en el Frame Buffer con el color del fondo o background
C(i, j) = BACKGROUND_COLOR;
Para cada polígono:
	Para cada pixel en la proyección del polígono:
	{ Hallar la profundidad 'z' del polígono en (x, y)  correspondiente al pixel (i, j)
	    if ( z < d(i, j) ){
	        d(i, j) = z;
		    c(i, j) = color;
        }
     }
```

## Limitaciones

- Solo puede procesar superficies opacas
- Puede llegar a usar mucha memoria
- Puede sufrir artefactos debido a los errores de precisión (z-fighting)

## Referencias

- https://en.wikipedia.org/wiki/Visibility_(geometry)
- https://en.wikipedia.org/wiki/Hidden-surface_determination
- https://www.tutorialspoint.com/computer_graphics/visible_surface_detection.htm
- https://www.geeksforgeeks.org/z-buffer-depth-buffer-method/
- https://www.youtube.com/watch?v=GxpPpG5pFpE