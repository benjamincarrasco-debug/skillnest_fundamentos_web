const boton = document.getElementById("miBoton");

boton.addEventListener("mouseover", function () {
    console.log("El ratón está sobre el botón");
    boton.style.backgroundColor = "blue";
});

boton.addEventListener("mouseout", function () {
    console.log("El ratón ha salido del botón");
    boton.style.backgroundColor = "red";
});

//tarea
/*
crear dos botones con evento onmouseaver y onmouseout
- cambiar el texto
-cambiar el color de fondo y color de texto del segundo boton.
*/
const boton1 = document.getElementById("miBoton1");

boton1.addEventListener("mouseover", function () {
    this.innerText = `se cambio el texto`;
});

const boton2 = document.getElementById("miBoton2");

boton2.addEventListener("mouseover", function () {
    this.innerText = `se cambio el texto`
    this.style.backgroundColor = "green";
    this.style.color = "red";
});