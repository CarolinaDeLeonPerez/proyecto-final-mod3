console.log(`${algoritmo} 6`);

function fib(num) {
        if (typeof num !== 'number' || isNaN(num)) {
        console.log(`El valor "${num}" no es un número válido.`);
        return;
    }
    //Insertamos una validación para que solo los números sean aceptados en la función.
    
    if (num <= 1) {
        return num; 
    }
    return fib(num - 1) + fib(num - 2);
} //Definimos el elemento principal de la función.  Calcula el valor de fib sumando el resultado de (num -1) y (num - 2).

console.log(fib(6)); //8
console.log(fib(8)); //21
console.log(fib(21)); //10946
console.log(fib("a")); //El valor "a" no es un número válido.