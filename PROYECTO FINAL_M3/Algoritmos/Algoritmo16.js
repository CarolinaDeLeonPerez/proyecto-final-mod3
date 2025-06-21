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


let numeroRomano = "MCMXCIV";
let numeroArabigo = numeroRomanoANumeroArabigo(numeroRomano);
console.log(`El número ${numeroRomano} es ${numeroArabigo}.`);
