console.log(`${algoritmo} 9`);

function esBisiesto(year) {
        if (typeof year !== 'number' || isNaN(year)) {
        console.log(`El valor "${year}" no es un número válido.`);
        return;
    }
    
    if (year % 4 === 0) {
        console.log("es bisiesto");
    } else {
        console.log("no es bisiesto");
    };
};

esBisiesto (1994);
esBisiesto (1804);
esBisiesto (2005);
esBisiesto (1584);
esBisiesto ("Dos mil veinticuatro");




