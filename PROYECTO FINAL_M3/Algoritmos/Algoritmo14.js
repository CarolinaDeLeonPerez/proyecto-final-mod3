console.log(`${algoritmo} 14`);

function esAnagrama(palabra, quizasAnagrama) {
    if(palabra.toLowerCase() === quizasAnagrama.toLowerCase()) return false;
    return palabra.toLowerCase().split("").sort().join("") === quizasAnagrama.toLowerCase().split("").sort().join("");
}

var palabrasYQuizasAnagramas = [ 
{
    palabra: "Caracola",
    quizasAnagrama: "Cangrejo"
}, 

{
    palabra: "Frase",
    quizasAnagrama: "Fresa"
},

{
    palabra: "121",
    quizasAnagrama: "211"
},

];

for(var x = palabrasYQuizasAnagramas.length - 1; x >= 0; x--) {
    var palabra = palabrasYQuizasAnagramas[x].palabra,
    quizasAnagrama = palabrasYQuizasAnagramas[x].quizasAnagrama,
    resultado = esAnagrama(palabra, quizasAnagrama);

    console.log("¿%s es anagrama de %s? %s", quizasAnagrama, palabra, resultado);

}