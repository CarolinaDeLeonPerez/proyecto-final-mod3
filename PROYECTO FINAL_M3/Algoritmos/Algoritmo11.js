console.log(`${algoritmo} 11`);

function segundoMayor(arr) { 
    const arrSinDuplicados = [...new Set(arr)];
    arrSinDuplicados.sort((a,b) => b - a);
    if (arrSinDuplicados.length < 2) {
        return undefined;
    }
    return arrSinDuplicados[1];

    //Definimos una función utilizando un sort que permite ordenar y eliminar los valores introducidos en el array que estén repetidos.
}

let numeros = [5, 6, 8, 6, 2, 2, 1]; //6
let segundoMayorNumeros = segundoMayor(numeros);
console.log(segundoMayorNumeros);

//Ejecutamos el programa en base a los número introducidos en el array y con la base de la función "segundoMayor" sacamos el segundo numero mayor del conjunto.

let otrosNumeros = [2, 2, 2, 2];
let segundoMayorOtros = segundoMayor(otrosNumeros);
console.log(segundoMayorOtros);
//Como todos los números son iguales, no hay ningún número "segundoMayor" por lo que el resultado sale como "undefined".

let otrosOtrosNumeros = [0.2, 0.26, 0.78, 0.96, 0.2, 0.92, 0.41]; //0.92
let segundoMayorOtrosOtrosNumeros = segundoMayor(otrosOtrosNumeros);
console.log(segundoMayorOtrosOtrosNumeros);

