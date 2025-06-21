console.log(`${algoritmo} 17`);

function parentesisValido(str) {
    let datos = [];
    let pares = {
        "(" : ")"
    };
    for (let char of str) {
        if (pares[char]) {
            datos.push(char);
        } else if (
            char === ")"
        ) {
            if (
                pares[datos.pop()] !==
                char
            ) {
                return false;
            }
        }
    }
    return datos.length === 0;
}

let inputString1 = "(())";
console.log(`¿Es un parentesis válido? ${parentesisValido(inputString1)}`);

let inputString2 = "(()";
console.log(`¿Es un parentesis válido? ${parentesisValido(inputString2)}`);