console.log(`${algoritmo} 11`);

function segundoMayor(arr) {
    const arrSinDuplicados = [...new Set(arr)];
    arrSinDuplicados.sort((a,b) => b - a);
    if (arrSinDuplicados.length < 2) {
        return undefined;
    }
    return arrSinDuplicados[1];
}

let numeros = [5, 6, 8, 6, 2, 2, 1]
let segundoMayorNumero = segundoMayor(numeros);
console.log(segundoMayorNumero);

let otrosNumeros = [2, 2, 2, 2];
let segundoMayorOtros = segundoMayor(otrosNumeros);
console.log(segundoMayorOtros);
