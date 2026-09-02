let botonlike1 = document.querySelector("#botonlike");
let gusta1 = document.querySelector("#gusta");

botonlike1.addEventListener("click", function () {
    let contar = parseInt(gusta1.innerText);
    gusta1.innerText = contar + 1;
});

let botonlike2 = document.querySelector("#botonlike2");
let gusta2 = document.querySelector("#gusta2");

botonlike2.addEventListener("click", function () {
    let contar = parseInt(gusta2.innerText);
    gusta2.innerText = contar + 1;
});

let botonlike3 = document.querySelector("#botonlike3");
let gusta3 = document.querySelector("#gusta3");

botonlike3.addEventListener("click", function () {
    let contar = parseInt(gusta3.innerText);
    gusta3.innerText = contar + 1;
});