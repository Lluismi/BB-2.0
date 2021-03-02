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

