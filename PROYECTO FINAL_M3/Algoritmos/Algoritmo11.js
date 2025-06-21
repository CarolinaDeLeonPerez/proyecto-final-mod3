console.log(`${algoritmo} 11`);

function segundoMayor(arr) { 
    const arrSinDuplicados = [...new Set(arr)];
    arrSinDuplicados.sort((a,b) => b - a);
    if (arrSinDuplicados.length < 2) {
        return undefined;
    }
    return arrSinDuplicados[1];
}

let numeros = [5, 6, 8, 6, 2, 2, 1];
let segundoMayorNumeros = segundoMayor(numeros);
console.log(segundoMayorNumeros);

let otrosNumeros = [2, 2, 2, 2];
let segundoMayorOtros = segundoMayor(otrosNumeros);
console.log(segundoMayorOtros);

let otrosOtrosNumeros = [0.2, 0.26, 0.78, 0.96, 0.2, 0.92, 0.41];
let segundoMayorOtrosOtrosNumeros = segundoMayor(otrosOtrosNumeros);
console.log(segundoMayorOtrosOtrosNumeros);

