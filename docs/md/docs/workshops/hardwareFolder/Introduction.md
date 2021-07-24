# Problem Statement and Background

Implementar:

* (imágenes/video) Conversión a escala de grises: promedio rgb y luma.
* (imágenes/video) Aplicación de algunas máscaras de convolución.
* Conversión de la imagen a ascii art.
* Conversión de la imagen a un foto-mosaico.


## Background   

## ASCII ART

## LUMA
 Se usó el método de Luma, con el objetivo de obtener una imagen convertida a su equivalente en escala de grises, esto se logro realizando el cálculo del promedio, pero lo realiza de forma ponderada para corregir la percepción con la que es percibida por los seres humanos.
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
## MOSAICO 


## SHADERS
En la computación gráfica se usan los shaders como ya hemos visto en el curso para aplicar el sombreado a objetos en 3D, entendido como el debido nivel de luz, oscuridad y color, todo esto para mejorar la representación de un objeto 3D en un computador. La mayoría de estos corren en la GPU debido a la facilidad que tienen estas para procesar la geometría con mayor eficiencia.
 
## TEXTURES
Son una parte primordial de la representación de las imágenes 3D, debido a que nos permiten aplicar una imagen que se encuentra en 2 dimensiones a un objeto tridimensional, normalmente realizando un mapeo de la imagen que deseamos proyectar para posteriormente envolver el objeto al cual queremos aplicar las texturas.


## BIBLIOGRAFIA
https://www.pcmag.com/encyclopedia/term/texture-mapping
