# Problem Statement and Background

Para el presente trabajo se hace uso de imágenes y videos para su posterior manipulación, empezando desde algunas alteraciones básicas yendo a través de algunas más complicadas de realizar, esto con el fin de realizar procesamiento y análisis sobre imágenes y videos.

En la clase por consenso se propusieron unos retos para lograr entender cómo funciona el procesamiento y análisis de imágenes, dentro de los cuales se decidieron los siguientes:

Implementar:

* (imágenes/video) Conversión a escala de grises: promedio rgb y luma.
* (imágenes/video) Aplicación de algunas máscaras de convolución.
* (solo para imágenes) Conversión de la imagen a ascii art. Nota: Se puede emplear p5.quadrille.js.
* (solo para imágenes) Conversión de la imagen a un foto-mosaico.

> :Formula align=center
>
> G_{\mu\nu} + \Lambda g_{\mu\nu} = \cfrac{8\pi G}{c^4}T_{\mu\nu}


Inicialmente trabajamos con las imágenes dado que su manipulación es más sencilla y esta es una particularidad en los problemas de manipulación de videos.

## Background   

## MODIFICACIONES SIMPLES 

Inicialmente en el grupo decidimos investigar un conjunto de problemas los cuales llamamos modificaciones simples en los cuales encontramos Imagen Invertida, Imagen Negativa y la escala de grises con 3 métodos

La imagen invertida es una imagen estática generada al reflejarla con respecto a un eje horizontal. Esto se logra al utilizar el arreglo de pixeles propio de cada imagen e invertir sus posiciones.
> :Formula align=center
>
> [1p,2p,3p,4p,...,n-1p,np]

> :Formula align=center
>
> [np,(n-1)p,(n-2)p,...,2p,1p]

 

La imagen negativa se logra al transformar cada componente(R,G y B) del píxel a su negativo en la escala de 0 255. Esto se logra al restarle 255 a el valor original de componente(R,G y B) del pixel.
> :Formula align=center
>
> R=255-R_i \qquad G=255-G_i \qquad B=255-B_i


La imagen en escala de grises es una escala la cual asigna a cada valor de un pixel su representación de la graduación en gris, en resumen lo lleva a un valor comprendido entre 0 y 255.

Para esto existen varios métodos, el más básico es tomar el promedio del rgb de cada pixel, a pesar de que es fácil su implementación tiene algunos defectos que deben ser  tenidos en cuenta, ya que la forma en que realiza los cálculos hace una representación deficiente para la percepción de los seres humanos.
> :Formula align=center
>
> ```
> prom=\cfrac{R+G+B}{3}
> ```
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


Posteriormente se usó el método de Luma, esto con el fin de reducir los defectos del método básico, realizando el cálculo del promedio, pero lo realiza de forma ponderada para corregir la percepción con la que es percibida por los seres humanos.
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



Finalmente el último método implementado fue el del brillo, este se basa en promediar los colores más predominantes y los menos predominantes, al hallar este valor se le asigna a los componentes con los que fue calculado este valor.
> :Formula align=center
>
> prom=\frac{\max(R,G,B)+\min(R,G,B)}{2}
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


## ASCII ART

La representación con código ASCII se puede usar para mostrar las imágenes en computadores que no pueden representarlas, primero se debe analizar la imagen por bloques, teniendo en cuenta los detalles del bloque como por ejemplo su densidad, posterior a esto se define su nivel de brillo, con el fin de asignar el ASCII correspondiente que permita hacer una representación correcta de la imagen. 


## Mosaico

Un mosaico es un recubrimiento del plano mediante unas determinadas piezas, que se denominan teselas, de forma que no se
superpongan ni dejen huecos.

Un mosaico regular es aquel en el que las teselas son todas un mismo polıgono regular y
están unidas haciendo coincidir vértices y lados.

* Se crea una grilla con una determinada cantidad de pixeles por sector.

* Se cargan las imágenes que se usarán en el mosaico.

* Usando la función brightness() se calcula el promedio de brillo de las imágenes

* Se calcula el promedio de de brillo de los píxeles de la imagen original y se reemplaza por la foto cuya diferencia de brillo sea la más pequeña

