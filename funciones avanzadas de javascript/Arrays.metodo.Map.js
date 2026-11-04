const originalArray = [0, 10, 20, 30, 40, 50];

const newArray = originalArray.map(function(num) {
  return num / 10;
});

console.log(newArray); // Salida: [0, 1, 2, 3, 4, 5]

//Segundo ejemplo:
let bestBoxers = new Map();  //Notese que aqui uso new map()
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);//puedo imrpimir todo los parametros asi
console.log(bestBoxers.get(1)); //Tambien puedo imprimir solo 1 parametro si quiero con .get
