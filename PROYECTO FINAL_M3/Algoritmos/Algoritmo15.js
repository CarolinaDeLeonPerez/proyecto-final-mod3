console.log(`${algoritmo} 15`);

let n = 100
let b = 0;
let primos = [];

//Introducimos los valores base para poder ejecutar el algoritmo. Vamos a buscar todos los números primos menores a "n" y utilizaremos "b" a modo de contador.
//"primos" será nuestro array vacío.

for(; b < n; b++) {
  if (primo(b)) {
    primos.push(b);
  }  
}

//"for" encuadra el algoritmo entre 0 y 99 y llama a la function "primo".

console.log(primos);

function primo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return numero !== 1;
}

//Función que utlizamos para determinar si un número es primo a partir de la premisa de que si un número (entre 0 y 99) puede dividirse solo entre si mismo o el 1 (numero % i === 0) es un número primo.
