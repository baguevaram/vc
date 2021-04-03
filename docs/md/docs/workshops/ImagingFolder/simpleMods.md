# Modificaciones Simples

## Imagen Invertida

Simplemente el último pixel se pone de primeras, el penúltimo de segundas y así sucesivamente

> :P5 sketch=/docs/sketches/inverse.js

## Imagen Negativa

A cada componente (R,G y B) de cada pixel se le asigna el valor de 255 menos el valor original 

> :P5 sketch=/docs/sketches/Negative.js

## Imagen en escala de grises

### Average Method

Se saca el promedio de los componentes de cada pixel y ese promedio se le asigna a los 3 componentes del pixel

> :P5 sketch=/docs/sketches/Grises.js

### Lightness Method

Se toma el componente máximo y mínimo de cada pixel, se divide en 2 y ese valor se le asigna a los 3 componentes del pixel

> :P5 sketch=/docs/sketches/Grises2.js

### Luma Method

Se hace un promedio ponderado entre los 3 componentes de cada pixel y se le asigna ese valor a cada componente

> :P5 sketch=/docs/sketches/Grises3.js

## Referencias

[Escala de grises](https://en.wikipedia.org/wiki/HSL_and_HSV#Disadvantages)

> [Videos escala de grises](/docs/workshops/ImagingFolder/videosGrises)
>
> [ASCII ART](/docs/workshops/ImagingFolder/ASCIIART)
>
> [ASCII ART 2 (Color)](/docs/workshops/ImagingFolder/ASCIIART2)
>
> [Mosaico](/docs/workshops/ImagingFolder/mosaico)
