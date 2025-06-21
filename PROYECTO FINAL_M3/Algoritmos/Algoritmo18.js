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

    let leetText = "";
    for (let char of text.toLowerCase()) {
        leetText += leetMap[char] || char;
    }
    return leetText;
}

let frase = "supercalifragilisticoespialidoso";
let fraseLeet = leetSpeak(frase);
console.log(fraseLeet);