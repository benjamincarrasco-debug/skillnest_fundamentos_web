// 👨‍🍳 Crea una función llamada pizzaOven que devuelva un objeto con las propiedades:

// corteza: tipo de corteza de la pizza.
// salsa: tipo de salsa utilizada.
// quesos: un arreglo con los tipos de queso que tiene la pizza.
// ingredientes: un arreglo con los ingredientes adicionales.
// 🍕 Usa la función para crear las siguientes pizzas:

// Una pizza “estilo Chicago” con corteza tradicional, salsa tradicional, mozzarella y los ingredientes pepperoni y salchicha.
// Una pizza “lanzada a mano” con salsa marinara, mozzarella y feta, y los ingredientes champiñones, aceitunas y cebollas.
// Crea dos pizzas más con tus ingredientes favoritos.
// 💻 Muestra en consola los objetos de cada pizza creada.

// Ejemplo de objeto

// Antes de comenzar con las pizzas, revisemos un ejemplo con sándwiches para entender la lógica:

// let sandwich = {
//    pan: "masa madre",
//    proteina: "asado",
//    queso: "queso suizo",
//    salsas: ["lechuga", "tomates", "salsa de rábano"]
// };

// console.log(sandwich);
// En este caso, has creado un objeto sandwich con diferentes propiedades. Pero, ¿qué pasa si quieres hacer varios sándwiches sin escribir todo manualmente cada vez? Puedes crear una fábrica de sándwiches usando una función que devuelva un objeto:

// function sandwichFactory(pan, proteina, queso, salsas) {
//    let sandwich = {};
//    sandwich.pan = pan;
//    sandwich.proteina = proteina;
//    sandwich.queso = queso;
//    sandwich.salsas = salsas;
//    return sandwich;
// }

// let s1 = sandwichFactory(
//    "trigo",
//    "pavo",
//    "provolone",
//    ["mostaza", "cebolla frita", "rúcula"],
// );
// console.log(s1);
// Explicación

// 🥪 La función sandwichFactory permite crear objetos con diferentes combinaciones de ingredientes.

// 🍞 En cada llamada a la función, puedes personalizar el sándwich con diferentes ingredientes sin escribir código repetitivo.

// Ahora, es tu turno de hacer lo mismo con las pizzas.



// 💡 Tips

// 🧠 Piensa en cada pizza como un objeto con propiedades.

// 🔢 Usa un arreglo para los ingredientes y quesos, ya que una pizza puede tener más de uno.

// 🧹 Mantén la sintaxis clara y organizada para que tu código sea fácil de leer y modificar.

// 🔍 Recuerda que puedes acceder a las propiedades de tu pizza con pizza.propiedad o modificarla si lo necesitas.
function pizzaOven(corteza, salsa, quesos, ingredientes) {
    return {
        corteza,
        salsa,
        quesos,
        ingredientes
    };
}
let pizza1 = pizzaOven(
    "tradicional",
    "tradicional",
    ["mozzarella"],
    ["pepperoni", "salchicha"]
);
let pizza2 = pizzaOven(
    "lanzada a mano",
    "marinara",
    ["mozzarella", "feta"],
    ["champiñones", "aceitunas", "cebollas"]
);
let pizza3 = pizzaOven(
    "crujiente",
    "barbacoa",
    ["mozzarella", "cheddar"],
    ["pollo a la parrilla", "tocino", "cebolla morada"]
);
let pizza4 = pizzaOven(
    "delgada",
    "blanca",
    ["mozzarella", "parmesano", "gorgonzola", "provolone"],
    ["albahaca fresca", "tomates secos"]
);
console.log("Pizza 1:", pizza1);
console.log("Pizza 2:", pizza2);
console.log("Pizza 3:", pizza3);
console.log("Pizza 4:", pizza4);