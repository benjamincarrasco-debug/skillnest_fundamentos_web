console.log("conexion exitosa");
function cambiartexto() {
    let titulo = "Hola, Bienvenido"
    if (document.getElementoById("titulo").innerText == titulo) {
        document.getElementoById("titulo").innerText = "has cambiado de texto"
    }
}