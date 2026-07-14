console.log("conexion exitosa")

/*Ejemplo bucle for*/
function contarHasta2() {
    for (let i = 1; i < 5; i++) {
        alert(i)
    }
}

function cuentaRegresiva() {
    for (let i = 10; i > 0; i--) {
        alert(i);
    }
}
function recorrerLista() {
    //Lista es un tipo de dato (array/lista/arreglos)
    //[] = ["nombre", 4, True, [2,4]]
    /*
    let nombres = "carlos";
    alert (nombres);
    let nombres = ["Carlos", "Maria"]
    alert(nombres[0])--> Imprime Carlos
    alert(nombres[1])--> Imprime Maria
    alert(nombres[0].length)--> 6
    alert(nombres.length)--> 2 (largo de la lista)
    */
    let usuarios = ["Ana", "Luis", "María"];

    for (let i = 0; i < usuarios.length; i++) {
        alert("Bienvenido, " + usuarios[i]);
    }
}
/*Ejemplo bucle while*/
function reproducirCancion() {
    let reproduciendo = true;

    while (reproduciendo) {
        alert("La canción sigue sonando...");
        // Simulación de una acción que detendría la reproducción
        reproduciendo = false;
    }
}
function cargarDatos() {
    let datosPendientes = 5;

    while (datosPendientes > 0) {
        alert(`Cargando datos... ${datosPendientes} de 5`);
        datosPendientes--;
    }
}

function validarContraseña() {
    let contraseñaCorrecta = false;

    while (!contraseñaCorrecta) {
        let intento = prompt("Ingresa tu contraseña:");
        //variables = variable es distinta a verdadero - dentro de condicion
        if (intento === "1234") {
            contraseñaCorrecta = true;
            alert("Acceso concedido.");
        } else {
            alert("Contraseña incorrecta, intenta de nuevo.");
        }
    }
}