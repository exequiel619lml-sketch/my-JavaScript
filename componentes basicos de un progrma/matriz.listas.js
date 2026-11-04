var clothes = [];
    clothes.push("jacket");
    clothes.push("sweatshirt");
    clothes.push("T-shirt");
    clothes.push("pants");
    clothes.push("sneakers");
    clothes.pop();
    clothes.push("glasses");
console.log(clothes[2]);
var favCar = {
    color: "blue",
    convertible: true,
}
console.log(favCar)

var favCar = {};
favCar.color = "red";
favCar.convertible = true;
console.log(favCar);

/*Lo que hice fue crear una matriz(array) llamada clothes y le agregue elementos
utilizando push finalmente hice un llamado a la matriz y elegi el elemento
que queria que se imprimiera en este caso queria que se imprimiera el tercer
elemento mediante console.log(clothes[2]); Luego lo que hice fue utilizar
un metodo de listas para agregarle caracteres a una listay lo hice escrito de 
2 formas diferentes yo prefiero la primea forma porque para mi sigue una continuidad
no se es como algo mas mio ;)*/


  var dog = {
      color: "brown",
      height: 30,
      length: 60
  };
  dog["type"] = "corgi";
  console.log(dog)
