# ASCII ART

1. A cada carácter ASCII se le puede asignar un aproximado de densidad en escala de grises; 
el signo @ obviamente es visualmente más oscuro que el signo +, por ejemplo.

2. Se divide la imagen en bloques de "super pixeles". Cada bloque se convertirá en uno de los 
caracteres de la salida.

3. Calcular el promedio de la escala de grises valor de cada píxel de bloque.
   
4. Para cada bloque, seleccionar un carácter cuya densidad de escala de grises (del paso 1) sea 
una buena aproximación del bloque del paso 3

## Imagen

> :P5 sketch=/docs/sketches/Grises2.js

## ASCII ART

> :P5 sketch=/docs/sketches/ASCIIArt.js

# Referencias

[Código](https://programmerclick.com/article/32561446342/#ASCii_17)

[Explicación](https://www.iteramos.com/pregunta/42887/como-hacer-arte-ascii-conversion-de-imagenes-algoritmos-de-trabajo)

> [Modificaciones Simples](/docs/workshops/ImagingFolder/simpleMods)
>
> [ASCII ART 2 (Color)](/docs/workshops/ImagingFolder/ASCIIART2)
>
> [Mosaico](/docs/workshops/ImagingFolder/mosaico)