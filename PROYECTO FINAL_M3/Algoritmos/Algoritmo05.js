console.log(`${algoritmo} 5`);

let text ="";
let invertedText=[];

//Definimos los valores necesarios para poder hacer funcionar la función

function palindromo(text) {
    let invertedText = text.split("").reverse().join("");
    if (text === invertedText) {
        console.log("es palindromo");
    } else {
        console.log("no es palindromo");
    };
};
//Definimos la función en base a que un texto separado, invertido y unido de nuevo puede ser palíndromo o no si es igual en ambas direcciones.

palindromo("ojo"); //es palindromo
palindromo("aguacate"); //no es palindromo
palindromo("arepera"); //es palindromo
palindromo("reconocer") //es palindromo
palindromo("lluvia"); //no es palindromo
palindromo("té"); //no es palindromo
palindromo("0110"); //es palindromo
palindromo("0123"); //no es palindromo
palindromo("🌻🌼🌷"); //no es palindromo