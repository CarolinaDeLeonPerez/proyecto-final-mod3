console.log(`${algoritmo} 18`);

function leetSpeak(text) {
    let leetMap = {
        "a": "4",
        "b": "13",
        "c": "(",
        "d": "[)",
        "e": "3",
        "f": "|=",
        "g": "6",
        "h": "|-|",
        "i": "|",
        "j": ".]",
        "k": "|<",
        "l": "1",
        "m": "|Y|",
        "n": "/\/",
        "o": "0",
        "p": "|>",
        "q": "0,",
        "r": "|2",
        "s": "5",
        "t": "7",
        "u": "[_]",
        "v": "\/",
        "w": "\v/",
        "x": "}{",
        "y": "'/",
        "z": "2"
    };

    //Introducimos el abecedario completo con su equivalencia. 

    let leetText = "";
    for (let char of text.toLowerCase()) {
        leetText += leetMap[char] || char;
    }
    return leetText;

    //Configuramos la variable for para que tome los datos introducidos en leetText y lo convierta en un texto cifrado a través del método "lowercase".
}

let frase = "supercalifragilisticoespialidoso";
//Introducimos el valor que queremos cifrar.
let fraseLeet = leetSpeak(frase);
//Configuramos "fraseLeet" para que sea igual que "leetSpeak". Ejecutamos el programa con "fraseLeet".
console.log(fraseLeet); //5[_]|>3|2(41||=|246|1|57|(035|>|41|[)050