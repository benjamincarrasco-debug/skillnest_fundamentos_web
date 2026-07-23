console.log("Hola mundo");
function compra() {
    let compras = [5000, 2300, 12000, 4500, 3000];
    let alumnos = ["Ana", "Pedro", "María", "José"];
    let datos = ["Carlos", 18, true];

    let mensaje = `${alumnos[2]} tiene ${datos[1]} años y su estado es ${datos[2]}.`;
    alert(mensaje);
}
//La propiedad .length devuelve la cantidad de elementos.
let frutas = ["manzana", "Pera", "kiwi", "Sandia"];
let ultima = frutas[frutas.length - 1];
//variable.length - 1 siempre trae el ultimo elemento
console.log(ultima);


//desafio
//Del arreglo ["Hola", "a", "todos" ,"los" ,"programadores!"]
//Mostrar el penultimo elemento y el último concatenado.
function desafio1() {
    let arreglo = ["Hola", "a", "todos", "los", "programadores!"];
    let penultimo = arreglo[arreglo.length - 2];
    let ultimo = arreglo[arreglo.length - 1];
    alert(penultimo + " " + ultimo);
}

let listaTareas = ["barrer", "Cocinar", "Realizar compras"];
function manipularArreglo() {
    //Modificar un elemto del arreglo
    listaTareas[1] = "construir";
    //Añadir un elemento al final del lista
    let eliminado = listaTareas.pop();
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

//recorrer un arreglo
function recorrerArreglo() {
    let notas = [6.2, 5.8, 4.1, 7.0, 3.0, 6.9];

    for (let i = 0; i < notas.length; i++) {

        alert(`Mostrar Notas ${i + 1} de ${notas[i]}`);

    }
}
//sumar elementos dentro de un bucle
function buscarElemntos() {
    let ventas = [10000, 5000, 12000, 8000];

    let total = 0;

    for (let i = 0; i < ventas.length; i++) {

        total += ventas[i]; //va sumando las ventas
    }
    alert(`El resultado final es: ${total}`);
}

//calcular un promedio
function calcularPromedio() {
    let notas = [5.8, 6.2, 4.9, 6.5];

    let suma = 0;

    for (let i = 0; i < notas.length; i++) {

        suma += notas[i];

    }
    let promedio = suma / notas.length;
    alert(`El promedio de las notas: ${notas.join(' - ')}\nPromedio: ${promedio}`);
}

//condiciones dentro de bucle
function buscarMayoresEdad() {
    let edades = [12, 15, 18, 20, 25, 35, 50, 5];
    let mayores = [];
    for (let i = 0; i < edades.length; i++) {
        //condicion para buscar mayores de 18
        if (edades[i] >= 18) {
            mayores.push(edades[i]);
        }

    }
    alert(`De la lista de edades: ${edades.join(' / ')}\nlos mayores son: ${mayores.join(' / ')}`)
}
//Encontrar el menor y el mayor
function encontrarMayor() {

    let numeros = [10, 35, 7, 90, 22, 90, 2];
    let mayor = numeros[0];
    let menor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
        else if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
        else {
            console.log(`valor repetido: ${numeros[i]}`)
        }
    }
    alert(`De los numeros ${numeros.join(' / ')}\nEl mayor es: ${mayor}\nEl menor es: ${menor}`);
}
//ejemplo completo
//Tarea: Unir los console.log en una alerta
//Eliminar el ultimo y mostrarlo.
//Añadir dos valores nuevos con .push (prompt)
function calcularVentas() {
    let ventas = [5000, 8000, 12000, 3000, 10000, 9000, 4000];
    let total = 0;
    let mayores =[];
    let contadorVentas = 0;
    let mayor = ventas[0];
    let valorEliminado = ventas.pop();
    let valor1 = parseInt(prompt("Ingrese un nuevo valor de venta:"));
    let valor2 = parseInt(prompt("Ingrese otro nuevo valor de venta:"));
    ventas.push(valor1, valor2);
    for (let i = 0; i < ventas.length; i++) {
        total += ventas[i];
    }
    if (ventas [i] < mayor) {
        mayor = ventas[i];
    }
    if (ventas[i] > 10000) {
        mayores.push(ventas[i]);
        contadorVentas++;
    }
alert(`Total ventas: ${total} Mayor: ${mayor}
promedio: ${total / ventas.length}
valores sobres $10.000: ${mayores.join(` / `)}
conteo de mayores: ${contadorVentas}
valor Eliminado: ${valorEliminado}
`)

}