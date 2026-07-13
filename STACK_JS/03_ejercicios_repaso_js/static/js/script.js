console.log("conexion exitosa")
// Ejercicio 1: Calculadora de Envío
// Enunciado
// Una empresa de despacho cobra el envío dependiendo del peso del paquete.

// Solicitar:

// Nombre del cliente
// Peso del paquete (kg)
// Condiciones:

// Hasta 2 kg
// Más de 2 kg y hasta 5 kg
// Más de 5 kg y hasta 10 kg
// Más de 10 kg
// El programa debe indicar:
function ejercicio1() {
    let nombreCliente = prompt("Ingresar nombre de cliente");
    let peso = parseInt(promt("Ingresar peso de paquete:"));
    //condiciones
    if (peso > 0 && peso < 2) {
        mensaje = `paquete pesa: ${ valorDespacho * peso }
Valor despacho: ${ valorDespacho * peso }`;
    } else if (peso > 2 && peso < 5) {
        mensaje = `paquete pesa: ${ valorDespacho * peso }
Valor despacho: ${ valorDespacho * peso }`;
    } else if (peso > 5 && peso < 10) {
        mensaje = `paquete pesa: ${ valorDespacho * peso }
Valor despacho: ${ valorDespacho * peso }`;
    } else if (peso > 10) {
        mensaje = `paquete pesa: ${ valorDespacho * peso }
Valor despacho: ${ valorDespacho * peso }`;
    }

}
// Nombre del cliente
// Categoría del envío
// Valor correspondiente al despacho

// Ejercicio 2: Acceso a Biblioteca
// Enunciado
// Una biblioteca posee dos tipos de usuarios:

// Estudiante
// Profesor
// Solicitar:

// Tipo de usuario
// Cantidad de libros solicitados
// Condiciones:

// Cada tipo de usuario posee un límite distinto de préstamos.

// El programa debe indicar:

// Si el préstamo está permitido.
// Si supera el límite permitido.
// Mostrar un mensaje diferente según el tipo de usuario.
// Utilizar operadores lógicos para realizar las validaciones.
function ejercicio2(){
    let tipo_usuario = prompt("Ingresar el tipo de usuario");
    let cantidad_libros = parseInt(prompt("Ingresar cantidad de libros solicitados"));
    let message = "";
    if (tipo_usuario === estudiante && cantidad_libros > 0 && cantidad_libros < 5){
        message = `Préstamo permitido para estudiante.`
    }else if (tipo_usuario === profesor && cantidad_libros > 0 && cantidad_libros < 10){
        message = ``}
    alert(message);
}
// Ejercicio 3: Clasificación Deportiva
// Enunciado
// Solicitar:

// Nombre del participante
// Edad
// Clasificar al participante según su edad.

// Debe existir al menos cuatro categorías distintas.

// Finalmente mostrar:

// Nombre
// Edad
// Categoría asignada
function ejercicio3() {
let nombre_participante = prompt("Ingresar nombre del participante");
let edad = parseInt(prompt("Ingresar edad del participante"));
let categoria = "categoría no asignada";
if (edad >= 0 && edad <= 12) {
    categoria = "Infantil";
} else if (edad > 12 && edad <= 18) {
    categoria = "Juvenil";
} else if (edad > 18 && edad <= 35) {
    categoria = "Adulto";
} else {
    categoria = "Senior";q
}
alert(`Nombre: ${nombre_participante}\nEdad: ${edad}\nCategoría: ${categoria}`);
}
// Ejercicio 4: Sistema de Bonificación
// Enunciado
// Una empresa entrega bonos según los años trabajados.

// Solicitar:

// Nombre del trabajador
// Años de servicio
// Clasificar según distintos rangos de antigüedad.

// Mostrar:

