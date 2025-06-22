let nombre = "Carolina de León"; 
let proyecto = "proyecto final del módulo 3"
//Defino mi presentación
let algoritmo = "Algoritmo"
//Defino cómo dará inicio cada uno de los algoritmos del proyecto.

console.log(`Soy ${nombre} y este es mi ${proyecto}`);

console.log(`${algoritmo} 1`);

function ParOImpar(numero) {
        if (typeof numero !== 'number' || isNaN(numero)) {
        console.log(`El valor "${numero}" no es un número válido.`);
        return;
        //Inserto una validación para que solo los números sean aceptados en la función.
    }
        if (numero % 2 === 0) {
        return console.log(`El número ${numero} es Par`);
    }
    else {
        return console.log(`El número ${numero} es Impar`);
    }
    //Defino la función principal que indica que si un número es dividible entre dos y sigue siendo un número entero entonces es par. De lo contrario, es impar.
};


ParOImpar("a"); //El valor "a" no es un número valido".
ParOImpar(2);//El número 2 es Par
ParOImpar(26);//El número 26 es Par
ParOImpar(159);///El número 159 es Impar
ParOImpar(1585);///El número 1585 es Impar
ParOImpar(18456);//El número 18456 es Par


