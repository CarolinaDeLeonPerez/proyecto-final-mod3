console.log(`${algoritmo} 8`);

function countString(str, letter) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return count;
}

let string = prompt("Enter a string: "); //supercalifragilísticoespialidoso
let letterToCheck = prompt("Enter a letter to check: "); //s
let result = countString(string, letterToCheck);

console.log(result); //4


