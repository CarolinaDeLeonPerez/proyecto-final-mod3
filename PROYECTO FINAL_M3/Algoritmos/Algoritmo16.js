console.log(`${algoritmo} 16`);

function numeroRomanoANumeroArabigo(romano) {
    let romanoMap = {
        "M": 1000,
        "CM": 900,
        "D": 500,
        "CD": 400,
        "C": 100,
        "XC": 90,
        "L:": 50,
        "XL": 40,
        "X": 10,
        "IX": 9,
        "V": 5,
        "IV": 4,
        "I": 1,
    };

    //Introducimos los valores que constituyen los números romanos y su equivalencia con los números arábicos)

    let resultado = 0;
    let i = 0;

    while (i < romano.length) {
        let simbolo = romano.substring(i, i + 2);
        if (romanoMap[simbolo]) {
            resultado += romanoMap[simbolo];
            i += 2;
        } else {
            let simboloSimple = romano.substring(i, i + 1);
            resultado += romanoMap[simboloSimple];
            i += 1;
        }
    }
    return resultado;
}

//Creamos un bucle en el que el algoritmo actúa de dos formas en base a Tiene que ser compatible con los datos integrados en nuestro "romanoMap":
// "simbolo" lee varios string a la vez debido a que los números romanos pueden dar pie a diferentes combinaciones. 
// "simbolo" lo utilizamos para cuando los números no crean combinaciones y se mantienen en su naturaleza original. 




let numeroRomano = "MCMXCIV"; //El número MCMXCIV es 1994.
let numeroArabigo = numeroRomanoANumeroArabigo(numeroRomano);
console.log(`El número ${numeroRomano} es ${numeroArabigo}.`);
