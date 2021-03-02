/* Añadir y quitar la clase "responsive" al topnav cuando el usuario hace click
    en el icono */
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
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

var esesborrar;
var modificarconstrucciones;

window.onload = function (){
    verconstrucciones();
};

function verconstrucciones(){
    fetch('http://localhost:3000/construcciones')
    .then(response => response.json())
    .then(json => pintartodos(json))
    function pintartodos(todos){
        console.log(todos);
        todos.map((construcciones,i) => {
            console.log(construcciones);
          var contenedor= document.createElement("div");
          var btn= document.createElement("button");
          btn.innerHTML = "Eliminar";
          var btn2= document.createElement("button");
          btn2.innerHTML = "Modificar";
          btn.onclick = function () {
              const ul = this.parentNode.parentNode;
              ul.removeChild(this.parentNode);
              esesborrar=construcciones.id;
              esborrarconstruccio();
              location.reload();
          };
          btn2.onclick = function () {
              modificarconstrucciones=construcciones.id;
              document.getElementById("vercrear").style="display:none";
              document.getElementById("vermodificar").style="display:block";
  
        };
          contenedor.innerHTML=construcciones.id + " | " + construcciones.nom + " | preu: " + construcciones.preu + " | Alquiler: " + construcciones.alquiler + " </br>";
          contenedor.appendChild(btn);
          contenedor.appendChild(btn2);
          vercrear.appendChild(contenedor);
  
      })
    }
}

function crearconstruccio(){
    var nom=document.getElementById("nom").value;
    var preu=document.getElementById("preu").value;
    var alquiler=document.getElementById("alquiler").value;

      if((nom=="") || (preu=="") || (alquiler=="")){
        alert("Completa tots els camps");
      }else{
          alert("Construcció creada");
          novaconstruccio(nom,preu,alquiler);
          window.location.href = "admin.html";
      }
  }

  function novaconstruccio(name,preu,alquiler) {
    fetch('http://localhost:3000/construcciones', {
        method: 'POST',
        body: JSON.stringify({
          nom: name,
          preu: preu,
          alquiler: alquiler
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
}

function esborrarconstruccio(){
    fetch('http://localhost:3000/construcciones/'+esesborrar, {
        method: 'DELETE'
      }).then(response => { 
        response.json() 
     })
  }

function modificarconstruccio() {
    var nounom=document.getElementById("newnom").value;
    var noupreu=document.getElementById("newpreu").value;
    var noualquiler=document.getElementById("newalquiler").value;
    
        if((nounom=="")(noupreu=="")(noualquiler=="")){
            alert("Completa tots els camps");
        }else{
            alert("Construcció modificada");
            contrucciomodificada(nounom,noupreu,noualquiler);

        }
}

function contrucciomodificada(nounom,noupreu,noualquiler) {
fetch('http://localhost:3000/construcciones/'+modificarconstrucciones, {
    method: 'PUT',
    body: JSON.stringify({
    nom: nounom,
    preu:noupreu,
    alquiler:noualquiler
    }),
    headers: {
    "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json())
window.location.href = "admin.html";
}
