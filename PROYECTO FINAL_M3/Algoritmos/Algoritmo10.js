console.log(`${algoritmo} 10`);

function cToF(celsius) {
     if (typeof celsius !== 'number' || isNaN(celsius)) {
        console.log(`El valor "${celsius}" no es un número válido.`);
        return;
    }
    //Insertamos una validación para que solo los números sean aceptados en la función.
    
    var cTemp = celsius;
    var cToFahr = cTemp * 9 / 5 + 32;
    var message = cTemp + "\xB0C es " + cToFahr + "\xB0F.";

    console.log(message);
} //En base a la fórmula matemática que "traduce" los grados celsius a los fahrenheit, defino una función que aplica esa misma formula y la ejecuta.

cToF(-3); //26.6
cToF("menos tres"); //El valor "menos tres" no es un número valido.
cToF("-3ºC"); //El valor "-3ºC" no es un número valido.
cToF(5);//41
cToF(14);//57.2
cToF(22.5);//72.5
cToF(32);//89.6

