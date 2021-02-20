/* Añadir y quitar la clase "responsive" al topnav cuando el usuario hace click
    en el icono */
    function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "navbar") {
          x.className += " responsive";
      } else {
          x.className = "navbar";
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

/* Variables con los criterios de validación */
var criterinom = /^[a-zA-Z]{1,20}$/;
var criterillinatges = /^[a-zA-Z]{1,30}$/;
var critericorreu = /^([a-zA-Z]+)@([a-z]{1,20})\.(.com|.es|.net)$/;
var critericonfirmcorreu = /^([a-zA-Z]+)@([a-z]{1,20})\.(.com|.es|.net)$/;
var criteripassword = /^[#\w-]{6,10}$/;
var critericonfirmpassword = /^[#\w-]{6,10}$/;
var criteriusername = /^[u]{1}[0-9]{6}[A-Z]{1}$/;
var criteritelefono = /^[6,9]{1}[0-9]{2}-[0-9]{6}$/;
 
/* 
  Función que llama a las funciones una a una 
  y crea un registro para enseñarlo por la consola.
*/
function validar(){

    nom();
    llinatges();
    correu();
    confirmcorreu();
    password();
    confirmpassword();
    username();
    telefono();

    var registro = {
      nom: document.getElementById('nom').value,
      llinatges: document.getElementById('llinatges').value,
      correu: document.getElementById('correu').value,
      confirmcorreu: document.getElementById('confirmcorreu').value,
      password: document.getElementById('password').value,
      confirmpassword: document.getElementById('confirmpassword').value,
      username: document.getElementById('username').value,
      telefono: document.getElementById('telefono').value,
    };

    var R_nom = criterinom.test(registro.nom);
    var R_llinatges = criterillinatges.test(registro.llinatges);
    var R_correu = critericorreu.test(registro.correu);
    var R_confirmcorreu = critericonfirmcorreu.test(registro.confirmcorreu);
    var R_password = criteripassword.test(registro.password);
    var R_confirmpassword = critericonfirmpassword.test(registro.confirmpassword);
    var R_username = criteriusername.test(registro.username);
    var R_telefono = criteritelefono.test(registro.telefono);


    if (R_nom == true && R_llinatges == true && R_correu == true && R_confirmcorreu == true && R_password == true &&  R_confirmpassword == true && R_username == true && R_telefono == true){
    
    console.info(registro)
  }
}

/* Función que valida el nombre del usuario */
function nom() {
  let validado = true;
  var nom = document.getElementById('nom').value;
  if (nom.length > 20){
    validado = false;
    document.getElementById("e_nom").innerHTML = "El nom conté més de 20 caracters"
  }
}

/* Función que valida los apellidos del usuario */
function llinatges() {
  let validado = true;
  var llinatges = document.getElementById('llinatges').value;
  if (llinatges.length > 30){
    validado = false;
    document.getElementById("e_llinatges").innerHTML = "El llinatges conté més de 30 caracters"
  }
}

/* Función que valida el correo del usuario */
function correu() {
  let validado = true;
  var correu = document.getElementById('correu').value;
  var resultatcorreu = critericorreu.test(correu);
  if (resultatcorreu != true){
    validado = false;
    document.getElementById("e_correu").innerHTML = "El correu no compleix amb els criteris deguts: Caràcters en majúscules i minúscules, @ (Només una), màxim 20 caràcters en minúscula, punt (Només un punt), 'com', 'net', o 'és'."
  }
}

/* Función que confirma si los correos son los mismos */
function confirmcorreu() {
  let validado = true;
  var correu = document.getElementById('correu').value;
  var confirmcorreu = document.getElementById('confirmcorreu').value;
  if (correu != confirmcorreu || confirmcorreu != correu){
    validado = false;
    document.getElementById("e_confirmcorreu").innerHTML = "Els correus electrònics no coincideixen."
  }
}

/* Función que valida la contraseña del usuario */
function password() {
  let validado = true;
  var password = document.getElementById('password').value;
  var resultatpassword = criteripassword.test(password);
  if (resultatpassword != true) {
    validado = false;
    document.getElementById("e_password").innerHTML = "La contrasenya no compleixen amb els criteris deguts: Qualsevol caràcter alfanumèric, majúscules, minúscules, guions ('-'). "
  }
}

/* Función que confirma si las contraseñas son las mismas */
function confirmpassword() {
  let validado = true;
  var password = document.getElementById('password').value;
  var confirmpassword = document.getElementById('confirmpassword').value;
  if (password != confirmpassword || confirmpassword != password) {
    validado = false;
    document.getElementById("e_confirmpassword").innerHTML = "Les contrasenyes no coincideixen."
  }
}

/* Función que valida el username del usuario */
function username() {
  let validado = true;
  var username = document.getElementById('username').value;
  var resultatusername = criteriusername.test(username)
  if (resultatusername != true){
    validado = false;
    document.getElementById("e_username").innerHTML = "El username no cumpleix amb els criteris: u272829N "
  }
}

/* Función que valida el telefono del usuario */

function telefono() {
  let validado = true;
  var telefono = document.getElementById('telefono').value;
  var resultatelefono = criteritelefono.test(telefono)
  if (resultatelefono != true){
    validado = false;
    document.getElementById("e_telefono").innerHTML = "El número de telèfon ha de començar per '6' o '9', seguit de 2 numeros qualsevol, un guió ('-') i 6 numeros més."
  }
}

/* Función que muestra la password */
function mostrarPassword(){
  let tipo = document.getElementById("password");
  if(tipo.type == "password"){
      tipo.type = "text";
  }else{
      tipo.type = "password";
  }
}

/* Función que muestra la confirmpassword */
function mostrarconfirmpassword(){
  let tipo = document.getElementById("confirmpassword");
  if(tipo.type == "password"){
      tipo.type = "text";
  }else{
      tipo.type = "password";
  }
}

/* API que coge los paises y los añade uno a uno en el dropdown */
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var paisos = JSON.parse(xhr.responseText)
      var añadirpaisos = document.getElementById("paisos");
      paisos.forEach(pais => {
        let opcio = document.createElement("option")
        opcio.value = pais.name;
        opcio.textContent = pais.name;
        añadirpaisos.appendChild(opcio); 
      })
    }
};
xhr.open("GET", "https://restcountries.eu/rest/v2/all?fields=name", true);
xhr.send();