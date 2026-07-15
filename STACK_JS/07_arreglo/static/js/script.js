console.log("Hola mundo");
function compra() {
let compras = [5000, 2300, 12000, 4500, 3000];
let alumnos = ["Ana", "Pedro", "María", "José"];
let datos = ["Carlos", 18, true];

let mensaje = `${alumnos[2]} tiene ${datos[1]} años y su estado es ${datos[2]}.`;
alert(mensaje);
}
//La propiedad .length devuelve la cantidad de elementos.
let frutas = ["manzana", "Pera",  "kiwi", "Sandia"];
let ultima = frutas[frutas.length - 1];
//variable.length - 1 siempre trae el ultimo elemento
console.log(ultima);


//desafio
//Del arreglo ["Hola", "a", "todos" ,"los" ,"programadores!"]
//Mostrar el penultimo elemento y el último concatenado.
function desafio1() {
let arreglo = ["Hola", "a", "todos" ,"los" ,"programadores!"];
let penultimo = arreglo[arreglo.length - 2];
let ultimo = arreglo[arreglo.length - 1];
alert(penultimo + " " + ultimo);
}

let listaTareas = ["barrer", "Cocinar", "Realizar compras"];
function manipularArreglo() {
    //Modificar un elemto del arreglo
    listaTareas[1] = "construir";
    //Añadir un elemento al final del lista
    let  eliminado = listaTareas.pop();
    listaTareas.unshift("boxiar");
    listaTareas.push("cocinar");
    eliminado += " - " + listaTareas.shift();
    //Mostrar resultado
    alert(listaTareas.join("-"));
    alert("Elementos del arreglo: " + eliminado);
}

function ejercicio1() {
    let edades = [25, 28, 10, 24, 15];
    let ultima = edades[edades.length - 1]
    alert(`Primea edad: ${edades[0]}
        \n Ultima edad: ${ultima}
        \n edades totales: ${edades.length}`)
}


function ejercicio2() {
    let nombres = ["messi", "Ariel", "Rafhael", "yopo", "alejanfro"]
    for (let i = 0; i < nombres.length; i++) {

        alert(nombres[i]);

    }
}
