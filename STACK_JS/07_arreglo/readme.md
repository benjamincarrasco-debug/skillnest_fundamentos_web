📚 Lección: Arreglos (Arrays) en JavaScript
🎯 Objetivos de Aprendizaje
Al finalizar esta lección serás capaz de:

Comprender qué es un arreglo y cuándo utilizarlo.
Crear arreglos con diferentes tipos de datos.
Acceder a los elementos mediante sus índices.
Modificar, agregar y eliminar elementos.
Recorrer arreglos utilizando bucles.
Utilizar condiciones para buscar y analizar información dentro de un arreglo.
Resolver problemas utilizando arreglos, ciclos y estructuras condicionales.


🤔 ¿Qué es un arreglo?
Hasta ahora hemos trabajado con variables individuales.

let nombre1 = "Ana";

let nombre2 = "Pedro";

let nombre3 = "María";

let nombre4 = "Carlos";

¿Te imaginas tener que guardar los nombres de 500 estudiantes?

Sería muy difícil administrar tantas variables.

Para solucionar este problema existen los arreglos (Arrays).

Un arreglo es una estructura de datos que permite almacenar muchos valores dentro de una sola variable.

Visualmente podríamos imaginarlo así:

notas

┌─────┬─────┬─────┬─────┬─────┐

│ 6.2 │ 5.8 │ 4.1 │ 7.0 │ 5.5 │

└─────┴─────┴─────┴─────┴─────┘

   0     1     2     3     4

Cada posición tiene un número llamado índice.

⚠️ Los índices en JavaScript siempre comienzan en 0.


📌 ¿Por qué utilizar arreglos?
Los arreglos permiten almacenar información relacionada dentro de una misma variable.

Por ejemplo:

Notas de un estudiante.
Ventas de una tienda.
Temperaturas de una semana.
Nombres de alumnos.
Productos de un supermercado.
Puntajes de un videojuego.

Sin arreglos sería necesario crear cientos de variables diferentes.


🔧 Crear un arreglo
La sintaxis es muy sencilla.

let compras = [5000, 2300, 12000, 4500, 3000];

También podemos guardar texto.

let alumnos = ["Ana", "Pedro", "María", "José"];

Incluso diferentes tipos de datos.

let datos = ["Carlos", 18, true];

Aunque JavaScript lo permite, en programación profesional se recomienda guardar datos del mismo tipo dentro del mismo arreglo.


📍 Los índices
Observa el siguiente arreglo.

let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"];

Cada elemento tiene una posición.

Índice
Valor
0
Manzana
1
Pera
2
Kiwi
3
Sandía



🔎 Acceder a un elemento
Para acceder a un elemento utilizamos su índice.

console.log(frutas[0]);

Salida

Manzana

Otro ejemplo.

console.log(frutas[2]);

Salida

Kiwi


⚠️ ¿Qué ocurre si el índice no existe?
console.log(frutas[10]);

Resultado.

undefined

Esto significa que esa posición no existe dentro del arreglo.


📏 Tamaño de un arreglo
La propiedad .length devuelve la cantidad de elementos.

let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"];

console.log(frutas.length);

Resultado

4


📍 Obtener el último elemento
Siempre se obtiene con:

arreglo.length - 1

Ejemplo.

let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"];

let ultima = frutas[frutas.length - 1];

console.log(ultima);

Resultado

Sandía


✏️ Modificar elementos
Podemos cambiar cualquier posición.

let notas = [5.2, 4.8, 6.0];

notas[1] = 5.9;

console.log(notas);

Resultado

[5.2, 5.9, 6]


➕ Agregar elementos
push()
Agrega un elemento al final.

let alumnos = ["Ana", "Pedro"];

alumnos.push("María");

console.log(alumnos);

Resultado

["Ana","Pedro","María"]


➖ Eliminar el último elemento
pop()
let alumnos = ["Ana","Pedro","María"];

alumnos.pop();

console.log(alumnos);

Resultado

["Ana","Pedro"]


➕ Agregar al principio
unshift()
let numeros = [2,3,4];

numeros.unshift(1);

console.log(numeros);

Resultado

[1,2,3,4]


➖ Eliminar el primero
shift()
let numeros = [1,2,3,4];

numeros.shift();

console.log(numeros);

Resultado

[2,3,4]


🔁 Recorrer un arreglo
Normalmente utilizaremos un ciclo for.

let notas = [6.2,5.8,4.1,7.0];

for(let i=0;i<notas.length;i++){

    console.log(notas[i]);

}

Salida.

6.2

5.8

4.1

7.0


🧠 ¿Qué hace este ciclo?
for(let i=0;i<notas.length;i++)

Paso por paso.

Iteración
Valor de i
Elemento
1
0
notas[0]
2
1
notas[1]
3
2
notas[2]
4
3
notas[3]


El ciclo termina cuando i deja de ser menor que notas.length.


