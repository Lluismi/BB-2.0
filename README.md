# PRÁCTICA 2: WEB PROTOTYPE

**Participantes:** Garbiñe Boned Ruiz y Lluís Miquel Morey.
**Enlace vídeo Youtube:** [https://youtu.be/EjoTpCEpFNo](https://youtu.be/EjoTpCEpFNo).
_ _ _
Segunda práctica en común para las asignaturas de Desarrollo Web en Entorno Cliente y Diseño de Interfaces Web
_ _ _
### Cambios respecto al Wireframe
###### Respecto a las páginas de Desktop:
En la página principal, no hemos hecho que la barra de navegación ocupe todo el espacio del menú, sino que la hemos colocado alineada a la izquierda. La imagen que aparece debajo, tampoco ocupa todo el ancho de la página como habíamos incluido en el wireframe. No hemos añadido un botón de "leer más" en las actualizaciones y noticias por separado. Hemos alineado el Copyright al centro en vez de a la izquierda. En la página de personajes, hemos cambiado lo mismo que en la página principal referente al header, el footer y la imagen superior, y en nuestra versión final hemos añadido las frases de los personajes debajo de los mismos, en vez de solo el nombre. En la página de entrar al juego hemos cambiado lo mismo que en las dos páginas anteriores, y además hemos quitado las opciones de "Activar tutorial" y "Selecciona el idioma". En la página del juego cambia lo mismo que en las anteriores, además de la posición de los detalles del jugador.

###### Respecto a las páginas de Móvil:
El header se mantiene parecido, aunque en nuestra versión aparece el botón de "Página Principal" en la parte inferior del header. La imagen superior de la página no está centrada como en el wireframe. No añadimos los enlaces de "leer más" para entrar a una actualización o noticia concreta. El mensaje de copyright lo centramos en nuestra página, y no está alineado a la izquierda como lo está en el wireframe. En la página de los personajes cambia lo mismo que en la anterior respecto al header, imagen superior y footer, pero todo lo demás está igual colocado que en el wireframe.
_ _ _
### Paleta de colores
![Paleta de colores utilizada](/src/images/paleta.png)
_ _ _
### Google Fonts
![Fuentes de letra utilizadas](/src/images/fuentes.png)
_ _ _
### Código extraído de páginas externas
- El código de la barra de menú responsive: [W3Schools](https://www.w3schools.com/howto/howto_js_topnav_responsive.asp).

- Ayuda referente a Grid para posicionar correctamente los elementos de la página: [Developer Mozilla](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout).

- El código para el aviso de Cookies basado en en de la página de LOL: [Programador Web Valencia](https://programadorwebvalencia.com/Javascript-ejemplo-aviso-o-cartel-de-cookie/).

- El código para insertar imágenes externas en el canvas: [Desarrollo Web](https://desarrolloweb.com/articulos/usar-imagenes-canvas.html).

- El código para detectar en qué zona del canvas se ha hecho click: [The Marcos Zone](http://themarcoszone.blogspot.com/2014/07/detectando-las-coordenadas-del-mouse-en.html).

- El código para que suceda un evento aleatorio: [Riptutorial](https://riptutorial.com/es/javascript/example/10972/simulando-eventos-con-diferentes-probabilidades-).

- El código para hacer el contador de dinero: [codepen](https://codepen.io/evilnapsis/pen/wBZBgv).
_ _ _
### Tansiciones
- Para la transición de los divs de los personajes de la versión para móvil, hemos usado el código de [CodePen](https://codepen.io/Aleix/pen/ozWBoG). Al principio salen las imágenes de los personajes con su nombre debajo, al darle click a cada una, esta realiza una rotación vertical hacia arriba, dejando ver únicamente el motto del personaje seleccionado, al dar click en otro personaje o a otra zona de la página, el div de dicho personaje vuelve a su posición original.
- Para la transición del Aviso de Cookies, en la propia página del footer, añadí el código HTML para mostrar el aviso, y debajo el script de JS que necesita para funcionar correctamente. En la función hideSection añado el código necesario para que se realizara la transición, una vez aceptadas o rechazas las Cookies, y lo que hace es deslizarse hacia abajo hasta desaparecer. Finalmente, elimino el contenedor, ya que no es necesario que siga estando en la página.
_ _ _
### Bugs
- El responsive del menú de navegación no funciona dependiendo de la versión de Google Chrome.
- Al tener los ficheros de header y footer por separado, es necesario utilizar Live Server y otro método similar para visualizar la página correctamente.
- Para incluir los diferentes tipos de construcción dentro del canvas, hay que hacer click primero en la zona del canvas donde se quiere colocar, para después seleccionar el edificio que se quiere poner. Conseguimos que se colocaran ocupando los cuadrados correspondientes. Al intentar construir diferentes edificios, se colocan el el sitio clickeado, pero también en los que se ocuparon antes. Y al colocar una construcción, si se va pulsando sobre los diferentes tipos de edificios, se va colocando sobre los que ya estaban puestos.
_ _ _
### Webgrafía
Para elegir los colores de la página, nos hemos inspirado en los que se utilizan en la página de [LOL](https://na.leagueoflegends.com/es-es/), pensamos que hay un buen contraste entre los colores de fondo del encabezado y del body de la página. El encabezado es llamativo, y tanto el título como el botón del menú de navegación resaltan gracias al color dorado. El color blanco de fondo del body hace que todos los demás elementos que contiene resalten sobre el mismo.