let nombre = "Carolina de León";
let proyecto = "proyecto final del módulo 3"
let algoritmo = "Algoritmo"

console.log(`Soy ${nombre} y este es mi ${proyecto}`);

console.log(`${algoritmo} 1`);

function ParOImpar(numero) {
    if (numero % 2 === 0) {
        return console.log(`El número ${numero} es Par`);
    }
    else {
        return console.log(`El número ${numero} es Impar`);
    }
};

ParOImpar(1);
ParOImpar(2);
ParOImpar(26);
ParOImpar(159);
ParOImpar(1585);
ParOImpar(18456);


