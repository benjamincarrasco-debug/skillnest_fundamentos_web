console.log("conexion exitosa")
// 💻 Crea un programa en JavaScript que recorra los números del 1 al 100.
// 📋 Aplica las siguientes reglas dentro del bucle:
// Si un número es divisible por 3, muestra “Fizz”.
// Si un número es divisible por 5, muestra “Buzz”.
// Si un número es divisible por ambos 3 y 5, muestra “FizzBuzz”.
// Si no cumple ninguna de estas condiciones, muestra el número tal cual.
function ejecutar() {
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        alert("FizzBuzz");
    } else if (i % 3 === 0) {
        alert("Fizz");
    } else if (i % 5 === 0) {
        alert("Buzz");
    } else {
        alert(i);
    }
}
}