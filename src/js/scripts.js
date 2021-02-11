/* Añadir y quitar la clase "responsive" al topnav cuando el usuario hace click
    en el icono */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav-pills") {
        x.className += " responsive";
    } else {
        x.className = "nav-pills";
    }
}

/* Carga el contenido html de header.html en su respectiva etiqueta */
$(document).ready(() => {
    $("header").load("header.html");
  });

/* Carga el contenido html de footer.html en su respectiva etiqueta */
$(document).ready(() => {
$("footer").load("footer.html");
});

// CÓDIGO PARA LA PÁGINA DE PERSONAJES
// import axios from 'axios';

const BASE_URL =
  "https://my-json-server.typicode.com/classicoman2/fakeRESTserver";

const getAll = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/personatges`);

    const all = res.data;

    drawCharacters(all);

    return all;
  } catch (e) {
    console.error(e);
  }

/**
 * Creo un bucle, en el cual recorre la longitud de la array de
 * personajes y va dibujando cada uno de ellos
 * @param {Array} characters
 */
function drawCharacters(characters) {
    for (i=0; i <= characters.length - 1; i++) {
        drawCharactersDiv(characters[i], i);
    }
}

/**
 * Creo un elemento div por cada personaje, y les asigno a cada
 * uno una id 'personaje' + los números del 1 al 8.
 * Creo otros dos div dentro de cada personaje, en uno se muestra
 * lo que devuelve el front del div, y el otro lo que muestra al
 * darle la vuelta.
 * Creo un elemento imagen para cada personaje, obteniendo el
 * enlace a partir de una función.
 * Hago que la imagen se inserte dentro de cada uno de los divs.
 * Creo un elemento p para cada uno de los personajes, los cuales
 * añado también dentro del div de los mismos, e inserto el texto
 * dentro de ellos, obteniéndolo de otra función.
 * Por último, inserto dentro del wrapper todos los div
 * @param {Array} character 
 * @param {Integer} contador 
 */
function drawCharactersDiv(character, contador) {
    let divPersonaje = document.createElement("div");
    divPersonaje.id = "personaje" + (contador + 1);

    let divFrontPersonaje = document.createElement("div");
    divFrontPersonaje.className = "front";

    let divBackPersonaje = document.createElement("div");
    divBackPersonaje.className = "back";

    let mottoPersonaje = document.createElement("p");
    let mottoText = document.createTextNode(getCharactersMotto(character));

    divBackPersonaje.appendChild(mottoPersonaje);
    mottoPersonaje.appendChild(mottoText);

    let imgPersonaje = document.createElement("img");
    imgPersonaje.src = getCharactersImg(character);

    divFrontPersonaje.appendChild(imgPersonaje);

    let namePersonaje = document.createElement("p");
    let nameText = document.createTextNode(getCharactersName(character));

    divPersonaje.appendChild(divFrontPersonaje);
    divPersonaje.appendChild(divBackPersonaje);
    divFrontPersonaje.appendChild(namePersonaje);
    namePersonaje.appendChild(nameText);

    document.body.querySelector(".wrapper").appendChild(divPersonaje);
};


  // Añado otro try para que se coloquen las imágenes de los personajes en entrar a juego
  try {
    const res = await axios.get(`${BASE_URL}/personatges`);

    const all = res.data;

    drawChooseCharacter(all);

    return all;
  } catch (e) {
    console.error(e);
  }

};

/**
 * Creo otro bucle para que se puedan dibujar los personajes también
 * en la página de entrar al juego
 * @param {Array} characters 
 */
function drawChooseCharacter(characters) {
  for (i=0; i <= characters.length - 1; i++) {
    drawChooseCharacterDiv(characters[i], i);
  }
}

/**
 * Creo otra función para colocar las imágenes de los personajes donde
 * corresponde de la página de entrar al juego
 * @param {Array} character 
 * @param {Array} contador 
 */
function drawChooseCharacterDiv(character, contador) {
  let divPersonajes = document.createElement("div");
  divPersonajes.id = "elegirPersonaje" + (contador + 1);

  let imagenPersonaje = document.createElement("img");
  imagenPersonaje.src = getCharactersImg(character);

  divPersonajes.appendChild(imagenPersonaje);

  document.body.querySelector(".contenedorPersonajes").appendChild(divPersonajes);
}

/**
 * Devuelvo la imagen del personaje correspondiente
 * @param {Array} character 
 */
function getCharactersImg(character) {
    return character['img'];
}

/**
 * Devuelvo el nombre del personaje correspondiente
 * @param {Array} character 
 */
function getCharactersName(character) {
    return character['name'];
}

function getCharactersMotto(character) {
  return character['motto'];
}

window.onload = function () {
  // Llamar a la función asíncrona
  getAll();
};

/**
 * Añado función para que al seleccionar un personaje en la
 * página de entrar al juego, este se resalte, y si después
 * se selecciona este, se quite el resaltaado del anterior
 * para ponerse en el actual. También guardo en el localStorage
 * la URL de la imagen del personaje seleccionado
 */
$(document).ready(function() {
  $('body .contenedorPersonajes').on('click', 'div', function() {
    $('.contenedorPersonajes div').removeClass('selected');
    $(this).toggleClass('selected');

    localStorage.setItem("imagenPersonaje", $(this).children('img').attr('src'));
  });

  /**
   * Añado también la función para guardar el nickname introducido,
   * dentro del campo correspondiente, en el localStorage
   */
  $('body form').on('click', '#entrarJuego', function() {
    textoInput = document.getElementById("nombreUsuario").value;

    localStorage.setItem("nickname", textoInput);
  })
});

/* Añado script para cargar nickname e imagen de personaje de localStorage */

let imagenPerfil = document.createElement("img");
imagenPerfil.setAttribute("src", localStorage.getItem("imagenPersonaje"));

let nickname = document.createElement("p");
nickname.innerHTML = localStorage.getItem("nickname");

document.getElementsByClassName("personajeJuego")[0].appendChild(imagenPerfil);
document.getElementsByClassName("personajeJuego")[0].appendChild(nickname);

var canvas = document.getElementById("canvasJuego"),
contexto = canvas.getContext("2d");   

/**
 * Creo una función para detectar en qué zona del canvas se hace
 * click, y las diferentes funciones para dibujar los edificios
 * dentro del canvas
 * */
canvas.addEventListener("mousedown", function(evt) {
    var posicionRaton = getMousePos(canvas, evt);

    // Guardo en variables las referencias DOM de los distintos edificios
    var xibiu = document.getElementById("xibiu");
    var casa = document.getElementById("casa");
    var chalet = document.getElementById("chalet");
    var hotel = document.getElementById("hotel");

    // Añado event listeners para cuando se haga click sobre un edificio
    xibiu.addEventListener("click", construirXibiu, false);
    casa.addEventListener("click", construirCasa, false);
    chalet.addEventListener("click", construirChalet, false);
    hotel.addEventListener("click", construirHotel, false);

    function redondear(coordenada) {
      return (0 - coordenada % 50) + coordenada -1;
    }

    /**
     * Al añadir las funciones para construir los diversos edificios, primero
     * compruebo que disponga del dinero necesario para hacerlo y si lo tiene
     * se lo resto antes de construirlo
     */
    function construirXibiu() {
        if (contarDinero < 300) {
          console.log("Debes tener 300 de dinero para construir el Xibiu.");
        } else {
          contarDinero -= 300;
          var xibiu = new Image();
          xibiu.src = '/src/images/xibiu.png';
          contexto.drawImage(xibiu, redondear(posicionRaton.x), redondear(posicionRaton.y), 101, 101);
          // Cuando pasan 30 segundos, consigue el dinero de la renta
          rentaXibiu = 100;
          window.setInterval(function(){
            contarDinero += rentaXibiu;
            console.log("Xibiu: " + rentaXibiu);
          }, 30000);
      }
    }

    function construirCasa() {     
        if (contarDinero < 750) {
          console.log("Debes tener 750 de dinero para construir una casa.");
        } else {
          contarDinero -= 750;
          var casa = new Image();
          casa.src = '/src/images/casa.png';
          contexto.drawImage(casa, redondear(posicionRaton.x), redondear(posicionRaton.y), 101, 101);
          // Cuando pasan 30 segundos, consigue el dinero de la renta
          rentaCasa = 250;
          window.setInterval(function(){
            contarDinero += rentaCasa;
            console.log("Casa: " + rentaCasa);
          }, 30000);
        }
      }

    function construirChalet() {
        if (contarDinero < 1500) {
          console.log("Debes tener 1500 de dinero para construir un chalet.");
        } else {
          contarDinero -= 1500;
          var chalet = new Image();
          chalet.src = '/src/images/chalet.png';
          contexto.drawImage(chalet, redondear(posicionRaton.x), redondear(posicionRaton.y), 151, 101);
          // Cuando pasan 30 segundos, consigue el dinero de la renta
          rentaChalet = 500;
          window.setInterval(function(){
            contarDinero += rentaChalet;
            console.log("Chalet: " + rentaChalet);
          }, 30000);
      }
    }
    
    function construirHotel() {
        if (contarDinero < 9000) {
          console.log("Debes tener 9000 de dinero para construir un hotel.");
        } else {
          var hotel = new Image();
          contarDinero -= 9000;
          hotel.src = '/src/images/hotel.png';
          contexto.drawImage(hotel, redondear(posicionRaton.x), redondear(posicionRaton.y), 201, 201);
          // Cuando pasan 30 segundos, consigue el dinero de la renta
          rentaHotel = 500;
          window.setInterval(function(){
            contarDinero += rentaHotel;
            console.log("Hotel: " + rentaHotel);
          }, 30000);
      }
    }       
        
}, false);

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

var ancho = canvas.width = 1600,
    alto = canvas.height = 600;

contexto.fillStyle = "#000000";    
contexto.fillRect(0, 0, ancho, alto);
contexto.fillStyle = "rgb(219, 211, 211)";

var filas = 12,
    columnas = 32;

var anchoCelda = 50,
    altoCelda = 50;

for (var i = 0; i < filas; i++) {
    for (var j = 0; j < columnas; j++) {
        contexto.save();
        contexto.translate(j * anchoCelda, i * altoCelda);

        contexto.fillRect(0, 1, anchoCelda - 1, altoCelda - 1);

        contexto.restore();
    }
}        

/* Función para añadir dinero cada X segundos */
var contarDinero = 0;
var dinero = document.getElementById("dinero");
window.setInterval(function(){
    dinero.innerHTML = contarDinero;
    contarDinero++; 
},1000);

/* Función para que suceda un evento aleatorio */
var eventos = ["CRISI: Todas tus CASA han sido derrumbadas","PROMOCIÓ: Todos los XIBIUS se han convertido en CASA","INFRACCIÓ: Has perdido 500 de dinero al tener 1 XIBIU","PREMI: Has ganado 1000 de dinero al ser todas tus construcciones superior a XIBIU"];

onload = function() {eventoAleatorio()};
function eventoAleatorio(chances) {
    var sum = 0;
    chances.forEach(function(chance) {
        sum+=chance;
    });
    var rand = Math.random();
    var chance = 0;
    for(var i=0; i<chances.length; i++) {
        chance+=chances[i]/sum;
        if(rand<chance) {
            return i;
        }
    }

    return -1;
}
console.log(eventos[eventoAleatorio([1/4,1/4,1/4,1/4])+1]);