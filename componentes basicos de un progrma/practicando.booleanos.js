var tiempoTotal = 10;
console.log(tiempoTotal <9 && tiempoTotal == 10);
/* los valores son false porque && es restrictivo,
quiere decir que deben ser ambas condiciones true
para que sea verdadero*/
console.log(tiempoTotal < 9 || tiempoTotal > 17);
/* los valores son false porque || es false en ambos,
es mas permisivo que && ya que si 1 de ellos es true
toda la sentencia es true*/
var petHungry = true;
console.log('Feeding the pet');
console.log("Pet is hungry: ", !petHungry);
console.log(petHungry);
/* los valores se cambian porque ! da vuelta el valor,
que inicialmente tenia petHungry que es true, luego lo
cambia a false*/
console.log(22 % 5); // 2
/* El operador de modulo revuelve el resto de la division
que es 2*/
console.log(5 == 5);
console.log(5 == 6);
/* 5 es semejante a 5 y 5 no es semejante a 6*/
console.log(5 === 5);
console.log(5 === "5");
/* 5 es semejante a 5 pero 5 no es semjante a "5" 
por eso es estricto*/
console.log(5 != 5);
console.log(5 !== "5");
/* 5 no es distinto a 5 por lo que es true
pero 5 estricatamente es distinto de "5" 
por eso es true*/
var mon = 1;
var tue = 2;
var wed = 1;
var thu = 2;
var fri = 3;
console.log(mon + tue + wed + thu + fri); // 9
/* se puede simplificar usando el simbolo += de la
siguiente manera:*/
var overtime = 1;
overtime += 2;
overtime += 1;
overtime += 2;
overtime += 3;
console.log(overtime); // "se imprimira 9"

var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString); // "se imprimira Once upon a time..."

console.log(1<2);