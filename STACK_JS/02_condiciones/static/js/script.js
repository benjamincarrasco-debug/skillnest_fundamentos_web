//✅ Ejercicio 1: Sistema de descuento
// 📝 Enunciado
// Una tienda realiza descuentos según el monto de compra:
// Si la compra es mayor o igual a $50.000 → 20% descuento
// Si la compra es mayor o igual a $30.000 → 10% descuento
// Si la compra es menor a $30.000 → sin descuento
// El programa debe solicitar:
// Nombre del cliente
// Monto de compra
// Luego mostrar:
// Descuento aplicado
// Total a pagar
function ejercicio1() {
    let nombreCliente = prompt("Ingrese su nombre:");
    let montoCompra = parseFloat(prompt("Ingrese el monto de su compra:"));
if (isNaN(montoCompra) || montoCompra < 0) {
        alert("Por favor, ingrese un monto válido.");
        return;
    }
    else if (montoCompra >= 50000) {
        let descuento = montoCompra * 0.20;
        let totalPagar = montoCompra - descuento;
        alert(`Cliente: ${nombreCliente}\nDescuento aplicado: $${descuento.toFixed(2)}\nTotal a pagar: $${totalPagar.toFixed(2)}`);
    }
}
// ✅ Ejercicio 2: Acceso a evento
// 📝 Enunciado
// Una persona puede ingresar a un evento si:
// Tiene 18 años o más
// O viene acompañada por un adulto
// Solicitar:
// Edad
// Si viene acompañado (si o no)
// Mostrar:
// “Acceso permitido”
// o “Acceso denegado”
function ejercicio2() {
    let edad = parseInt(prompt("Ingrese su edad:"));
    let acompañado = prompt("¿Viene acompañado por un adulto? (si/no)").toLowerCase();
    if (edad >= 18 || acompañado === "si") {
        alert("Acceso permitido");
    } else {
        alert("Acceso denegado");
    }
}
// ✅ Ejercicio 3: Clasificación de temperatura
// 📝 Enunciado
// Solicitar una temperatura y clasificar:
// Menor a 10 → “Hace frío”
// Entre 10 y 24 → “Temperatura agradable”
// 25 o más → “Hace calor”
// Además:
// Si la temperatura supera los 35 grados, mostrar una alerta adicional:
//  “Temperatura extrema”.
function ejercicio3() {
    let temperatura = parseFloat(prompt("Ingrese la temperatura:"));
    if (temperatura < 10) {
        alert("Hace frío");
    } else if (temperatura >= 10 && temperatura <= 24) {
        alert("Temperatura agradable");
    } else {
        alert("Hace calor");
        if (temperatura > 35) {
            alert("Temperatura extrema");
        }
    }
}
// ✅ Ejercicio 4: Verificación de administrador
// 📝 Enunciado
// Solicitar:
// Nombre de usuario
// Contraseña
// Condiciones:
// Usuario correcto: admin
// Contraseña correcta: 12345
// Casos:
// Si ambos son correctos → “Bienvenido administrador”
// Si usuario es correcto pero contraseña incorrecta → “Contraseña incorrecta”
// Si usuario no existe → “Usuario no encontrado”
function ejercicio4() {
    let usuario = prompt("Ingrese su nombre de usuario:");
    let contraseña = prompt("Ingrese su contraseña:"); 
    if (usuario === "admin" && contraseña === "12345") {
        alert("Bienvenido administrador");
    } else if (usuario === "admin") {
        alert("Contraseña incorrecta");
    } else {
        alert("Usuario no encontrado");
    }
}
// ✅ Ejercicio 5: Sistema de aprobación
// 📝 Enunciado
// Solicitar:
// Nombre del estudiante
// Nota 1
// Nota 2
// Nota 3
// Calcular promedio.
// Condiciones:
// Promedio 6.0 o superior → “Aprobado con excelencia”
// Promedio entre 4.0 y 5.9 → “Aprobado”
// Menor a 4.0 → “Reprobado”
function ejercicio5() {
    let nombreEstudiante = prompt("Ingrese el nombre del estudiante:");
    let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
    let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
    let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

    let promedio = (nota1 + nota2 + nota3) / 3;

    if (promedio >= 6.0) {
        alert(`Estudiante: ${nombreEstudiante}\nPromedio: ${promedio.toFixed(2)}\nEstado: Aprobado con excelencia`);
    } else if (promedio >= 4.0) {
        alert(`Estudiante: ${nombreEstudiante}\nPromedio: ${promedio.toFixed(2)}\nEstado: Aprobado`);
    } else {
        alert(`Estudiante: ${nombreEstudiante}\nPromedio: ${promedio.toFixed(2)}\nEstado: Reprobado`);
    }
}   