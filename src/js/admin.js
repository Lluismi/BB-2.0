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
              var cajaconstrucciones= document.createElement("p");
              var eliminarboton= document.createElement("button");
              eliminarboton.innerHTML = "Eliminar";
              var modificarboton= document.createElement("button");
              modificarboton.innerHTML = "Modificar";
              eliminarboton.onclick = function () {
                  const ul = this.parentNode.parentNode;
                  ul.removeChild(this.parentNode);
                  esesborrar=construcciones.id;
                  esborrarconstruccio();
                  location.reload();
              };
              modificarboton.onclick = function () {
                  modificarconstrucciones=construcciones.id;
                  document.getElementById("vercrear").style="display:none";
                  document.getElementById("vermodificar").style="display:block";
      
            };
              cajaconstrucciones.innerHTML=construcciones.id + " | " + construcciones.nom + " | preu: " + construcciones.preu + " | Alquiler: " + construcciones.alquiler + " </br>";
              cajaconstrucciones.appendChild(eliminarboton);
              cajaconstrucciones.appendChild(modificarboton);
              ver.appendChild(cajaconstrucciones);
      
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

  function novaconstruccio(nom,preu,alquiler) {
    fetch('http://localhost:3000/construcciones', {
        method: 'POST',
        body: JSON.stringify({
          nom: nom,
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
      fetch('http://localhost:3000/construcciones/'+ esesborrar, {
          method: 'DELETE'
        }).then(response => { 
          response.json() 
      })
    }

  function modificarconstruccio() {
    var newnom=document.getElementById("newnom").value;
    var newpreu=document.getElementById("newpreu").value;
    var newalquiler=document.getElementById("newalquiler").value;
    if((newnom=="")||(newpreu=="")||(newalquiler=="")){
      alert("Completa tots els camps");
    }else{
        alert("Construcció modificada");
        construcciomodificada(newnom,newpreu,newalquiler);
        
    }
  }
  function construcciomodificada(newnom,newpreu,newalquiler) {
    fetch('http://localhost:3000/construcciones/'+modificarconstrucciones, {
      method: 'PUT',
      body: JSON.stringify({
        nom: newnom,
        preu: newpreu,
        alquiler: newalquiler
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    window.location.href = "admin.html";
  }