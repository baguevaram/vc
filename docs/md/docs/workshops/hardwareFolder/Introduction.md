# Problem Statement and Background

Implementar:

* (imágenes/video) Conversión a escala de grises: promedio rgb y luma.
* (imágenes/video) Aplicación de algunas máscaras de convolución.
* Conversión de la imagen a ascii art.
* Conversión de la imagen a un foto-mosaico.


## Background   

## Uso de texturas

En los navegadores hay una limitación de 16 texturas al ejecutar los programas

## TEXTURES
Son una parte primordial de la representación de las imágenes 3D, debido a que nos permiten aplicar una imagen que se encuentra en 2 dimensiones a un objeto tridimensional, normalmente realizando un mapeo de la imagen que deseamos proyectar para posteriormente envolver el objeto al cual queremos aplicar las texturas.

## SHADERS
En la computación gráfica se usan los shaders como ya hemos visto en el curso para aplicar el sombreado a objetos en 3D, entendido como el debido nivel de luz, oscuridad y color, todo esto para mejorar la representación de un objeto 3D en un computador. La mayoría de estos corren en la GPU debido a la facilidad que tienen estas para procesar la geometría con mayor eficiencia.

## LUMA
 Se usó el método de Luma, con el objetivo de obtener una imagen convertida a su equivalente en escala de grises, esto se logró realizando el cálculo del promedio, pero lo realiza de forma ponderada para corregir la percepción con la que es percibida por los seres humanos.
> :Formula align=center
>
> prom=\cfrac{R \* 0.2627+G \* 0.678+B \* 0.0593}{3}
>
> ```
> R=prom
> ```
>
> ```
> G=prom
> ```
>
> ```
> B=prom
> ```

## Convoluciones

En este ejercicio veremos la utilidad de aplicar convoluciones por medio de distintos kernels, estos se usan para alterar las imágenes y obtener alguna información extra o solo cambiar su apariencia. Para realizar estos cambios usaremos 3 kernels los cuales son matrices que multiplicarán los píxeles propios de la imagen. 
En hardware podemos aprovechar el poder de cálculo de las gpu para aplicar la convolución, para estos cálculos usamos los kernels como vectores y accedemos a los texeles propios de cada imagen con un fragment shader.
En cada punto del slider podemos ver el resultado de aplicar 4 kernels, de izquierda a derecha son:

* Identidad
* Detección de bordes
* Filtro Blur
* Matriz de Sharpen

## ASCII ART
1. A cada carácter ASCII se le puede asignar un aproximado de densidad en escala de grises; 
el signo @ obviamente es visualmente más oscuro que el signo +, por ejemplo.

2. Se divide la imagen en bloques de "super pixeles" estos son sacados a partir de una sección de la textura. Cada bloque se convertirá en uno de los 
caracteres de la salida.

3. Calcular el promedio de la escala de grises valor de cada píxel de bloque.
   
4. Para cada bloque, seleccionar un carácter cuya densidad de escala de grises (del paso 1) sea 
una buena aproximación del bloque del paso 3

Para la parte de los colores solo calculamos el promedio rgb de la sección seleccionada para calcular el color de la letra.

## VIDEOS

Usando los fragment shader previamente creados podemos usarlo para que estos filtros sean visibles en los videos

## MOSAICO 

El primer enfoque usado para el mosaico fue hacer el cálculo de una región determinada por el slider para que el cálculo de los píxeles se acercara a los índices de una lista de imágenes.
* Cargar las imágenes que se van a usar
* Calculamos el índice a partir del brillo de la sección seleccionada, usando cada componente RGB por una constante
> :Formula align=center
>
> calc=(R \* 0.299+G \* 0.587+B \* 0.114)
* Buscamos el índice de la lista de imágenes
* Reemplazar la sección por la imagen

El segundo enfoque usado para el mosaico fue hacer el cálculo de una región determinada por el slider para que el cálculo de los píxeles se acercara a los índices de una lista de imágenes.
* Cargar las imágenes que se van a usar
* Calculamos la sumatoria a partir del brillo de la sección seleccionada, usando cada componente RGB por una constante
> :Formula align=center
>
> calc=(R \* 0.299+G \* 0.587+B \* 0.114)\*255.0
* Buscamos la sumatoria de la lista de imágenes que más se aproxime a la calculada
* Reemplazar la sección por la imagen

El último enfoque usado para el mosaico fue hacer el cálculo de la distancia de una región determinada por el slider con una serie de determinados colores rgb cuyo representante es una imagen.
* Cargar las imágenes que se van a usar
* Calculamos la distancia entre 2 puntos, estos puntos tienen 3 componentes.
> :Formula align=center
>
> dis=\sqrt{{(pixel.R-rgb.R)^2}+{(pixel.G-rgb.G)^2}+{(pixel.B-rgb.B)^2}}
* Buscamos la menor distancia entre la sección y el color representativo de una imagen
* Reemplazar la sección por la imagen

## BIBLIOGRAFIA
https://www.pcmag.com/encyclopedia/term/texture-mapping


