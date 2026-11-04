// Tarea 1: Mostrar los elementos de la lista de lácteos
var lacteos = ['queso', 'crema agria', 'leche', 'yogur', 'helado', 'batido'];
//lacteos: Es la lista (array) con los nombres de los productos.
function registrarLacteos() {
    for (const producto of lacteos) {
        console.log(producto);
    }
}
//registrarLacteos(): La función que usa for...of para recorrer la lista de lácteos e imprimir cada producto uno por uno.
registrarLacteos();

// Tarea 2: Mostrar solo las propiedades propias del ave
const animal = {  
    puedeSaltar: true  
};  

const ave = Object.create(animal);  
ave.puedeVolar = true;  
ave.tienePlumas = true;
//animal / ave: animal es el objeto base. Con Object.create(animal) creamos ave, que hereda lo de animal (puedeSaltar) y además tiene sus propias propiedades (puedeVolar, tienePlumas).
function avePuede() {
    for (const clave of Object.keys(ave)) {
        console.log(`${clave}: ${ave[clave]}`);
    }
}
//avePuede(): Usa Object.keys(ave) para obtener solo las características propias de ave (puedeVolar y tienePlumas), ignorando la que heredó.
avePuede();

// Tarea 3: Mostrar todas las propiedades del ave, incluidas las heredadas del animal
function animalPuede() {
    for (const clave in ave) {
        console.log(`${clave}: ${ave[clave]}`);
    }
}
//animalPuede(): Usa el bucle for...in para recorrer todas las características, tanto las propias de ave como la heredada de animal (puedeSaltar).
animalPuede();

