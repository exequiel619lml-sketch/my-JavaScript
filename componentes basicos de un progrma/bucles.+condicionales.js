for(var i = 1; i <= 10; i++){
    if (i == 1) {
        console.log("medalla de oro")
    }else if (i == 2){
        console.log("medalla de plata")
    }else if (i == 3){
        console.log("medalla de bronce")
    }else {
        console.log(i)
    }
}
/*aqui basicamente imprimo todos los valores del 1 al 10 con un bucle for
contador comienza en 1, la condicion es imprimir todos los valores menores a 10
incremento de 1, las condiciones son si hay valores iguales a 1, 2, 3 se imprime
medalla de oro, plata, bronce respectivamente y para el resto solo se imprime
los valores que tome i */

for(var i = 1; i <= 10; i++){
    switch (i) {
        case 1:
        console.log("medalla de oro");
        break;
        case 2:
        console.log("medalla de plata");
        break;
        case 3:
        console.log("medalla de bronce");
        break;
        default:
        console.log(i);
    }
}
/*aqui basicamente hago lo mismo pero pero con la sentencia switch, notese que 
los numeros no se anotan "" cuandose pone case a diferencia de las palabras
por ejemplo en otros casos se pone case "day", aqui es day 1, 2, etc. */