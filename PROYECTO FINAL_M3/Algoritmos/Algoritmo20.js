console.log(`${algoritmo} 20`);

function milisegundosTotal (fechaInicial, fechaFinal) {
        
    let inicio = new Date(fechaInicial);
    let fin = new Date(fechaFinal);

    let diferenciaMilisegundos = fin.getTime() - inicio.getTime();
    return diferenciaMilisegundos;
}

let inicio = new Date("2025-05-05T00:00:00.000Z");
let fin = new Date ("2025-05-05T23:59:59.000Z");
let milisegundos = milisegundosTotal(inicio, fin);

console.log(milisegundos);


//Este ejercicio se ha realizado siguiendo la premisa de que, si el reloj da inicio a las 23h 59m 59s, hay que calcular el lapso de tiempo en miliseguindos que ha pasado hasta la medianoche. 


