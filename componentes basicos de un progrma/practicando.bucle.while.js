var counter = 5 
while(counter > 0) {
    console.log(counter);
    counter = counter - 1;
}
console.log('Countdown finished!')
/*para bucle while a diferencia del FOR primero se define una variable y su valor
luego cuando tengo la variable definida comienzo a escribir el bucle while
defino que se iterara todos aquellos valores siempre que sean mayores a 0 para este
caso, luego hago un llamado al bucle con console.log principalmente de la variable
que ha sido definida, luego hay que comprobar esa variable sea verdadera
con el decrecimiento para este caso de la variable counter -1
luego se hace un llamado a la funcion con console y se imprime un mensaje*/

var year = 2018
while (year <= 2022) {
    console.log(year);
    year = year + 1;
}
console. log("this is a new year")
/*Aqui basicamente lo mismo con la salvedad de que la variable cambia
la nueva variable la defini como year y le asigne un valor, luego lo que hice es
basicamente definir la condicion en donde siempre se imprimiran los años que sean
menores o iguales a 2022, luego hago un llamado al bucle con console.log
principalmente de la variable definida, luego se comprueba que la variable 
sea verdadera con el incremento para este caso de la variable year
luego hago un llamado a la funcion con console.log e imprimo un mensaje*/