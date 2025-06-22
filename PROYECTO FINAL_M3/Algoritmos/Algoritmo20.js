console.log(`${algoritmo} 20`);

function milisegundosTotal (fechaInicial, fechaFinal) {
        
    let inicio = new Date(fechaInicial);
    let fin = new Date(fechaFinal);

    //Comenzamos la función configurando los valores principales: la fecha inicial marcada en el ejercicio y la fecha final. 

    let diferenciaMilisegundos = fin.getTime() - inicio.getTime();
    return diferenciaMilisegundos;

    //Obtenemos la fiferencia en milisegundos utilizando el método de Fecha "getTime", a los datos de fin se le restan los datos de tiempo de inicio. 
}

let inicio = new Date("2025-05-05T00:00:00.000Z");
let fin = new Date ("2025-05-05T23:59:59.000Z");
let milisegundos = milisegundosTotal(inicio, fin);

//Insertamos los valores concretos que queremos estudiar utilizando la función anterior como base.

console.log(milisegundos);//86399000


//Este ejercicio se ha realizado siguiendo la premisa de que, si el reloj da inicio en la medianoche, hay que calcular el lapso de tiempo en miliseguindos que ha pasado hasta la hora marcada en el reloj (23h 59m 59s). 


