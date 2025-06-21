console.log(`${algoritmo} 4`);

function factorialize(n) {
    if (typeof n !== 'number' || isNaN(n)) {
        console.log(`El valor "${n}" no es un número válido.`);
        return;
    }
    if (n === 0 || n ===1) {
        return 1;
    } else {
        return n * factorialize(n - 1);
    }
}
console.log(factorialize(0));
console.log(factorialize(1));
console.log(factorialize(2));
console.log(factorialize(3));
console.log(factorialize(4));
console.log(factorialize(5));
console.log(factorialize("a"));