# Problem Statement and Background

Los retos propuestos en clase para practicar los algoritmos por hardware fueron realizar unas implementaciones:

* (imágenes/video) Conversión a escala de grises: promedio rgb y luma.
* (imágenes/video) Aplicación de algunas máscaras de convolución.
* Conversión de la imagen a ascii art.
* Conversión de la imagen a un foto-mosaico.

Para el presente taller se buscaba poner en práctica los conceptos aprendidos en la materia acerca del uso tanto de imágenes como de videos con el fin de manipularlos, aprovechando los algoritmos que se pueden usar apoyándose en el hardware, estas manipulaciones varían entre algunas simples como lo son la escala de grises o a color, pasando a través del ascii art y finalizando con el estilo de mosaico, todo con el fin de realizar procesamiento y análisis del material audiovisual.
 
## Background  
 
Para la elaboración de las diferentes manipulaciones que se realizaron se usó como base los videos de las clases de Computación Visual, tanto las explicaciones como las implementaciones realizadas por el docente, tal como ocurrió en el caso de los shaders basicos, ademas se imito el funcionamiento que tienen las funciones propias de p5.js, esto con el fin de obtener los mismos resultados en las texturas empleadas.

En el caso del mosaico, se usaron los fragment shader previamente creados podemos usarlo para que estos filtros sean visibles en los videos, para los estos se implemento las texturas con 16 y 32 imagenes diferentes, en el primer paso nos apoyamos de una herramienta online (https://pinetools.com/es/obtener-colores-imagen) la cual nos ayudo a conocer los colores representativos necesarios para el mosaico, posterior a esto necesitabamos hallar la manera de representar esos resultados, por lo que con los colores encontrados en la siguiente pagina, buscamos en un banco de imagenes donde las imagenes se podian buscar por tags, lo cual fue usado para conseguir varias imagenes que tuvieran relacion con la imagen principal.

> :P5 sketch=/docs/sketches/hardware/1.js
## Uso de texturas

En los navegadores hay una limitación de 16 texturas al ejecutar los programas

## BIBLIOGRAFIA
https://www.pcmag.com/encyclopedia/term/texture-mapping
