# Conclusiones

Mediante los ejemplos del taller de Software y Hardware se puede observar que las conversiones de imagenes o secuencias de ellas a escalas de grises, a ASCII Art, y a foto-mosaico e incluso la aplicación de  máscaras de convolución se pueden realizar usando distintos enfoques.

El primero, trabajando pixel a pixel (probablemente subpixel o superpixel) uno a la vez es decir, procesaminto en serie, y el segundo usando los shaders que nos permiten explotar las capacidades del procesamiento en paralelo.

Si bien estas múltiples conversiones se pueden llevar a cabo con ambos enfoques, la elección de uno de ellos terminará afectando de forma crítica la velocidad con la que estas se procesen, la medida de desempeño crucial al establecer comparativas es la cantidad de cuadros por unidad de tiempo, y suele ser común usar los FPS (Frames per second).

Se pudo evidenciar que para los ejemplos del taller de Software, el cual se desarrollo usando el primer enfoque, el framerate obtenido era muy inferior al límite que establece P5.js que es de 60 FPS, trabajando con resoluciones menores a los (500x500) se obtuvo como máximo un framerate de 30 FPS en los ejemplos que requerian un mínimo de procesamiento y los más exigentes como por ejemplo los videos llegaban a arrojar incluso menos de 8 FPS.

Observando los ejemplos del taller de Hardware, el que usa el segundo enfoque, se obtuvo resultados increiblemente superiores, tal es así que para todos los ejemplos, incluso trabajandolos en resoluciones superiores a los (500x500) mostraron los 60FPS Limites, por lo que para entender en que punto el desempeño disminuia desde este límite se tuvo que hacer pruebas con resoluciones mayores a los 4500x4500 pixeles, más de 80 veces la cantidad procesada en los ejemplos del taller de software para tan solo disminuir levemente de los 60 FPS.

Los resultados en términos de desempeño son absolutamente superiores para el uso del enfoque que explota el procesamiento en paralelo, parece relevante mencionar que también estos van a variar dependiendo del hardware / software usado, para reproducir los ejemplos y tomar las mediciones se usó una CPU Intel i5 9400f y una GPU RTX 2060 Super además de una RAM DDR4 de 16GB sobre un SO Windows 10 en un navegador Mozilla Firefox v90 64Bits.

# Trabajo futuro

Para trabajo futuro sería interesante hacer pruebas variando el software y hardware, por ejemplo hacer pruebas de Processing para Android y ver el desempeño en dispositivos móviles, otra posibilidad es justamente combinar los dos enfoques y aprovechar las ventajas que ambos ofrecen, es decir la velocidad del hardware con la flexibilidad del software.


> :ToCPrevNext