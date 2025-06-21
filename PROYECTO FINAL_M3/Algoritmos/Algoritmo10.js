console.log(`${algoritmo} 10`);

function cToF(celsius) {
     if (typeof celsius !== 'number' || isNaN(celsius)) {
        console.log(`El valor "${celsius}" no es un número válido.`);
        return;
    }
    
    var cTemp = celsius;
    var cToFahr = cTemp * 9 / 5 + 32;
    var message = cTemp + "\xB0C es " + cToFahr + "\xB0F.";

    console.log(message);
}

cToF(-3);
cToF("menos tres");
cToF("-3ºC");
cToF(5);
cToF(14);
cToF(22.5);
cToF(32);

