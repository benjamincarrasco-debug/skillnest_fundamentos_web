console.log(`Conexión exitosa`)

document.getElementById("colorButton1").addEventListener("click", function () {
    cambiarColorBody();
});

document.getElementById("colorButton2").addEventListener("click", function () {
    cambiarColor2();
});

document.getElementById("colorButton3").addEventListener("click", function () {
    cambiarColor3();
});
function cambiarColorBody() {
    let colores = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
}

function cambiarColor2() {
    let colores = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    const elemento = document.querySelector("#caja1")
    elemento.style.backgroundColor = colorAleatorio;
}

function cambiarColor3() {
    let colores = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    const elemento = document.querySelector("#caja2     ")
    elemento.style.backgroundColor = colorAleatorio;
}
