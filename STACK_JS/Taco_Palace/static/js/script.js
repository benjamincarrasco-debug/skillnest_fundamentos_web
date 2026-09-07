console.log("Conexion exitosa...")

let numCarrito = document.querySelector("#carrito");
let anadir = document.querySelector("#anadir");
let anadir2 = document.querySelector("#anadir2");

anadir.addEventListener("click", function () {
    let contador = parseInt(numCarrito.innerText);
    numCarrito.innerText = contador + 1;
});
anadir2.addEventListener("click", function () {
    let contador = parseInt(numCarrito.innerText);
    numCarrito.innerText = contador + 1;
});




const foto = document.getElementById("foto")


foto.addEventListener("mouseover", function () {
    foto.src = "static/images/comida-mexicana2.jpg"
})

foto.addEventListener("mouseout", function () {
    foto.src = "static/images/comida-mexicana.jpg"
})


const button = document.querySelector("#loginn")
button.addEventListener("click", function () {
    let email = document.getElementById("gmail").value;
    alert(`Hola, ${email}`)
});