// Nombre
// Nivel de antigüedad
// Mensaje indicando si recibe o no bonificación.
function ejercicio4() {
let nombre_trabajador = prompt("Ingresar nombre del trabajador");
let años_servicio = parseInt(prompt("Ingresar años de servicio del trabajador"));
let nivel_antiguedad = "Nivel de antigüedad no asignado";
let mensaje_bonificacion = "No recibe bonificación";
    if (años_servicio >= 0 && años_servicio < 5) {
        nivel_antiguedad = "Junior";
    } else if (años_servicio >= 5 && años_servicio < 10) {
        nivel_antiguedad = "Semi-Senior";
        mensaje_bonificacion = "Recibe bonificación";
    } else if (años_servicio >= 10 && años_servicio < 20) {
        nivel_antiguedad = "Senior";
        mensaje_bonificacion = "Recibe bonificación";
    }
    alert(`Nombre: ${nombre_trabajador}\nNivel de antigüedad: ${nivel_antiguedad}\nMensaje: ${mensaje_bonificacion}`);
}
// Ejercicio 5: Evaluación de Velocidad
// Enunciado
// Solicitar:

// Nombre del conductor
// Velocidad registrada
// Condiciones:

// Clasificar la velocidad en distintos rangos.

// Además:

// Si supera un determinado límite, mostrar un mensaje indicando que ha excedido la velocidad permitida.

// Mostrar:

// Nombre del conductor
// Velocidad
// Clasificación obtenida
// Requisitos Técnicos
// Cada ejercicio debe cumplir con:

// Una función independiente.
// Uso de prompt().
// Uso de alert().
// Uso de variables.
// Uso de if.
// Uso de else if.
// Uso de else.
// Uso de operadores de comparación.
// Uso de operadores lógicos cuando corresponda.
// Desafío Extra
// Agregar una o más de las siguientes mejoras:

// Validación de campos vacíos.
// Validación de datos numéricos.
// Mostrar mensajes utilizando emojis.
// Mostrar resultados dentro del HTML utilizando innerHTML.
// Cambiar colores o estilos mediante JavaScript según el resultado obtenido.Ejercicio 1: Calculadora de Envío
// Enunciado
// Una empresa de despacho cobra el envío dependiendo del peso del paquete.

// Solicitar:

// Nombre del cliente
// Peso del paquete (kg)
// Condiciones:

// Hasta 2 kg
// Más de 2 kg y hasta 5 kg
// Más de 5 kg y hasta 10 kg
// Más de 10 kg
// El programa debe indicar:

// Nombre del cliente
// Categoría del envío
// Valor correspondiente al despacho
// Ejercicio 2: Acceso a Biblioteca
// Enunciado
// Una biblioteca posee dos tipos de usuarios:

// Estudiante
// Profesor
// Solicitar:

// Tipo de usuario
// Cantidad de libros solicitados
// Condiciones:

// Cada tipo de usuario posee un límite distinto de préstamos.

// El programa debe indicar:

// Si el préstamo está permitido.
// Si supera el límite permitido.
// Mostrar un mensaje diferente según el tipo de usuario.
// Utilizar operadores lógicos para realizar las validaciones.
function ejercicio5() {
    let nombre_conductor = prompt("Ingresar nombre del conductor");
    let velocidad = parseInt(prompt("Ingresar velocidad registrada (km/h)"));
    let clasificacion = "Clasificación no asignada";
    let mensaje_exceso = "exceso de velocidad";
    if (velocidad >= 0 && velocidad <= 60) {
        clasificacion = "Velocidad baja";
    }
    else if (velocidad > 60 && velocidad <= 100) {
        clasificacion = "Velocidad moderada";
    }
    else if (velocidad > 100 && velocidad <= 140) {
        clasificacion = "Velocidad alta";
    }
    else if (velocidad > 140) {
        clasificacion = "Velocidad muy alta";
        mensaje_exceso = "Ha excedido la velocidad permitida";
    }
    alert(`Nombre del conductor: ${nombre_conductor}\nVelocidad: ${velocidad} km/h\nClasificación: ${clasificacion}\nMensaje: ${mensaje_exceso}`);
}
