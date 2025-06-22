console.log(`${algoritmo} 19`);

function siglo(año) {
    
    if (typeof año !== 'number' || isNaN(año)) {
        console.log(`El valor "${año}" no es un número válido.`);
        return;
        //Insertamos una validación para que solo los números sean aceptados en la función.
    }
    
    return Math.ceil(año / 100);
    //Utilizamos el método Math.ceil para redondear a la alza el número resultante de dividir "año" entre 100, dando como resultado el siglo.


}

console.log(siglo(1689)); //17
console.log(siglo(2016)); //21
console.log(siglo(1056)); //11
console.log(siglo(1985)); //20
console.log(siglo(1387)); //14
console.log(siglo("dos mil treinta")); //El valor "dos mil treinta" no es un número válido. 