console.log(`${algoritmo} 17`);

function parentesisValido(str) {
    let datos = [];
    let pares = {
        "(" : ")"
    };

    //Definimos los valores que constituirán a la función: el array vacío "datos" y el registro de parámetros en "pares".
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

    //Utilizando la variable "for" configuramos el algoritmo para que dé error si al enviar los datos no obtenemos unos paréntesis debidamente emparejados. La respuesta está en que la longitud de los datos introducidos debe ser la misma. 

let inputString1 = "(())";
console.log(`¿Es un parentesis válido? ${parentesisValido(inputString1)}`);
//¿Es un paréntesis válido? true

let inputString2 = "(()";
console.log(`¿Es un parentesis válido? ${parentesisValido(inputString2)}`);
//Es un paréntesis válido? false