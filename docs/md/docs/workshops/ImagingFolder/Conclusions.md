# Conclusiones

## Modificaciones simples
Estas modificaciones se realizaron cargando una imagen originalmente a color y manipulandola pixel por pixel, para lo que resulto especialmente útil el arreglo pixels que brinda P5.js, se pudo mostrar que no existe una única forma de calcular la escala de grises tanto de una imagen o secuencia de ellas, y que dependiendo de la forma de calculo que se emplee y las caracteristicas de la imagen base, los resultados van a variar significativamente.

## ASCII Art
El ASCII Art es una representación de alguna imagen con los caracteres que se encuentran en el Código Estandar para el Intercambio de Informacion
Estadounidense o (ASCII) por sus siglas en ingles.
Para la representación ASCII de la imagen propuesta se tuvo en cuenta la densidad de escala de grises en los bloques de superpixeles y así dependiendo de su cantidad elegir el carácter mas acorde, si bien el resultado es una primera aproximación, se podrian explorar otras alternativas como distintos tipos de fuente de letra distancia y tamaño, esto en busca de obtener un mejor resultado.

## Mascaras de Convolución
En contraste con las modificaciones simples, donde la manipulación de la imagen o secuencia de imagenes era pixel a pixel las mascaras de convolución nos brindan una alternativa donde se tiene en cuenta el contexto de cada uno de estos pixeles, dandole importancia al hecho de que una imagen es un conjunto de pixeles y que deberia entenderse como conjunto, es por eso que las modificaciones que nos permiten las mascaras de convolución tienen en cuenta la "vecindad" de cada pixel, producto de ha sido posible visualizar enfoques, desenfoques, enfatizar ciertos sectores etc. 

## Conclusion final
La librería abierta P5.js es una herramienta bastante útil que facilita el trabajo para la manipulación de tanto de imagenes como video,
y aunque permite cargar, transformar y visualizar con tan solo unas pocas lineas de código, tambien es cierto que estas abstracciones tienen un costo implicito, este se ve reflejado en la sobrecarga que le representa al navegador la visualización de multiples instancias de scripts en una sola página.