console.log("conexion exitosa")

//seleccion de titulo con  query Selector
let title = document.querySelector("#title");
console.log(title); // <h1 id="title">¡Hola, mundo!</h1>
console.log(`El contenido de el titulo es: ¡hola mundo!`)
//seleccionar un parrafo con la etiqueta 
let parrafo = document.querySelector("p")
console.log(parrafo);

let logoImg = document.querySelector(".nav img");
console.log(logoImg); // <img src="logo.png" alt="logo">

let parrafos = document.querySelector(".texto");
console.log(parrafo.textContent); // "Este es el primer párrafo."

let boton = document.querySelector("#boton-inexistente");
console.log(boton); // null

if (boton !== null) {
    boton.textContent = "Nuevo Texto";
} else {
    console.log("El botón no existe.");
}

//tarea:
/*Crear un boton y aplicar condiciones al igual que ejemplo....
-debe cambiar su texto al momento de hacerle clic
- Debe activarse un hover js cambiando el color de fondo 
 */
const botonCambiado = document.querySelector("#boton");

botonCambiado.addEventListener("click", function () {
    if (this.textContent === "Haz click") {
        this.textContent = "cabio el texto"
        this.style.backgroundColor = "black"
        this.style.color = "red"
    } else {
        this.textContent = "Haz click"
        this.style.backgroundColor = "white"
        this.style.color = "black"
    }
})
