# Rasterización

## Introducción

¿Qué es la rasterización?
Es el proceso mediante el cual se representa un objeto de la vida real como unos pixeles que puedan ser representados por un computador, es decir, procesar un vector de imágenes y convertirlo en píxeles que se puedan mostrar en una pantalla, este método es muy usado cuando se habla de representación de objetos en 3D,  debido a que mucho más rápido que otros algoritmos que realizan la misma tarea, sin embargo tiene la limitación de no almacenar los colores de los pixeles, normalmente esta tarea se deja a un algoritmo para hacer shading y de esta manera obtener una buena representación del objeto.

Para lograr esto se proyecta la imagen del triángulo en un plano de dos dimensiones, esto puede ser realizado al usar los vértices de la figura, los cuales representan los límites de esta en la pantalla, el siguiente problema a resolver es la manera de rellenar los píxeles que se encuentran dentro de estas líneas, para estos procesos discutiremos más adelante los algoritmos que se usan, pero vale la pena mencionar que estos algoritmos son centrados en el objeto, lo que significa que iniciamos por su geometría y desde allí obtenemos la imagen que representa la figura.


## Algoritmos Bresenham 
Al iniciar el proceso solo tenemos los vértices en el plano, para obtener las aristas del triángulo usamos el algoritmo de Bresenham, el cual toma como entrada dos puntos para los cuales se traza una línea recta dentro de la grilla en la que se ubican los puntos, el principal problema es que al ser una grilla puede que la línea no sea tan perfecta como se desea, es por esto que el algoritmos a sufrido ciertos cambios que lo han hecho más eficiente pero todos se basan en la misma idea, esto se realiza con los 3 pares de puntos que componen el triángulo y de esta manera obtenemos las aristas que describen nuestro triángulo.

 ![bresenham](/docs/sketches/rendering/img/bresenham.png)
## Algoritmos Scanline 
Posterior a este algoritmo debemos rellenar los píxeles que se encuentran dentro de la proyección de la figura, para esto podemos usar el algoritmo de Scanline para conocer el color que cada pixeles debe tener,  esto se logra teniendo un vector de coordenadas, con los cuales se genera una combinación lineal de los colores de esta manera logramos calcular el valor del color de los pixeles de los cuales se compone la imagen rasterizada.

 ![scanline](/docs/sketches/rendering/img/scanline.png)





