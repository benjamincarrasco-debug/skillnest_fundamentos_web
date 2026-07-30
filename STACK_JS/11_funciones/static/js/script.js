console.log("conexion exitosa")
function saludar() {
   console.log("¡Hola, bienvenido!");
}
//  🎚️ Funciones con parámetros
//El parámetro recibe un valor para trabajar en la funcion.
//El parametro recibe el tipo de dato al momento de tomar valor.
saludar();
function saludar(nombre) {//Ejecución de la funcion con parámetros. ("argumento")
  alert("¡Hola, " + nombre + "!");
}
saludar("Luis");
saludar("Ana");
//🎯 Funciones con return

function encontrarMaximo(a, b) {
   if (a > b) {
       return a;
   } else {
       return b;
   }
}
let numero1 = 10;
let numero2 = 7;
let maximo = encontrarMaximo(numero1, numero2);
alert("El número mayor entre", numero1, "y", numero2, "es:", maximo);
//tarea
//crear una funcion que reciba 3 parametros, a ,b y c, debe sumar a+ b
//  y el restarlo po c.devolver el valor final y mostrar con un alert.}
function calcular(){

}