// new Date() - crea un objeto con la fecha y hora actual
const ahora = new Date();
console.log(ahora);

// new Error() - crea un objeto de error personalizado
const errorPersonalizado = new Error("Algo salió mal");
console.log(errorPersonalizado.message);

// new Map() - crea un mapa para almacenar pares clave-valor
const mapa = new Map();
mapa.set("nombre", "Ana");
mapa.set("edad", 30);
console.log(mapa.get("nombre")); // Ana

// new Set() - crea un conjunto de valores únicos
const conjunto = new Set([1, 2, 2, 3]);
console.log(conjunto); // Set {1, 2, 3}

// new WeakSet() - conjunto débil para objetos, no impide recolección de basura
const ws = new WeakSet();
let obj = {};
ws.add(obj);
console.log(ws.has(obj)); // true
obj = null; // ahora el objeto puede ser recolectado

// new WeakMap() - mapa débil con claves que son objetos
const wm = new WeakMap();
let clave = {};
wm.set(clave, "valor asociado");
console.log(wm.get(clave)); // valor asociado
clave = null; // clave puede ser recolectada

// new Promise() - crea una promesa para manejo asíncrono
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Éxito!"), 1000);
});
promesa.then(mensaje => console.log(mensaje));