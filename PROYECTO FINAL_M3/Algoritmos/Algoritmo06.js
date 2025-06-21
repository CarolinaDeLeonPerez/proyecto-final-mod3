console.log(`${algoritmo} 6`);

function fib(num) {
        if (typeof num !== 'number' || isNaN(num)) {
        console.log(`El valor "${num}" no es un número válido.`);
        return;
    }
    
    if (num <= 1) {
        return num; 
    }
    return fib(num - 1) + fib(num - 2);
}

console.log(fib(6));
console.log(fib(8));
console.log(fib(21));
console.log(fib("a"));