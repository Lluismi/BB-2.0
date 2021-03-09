    /* Carga el contenido html de header.html en su respectiva etiqueta */
    $(document).ready(() => {
        $("header").load("header.html");
      });
    
    /* Carga el contenido html de footer.html en su respectiva etiqueta */
    $(document).ready(() => {
    $("footer").load("footer.html");
    });

    function login(){
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

      function validacio()
      {
        var usuari_admin = "admin";
        var contrasenya_admin = "admin1234";
        var usuari = document.getElementById('username').value;
        var contrasenya = document.getElementById('password').value;
        if ((usuari === usuari_admin) && (contrasenya === contrasenya_admin)) {
          window.open("admin.html");
        }
      }

$('#myModal').on('shown.bs.modal', function () {
$('#myInput').trigger('focus')
})