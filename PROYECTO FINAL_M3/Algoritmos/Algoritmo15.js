console.log(`${algoritmo} 15`);

var n = 100;
var b = 0;
var primos = [];

for(; b < n; b++) {
  if (primo(b)) {
    primos.push(b);
  }  
}

console.log(primos);

function primo(numero) {
    for (var i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return numero !== 1;
}
