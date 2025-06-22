console.log(`${algoritmo} 4`);

function factorialize(n) {
    if (typeof n !== 'number' || isNaN(n)) {
        console.log(`El valor "${n}" no es un número válido.`);
        return;
        //Insertamos una validación para que solo los números sean aceptados en la función.
    }
    if (n === 0 || n ===1) {
        return 1;
    } else {
        return n * factorialize(n - 1);
    }
    //Definimos la función principal que indica el numero factorial obtenido a partir del número ingresado en el programa.
}
console.log(factorialize(0));//1
console.log(factorialize(1));//1
console.log(factorialize(2));//2
console.log(factorialize(3));//6
console.log(factorialize(4));//24
console.log(factorialize(5));//120
console.log(factorialize("a"));//El valor "a" no es un número válido.