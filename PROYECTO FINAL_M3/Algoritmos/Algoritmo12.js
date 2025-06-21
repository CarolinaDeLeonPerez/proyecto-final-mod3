console.log(`${algoritmo} 12`);

function eliminarDuplicados(array) {
    return [...new Set(array)]
}

let arrayOriginal = ["💜","💙","💚", "💛","🧡","🖤","🤍", "🤎", "🧡"];
let arraySinDuplicados = eliminarDuplicados (arrayOriginal);

console.log(arraySinDuplicados);

