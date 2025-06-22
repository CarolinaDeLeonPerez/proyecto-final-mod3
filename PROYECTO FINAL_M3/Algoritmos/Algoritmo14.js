console.log(`${algoritmo} 14`);

function esAnagrama(palabra, quizasAnagrama) {
    if(palabra.toLowerCase() === quizasAnagrama.toLowerCase()) return false;
    return palabra.toLowerCase().split("").sort().join("") === quizasAnagrama.toLowerCase().split("").sort().join("");
}
//Definimos los valores que dan forma a la función "esAnagrama". El objetivo es comprobar si la palabra introducida es un anagrama de la palabra sugerida. 
//Utilizamos el método "toLoweCase" para comprobar si los valores de "palabra" y "quizasAnagrama" son iguales.
//Una respuesta que obtenemos con la instrucción "return" y los métodos ."split("").sort().join("").

let palabrasYQuizasAnagramas = [ 
{
    palabra: "Caracola",
    quizasAnagrama: "Cangrejo"
    //¿Cangrejo es un anagrama de Caracola? False.
}, 

{
    palabra: "Frase",
    quizasAnagrama: "Fresa"
    //FResa es un anagrama de Frase? True.
},

{
    palabra: "121",
    quizasAnagrama: "211" 
    //¿211 es un anagrama de 121? True.
},

];

for(let x = palabrasYQuizasAnagramas.length - 1; x >= 0; x--) {
    let palabra = palabrasYQuizasAnagramas[x].palabra,
    quizasAnagrama = palabrasYQuizasAnagramas[x].quizasAnagrama,
    resultado = esAnagrama(palabra, quizasAnagrama);

    console.log("¿%s es anagrama de %s? %s", quizasAnagrama, palabra, resultado);

}
//Ponemos en marcha el programa utilizando los datos obtenidos en la function esAnagrama y utilizando una variable "for".

