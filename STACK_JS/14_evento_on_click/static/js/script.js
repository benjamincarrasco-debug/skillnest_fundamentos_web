
function Resgistro(elemento) { 
    if (elemento.innerText === "Iniciar sesión") {
        elemento.innerText = "Cerrar sesión";
    } else {
        elemento.innerText = "Iniciar sesión";
    }
}

function mostrarAlertaPerfil() {
    alert("¡Cargando el perfil del usuario!");
}
let botonMegusta = document.getElementById("megusta")
let megustas = 12

botonMegusta.addEventListener ("click", function(){
    megustas++
    this.innerText = ${megustas} Me gustas;
})