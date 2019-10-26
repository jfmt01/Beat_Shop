document.querySelector("#button").aadEventListener ("click", IniciarSesion);

function IniciarSesion (){
    var sEmail = "";
    var sPass = "";

    sEmail = document.querySelector ("txtCorreo").value;
    sPass = document.querySelector ("txtContraseña").value;

    bAccess = credenciales (sEmail, sPass);

    if(bAccess == true){
        ingresar( window.location.href"../home.html");
    }
}

function ingresar(){

    
}

