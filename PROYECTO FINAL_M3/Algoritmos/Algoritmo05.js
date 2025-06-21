console.log(`${algoritmo} 5`);

let text ="";
let invertedText=[];

function palindromo(text) {
    let invertedText = text.split("").reverse().join("");
    if (text === invertedText) {
        console.log("es palindromo");
    } else {
        console.log("no es palindromo");
    };
};

palindromo("ojo");
palindromo("aguacate");
palindromo("arepera");
palindromo("reconocer")
palindromo("lluvia");
palindromo("té");