console.log(`hola mundo`)

let hamburguesaEspecial = {

    pan: "Pan brioche",

    carne: "Pollo crujiente",

    queso: "Suizo",

    extras: [

        "Lechuga",

        "Pepinos",

        "Miel"

    ],

    mostrarIngredientes: function () {

        console.log("Pan:", this.pan);

        console.log("Carne:", this.carne);

        console.log("Queso:", this.queso);

        console.log(

            "Extras:",

            this.extras.join(", ")

        );

    }

};


let hamburguesaVegana = {

    pan:"Integral",

    carne:"Proteína vegetal",

    queso:"Vegano",

    extras:[

        "Tomate",

        "Rúcula"

    ],

    mostrarIngredientes:function(){

        console.log(this.pan);

        console.log(this.carne);

        console.log(this.queso);

    }
console.log(hamburguesaEspecial.mostrarIngredientes);

hamburguesaVegana.mostrarIngredientes();
};