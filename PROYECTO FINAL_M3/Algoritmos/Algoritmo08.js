console.log(`${algoritmo} 8`);

function countString(str, letter) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return count;
} //La función determina cada fuente que pertenece al string y calcula la cantidad de coincidencias en base a "letterToCheck". Mara ello utilizamos el método "charAt()" que nos devuelve un caracter determinado en el string.

let string = prompt("Enter a string: "); //supercalifragilísticoespialidoso
let letterToCheck = prompt("Enter a letter to check: "); //s
let result = countString(string, letterToCheck);

console.log(result); //4