📊 Ejemplo: sumar todos los elementos
let ventas = [10000,5000,12000,8000];

let total = 0;

for(let i=0;i<ventas.length;i++){

    total += ventas[i];

}

console.log(total);

Resultado.

35000


📈 Calcular el promedio
let notas = [5.8,6.2,4.9,6.5];

let suma = 0;

for(let i=0;i<notas.length;i++){

    suma += notas[i];

}

let promedio = suma / notas.length;

console.log(promedio);

Resultado.

5.85


🔍 Buscar elementos utilizando condiciones
let edades = [12,15,18,20,25];

for(let i=0;i<edades.length;i++){

    if(edades[i] >= 18){

        console.log(edades[i]);

    }

}

Resultado.

18

20

25


🏆 Encontrar el mayor valor
let numeros = [10,35,7,90,22];

let mayor = numeros[0];

for(let i=1;i<numeros.length;i++){

    if(numeros[i] > mayor){

        mayor = numeros[i];

    }

}

console.log(mayor);

Resultado.

90


🏆 Encontrar el menor valor
let numeros = [10,35,7,90,22];

let menor = numeros[0];

for(let i=1;i<numeros.length;i++){

    if(numeros[i] < menor){

        menor = numeros[i];

    }

}

console.log(menor);

Resultado.

7


📌 Contar elementos que cumplen una condición
let notas = [3.5,5.0,6.2,4.8,6.5];

let aprobados = 0;

for(let i=0;i<notas.length;i++){

    if(notas[i] >= 4){

        aprobados++;

    }

}

console.log(aprobados);

Resultado.

4


💡 Ejemplo Integrador
let ventas = [5000,8000,12000,3000,10000,9000,4000];

let total = 0;

let mayor = ventas[0];

for(let i=0;i<ventas.length;i++){

    total += ventas[i];

    if(ventas[i] > mayor){

        mayor = ventas[i];

    }

}

console.log("Total:", total);

console.log("Mayor:", mayor);

console.log("Promedio:", total/ventas.length);


📚 Resumen
Los arreglos permiten:

Guardar múltiples datos.
Acceder mediante índices.
Modificar valores.
Agregar y eliminar elementos.
Recorrer automáticamente utilizando ciclos.
Analizar información utilizando condiciones.

Son una de las estructuras más utilizadas en cualquier lenguaje de programación.


💻 Ejercicios
Ejercicio 1
Crear el siguiente arreglo.

let edades = [15,18,20,14,25];

Mostrar:

Primera edad.
Última edad.
Cantidad de elementos.


Ejercicio 2
Crear un arreglo con cinco nombres.

Mostrar todos utilizando un ciclo for.


Ejercicio 3
Crear un arreglo con cinco notas.

Calcular el promedio.

Mostrar:

Promedio: X


Ejercicio 4
Crear el arreglo.

[18,20,15,22,19,25,17]

Mostrar solamente las temperaturas mayores a 20.


Ejercicio 5
Crear un arreglo con diez números.

Contar:

Cuántos son pares.
Cuántos son impares.


Ejercicio 6
Crear el siguiente arreglo.

[5000,12000,3000,4500,7000]

Mostrar:

Venta mayor.
Venta menor.
Total vendido.


Ejercicio 7
Crear el siguiente arreglo.

["Ana","Pedro","María","Juan","Camila","Tomás"]

Mostrar únicamente los nombres con más de cuatro letras.


Ejercicio 8
Crear un arreglo con ocho números.

Mostrar únicamente los múltiplos de 3.


Ejercicio 9
Crear el siguiente arreglo.

[15,16,17,18,17,16,19,20]

Calcular:

Cantidad de mayores de edad.
Cantidad de menores de edad.


Ejercicio 10 (Desafío)
let ventas = [12000,18000,5000,21000,9000,15000,8000];

Mostrar:

Total de ventas.
Promedio.
Venta mayor.
Venta menor.
Cantidad de ventas mayores a $10.000.
Cantidad de ventas menores o iguales a $10.000.
Índice donde ocurrió la venta mayor.
Índice donde ocurrió la venta menor.


🚀 Desafío Final
Una empresa registra las ventas de sus vendedores.

let vendedores = ["Ana","Pedro","María","José","Camila"];

let ventas = [350000,510000,420000,610000,480000];

Desarrolla un programa que permita:

Mostrar cada vendedor con su venta.
Calcular el total vendido.
Calcular el promedio.
Mostrar el mejor vendedor.
Mostrar el vendedor con menor venta.
Mostrar los vendedores que vendieron más de $450.000.
Contar cuántos vendedores superaron el promedio.
Indicar si la empresa alcanzó una meta de $2.300.000.
⭐ Desafío Extra
Permite que el usuario agregue nuevas ventas utilizando:

push()
pop()
shift()
unshift()

y vuelve a calcular todas las estadísticas automáticamente.
