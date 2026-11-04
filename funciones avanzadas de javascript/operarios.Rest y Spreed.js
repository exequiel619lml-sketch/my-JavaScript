
/*REST*/
//Aplicacion de Rest a la destructuracion de matrices 
const [first, ...rest] = [1, 2, 3, 4]; //rest recordar que puede ser nombre de otros parametros

console.log(first); // 1

console.log(rest);  // [2, 3, 4]

//Aplicacion de Rest a las funciones para recoger argumentos
function sum(...numbers) {

  return numbers.reduce((total, num) => total + num, 0);

}

console.log(sum(1, 2, 3)); // 6

/*SPREAD*/
const fruits = ['apple', 'pear', 'plum'];
const berries = ['blueberry', 'strawberry'];
const fruitsAndBerries = [...fruits, ...berries]; // CONCATENACION en Matrices
console.log(fruitsAndBerries); // La salida es un array simple

const flying = { wings: 2 };
const car = { wheels: 4 };
const flyingCar = {...flying, ...car}; //Concatenacion en objetos
console.log(flyingCar); // {wings: 2, wheels: 4}

let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot']; // operador spread para añadir fácilmente uno o más miembros a una matriz existente
console.log(veggies);

const greeting = "Hello";
const arrayOfChars = [...greeting];// Dada una cadena se puede dividir todo en elementos de una matriz
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

//copiar un objeto a otro completamente distinto
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1};

car1.speed = 201;

console.log(car1.speed, car2.speed);

//copiar un array en otro completamente separado del original
const fruits1 = ['apples', 'pears'];
const fruits2 = [...fruits1];
fruits1.pop();
console.log(fruits1, "not", fruits2);