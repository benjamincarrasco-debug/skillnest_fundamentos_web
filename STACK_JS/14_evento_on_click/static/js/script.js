
function toggleLogin(elemento) {
    if (elemento.innerText === "Iniciar sesión") {
        elemento.innerText = "Cerrar sesión";
    } else {
        elemento.innerText = "Iniciar sesión";
    }
}

function mostrarAlertaPerfil() {
    alert("¡Cargando el perfil del usuario!");
}

function aumentarMeGusta(elemento) {
    let cantidadLikes = parseInt(elemento.innerText);
    
    cantidadLikes++;
    
    elemento.innerText = cantidadLikes + " Me gusta";
}