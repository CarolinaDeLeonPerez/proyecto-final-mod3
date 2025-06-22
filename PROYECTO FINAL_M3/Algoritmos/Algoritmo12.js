console.log(`${algoritmo} 12`);

function eliminarDuplicados(array) {
    return [...new Set(array)]
}
//Configuramos una función que toma los valores introducidos en el array y los devuelve sin duplicados.

let arrayOriginal = ["💜","💙","💚", "💛","🧡","🖤","🤍", "🤎", "🧡"];
let arraySinDuplicados = eliminarDuplicados (arrayOriginal);

console.log(arraySinDuplicados); //["💜","💙","💚", "💛","🧡","🖤","🤍", "🤎"]

