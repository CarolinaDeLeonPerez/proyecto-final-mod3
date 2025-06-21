console.log(`${algoritmo} 19`);

function siglo(año) {
    
    if (typeof año !== 'number' || isNaN(año)) {
        console.log(`El valor "${año}" no es un número válido.`);
        return;
    }
    
    return Math.ceil(año / 100);


}

console.log(siglo(1689));
console.log(siglo(2016));
console.log(siglo(1056));
console.log(siglo(1985));
console.log(siglo(1387));
console.log(siglo("dos mil treinta"));