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

    function validar(){
        var username = document.getElementById('username').value;
        var confirmusername = /^[u]{1}[0-9]{6}[A-Z]{1}$/;
        var loginResult = confirmusername.test(username);
        alert("login:"+ loginResult );

        var password = document.getElementById('password').value;
        var confirmpassword = /^[#\w-]{6,10}$/;
        var passwordresult = confirmpassword.test(password);
        alert("password:"+ passwordresult );
    }

    function mostrarContrasena(){
        var tipo = document.getElementById("password");
        if(tipo.type == "password"){
            tipo.type = "text";
        }else{
            tipo.type = "password";
        }
    }