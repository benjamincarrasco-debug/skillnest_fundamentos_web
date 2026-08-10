console.log("¡Hola! Este es un ejemplo de uso de 'this' en JavaScript.");
// Seleccionamos el botón por su id
let boton = document.getElementById("cambiarTexto");
let textoBoton = boton.getElementById("cambiarTexto");
// Agregamos un evento 'click' al botón
boton.addEventListener("click", function () {
    alert("¡Has hecho clic en el botón!");
   // Cambia el texto del botón usando `this`
   this.innerText = "¡Texto cambiado!";
});
// Seleccionamos todas las imágenes con la clase 'imagenEliminar'
let imagenes = document.querySelectorAll(".imagenEliminar");

// Agregamos un evento 'click' a cada imagen
imagenes.forEach(function (imagen) {
   imagen.addEventListener("click", function () {
       // Eliminamos la imagen al hacer clic
       this.remove();
   });
});