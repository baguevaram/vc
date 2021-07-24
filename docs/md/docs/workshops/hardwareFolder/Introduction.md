# Problem Statement and Background

Implementar:

* (imágenes/video) Conversión a escala de grises: promedio rgb y luma.
* (imágenes/video) Aplicación de algunas máscaras de convolución.
* Conversión de la imagen a ascii art.
* Conversión de la imagen a un foto-mosaico.


## Background   

## ASCII ART
1. A cada carácter ASCII se le puede asignar un aproximado de densidad en escala de grises; 
el signo @ obviamente es visualmente más oscuro que el signo +, por ejemplo.

2. Se divide la imagen en bloques de "super pixeles" estos son sacados a partir de una sección de la textura. Cada bloque se convertirá en uno de los 
caracteres de la salida.

3. Calcular el promedio de la escala de grises valor de cada píxel de bloque.
   
4. Para cada bloque, seleccionar un carácter cuya densidad de escala de grises (del paso 1) sea 
una buena aproximación del bloque del paso 3

Para la parte de los colores solo calculamos el promedio rgb de la sección seleccionada para calcular el color de la letra.

## MOSAICO 

El primer enfoque usado para el mosaico fue hacer el calculo de una region determinada por el slider para que el calculo de los pixeles se acercara a los inidices de una lista de imagenes.
* Cargar las imagenes que se van a usar
* Calculamos el indice a partir del brillo de la seccion seleccionada, usando cada componente RGB por una constante
> :Formula align=center
>
> calc=(R \* 0.299+G \* 0.587+B \* 0.114)
* Buscamos el indice de la lista de imagenes
* Reemplazar la seccion por la imagen

El segundo enfoque usado para el mosaico fue hacer el calculo de una region determinada por el slider para que el calculo de los pixeles se acercara a los inidices de una lista de imagenes.
* Cargar las imagenes que se van a usar
* Calculamos la sumatoria a partir del brillo de la seccion seleccionada, usando cada componente RGB por una constante
> :Formula align=center
>
> calc=(R \* 0.299+G \* 0.587+B \* 0.114)\*255.0
* Buscamos la sumatoria de la lista de imagenes que mas se aproxime a la calculada
* Reemplazar la seccion por la imagen

El ultimo enfoque usado para el mosaico fue hacer el calculo de la distancia de una region determinada por el slider con una serie de determinados colores rgb cuyo representante es una imagen.
* Cargar las imagenes que se van a usar
* Calculamos la distancia entre 2 puntos, estos puntos tienen 3 componentes.
> :Formula align=center
>
> dis=\sqrt{{(pixel.R-rgb.R)^2}+{(pixel.G-rgb.G)^2}+{(pixel.B-rgb.B)^2}}
* Buscamos la menor distancia entre la sección y el color representativo de una imagen
* Reemplazar la seccion por la imagen

## Convoluciones

En este ejercicio veremos la utilidad de aplicar convoluciones por medio de distintos kernels, estos se usan para alterar las imagenes y obtener alguna información extra o solo cambiar su apariencia. Para realizar estos cambios usaremos 3 kernels los cuales son matrices que multiplicaran los pixeles propios de la imagen. 
En hardware podemos aprovechar el poder de calculo de las gpu para aplicar la convolución, para estos calculos usamos los kernels como vectores y accedemos a los texeles propios de cada imagen con un fragment shader.
En cada punto del slider podemos ver el resultado de aplicar 4 kernels, de izquierda a derecha son:

* Identidad
* Detección de bordes
* Filtro Blur
* Matriz de Sharpen