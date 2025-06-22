console.log(`${algoritmo} 9`);

function esBisiesto(year) {
        if (typeof year !== 'number' || isNaN(year)) {
        console.log(`El valor "${year}" no es un número válido.`);
        return;
    }
    //Insertamos una validación para que solo los números sean aceptados en la función.
    if (year % 4 === 0) {
        console.log("es bisiesto");
    } else {
        console.log("no es bisiesto");
    };
    //Definimos la función en base si un número (year) es divisible entre 4 y el resultado sigue siendo un número entero. De ser así, es un año bisiesto. 
};

esBisiesto (1994); //no es bisiesto
esBisiesto (1804); // es bisiesto
esBisiesto (2005); //no es bisiesto
esBisiesto (1584); //es bisiesto
esBisiesto ("Dos mil veinticuatro"); //El valor "Dos mil veinticuatro" no es un número válido.




