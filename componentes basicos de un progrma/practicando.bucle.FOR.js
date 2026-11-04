for (var i = 1; i <= 5; i++) {
    console.log(i)
}
console.log("Counting completed!");
/*Este es un conteo que comienza en 1 hasta el 5
el contador comienza en 1, luego la condicion dice que
debe ser impresos todos los valores menores o iguales a 5 contando desde 1
luego el incremento i++ para comenzar 
finalmente se usa console.log para obtener el valor del conteo de i
posteriormente se usa console.log para obtener la frase 
counting completed al finalizar el bucle for */

for (var i = 5; i >= 1; i--) {
    console.log(i)
}
console.log("Countdown finished!");
/*Este bucle hace exactamente que el anterior sin embargo, 
el contador inicia en 5 y la condicion dice que se debe imprimir
todos los valores iguales o mayores que 1 y por supuesto el decremento
a ese contador, luego se verifica el resultado de la funcion con el 
primer llamado a console del contador i y finalmente el ultimo console.log
es para imprimir un mensaje al final del conteo*/