// Definición de un objeto llamado clothingItem con varias propiedades
var clothingItem = {
    price: 50,          // Precio del artículo
    color: 'beige',     // Color del artículo
    material: 'cotton', // Material del artículo
    season: 'autumn'    // Temporada para la que es adecuado el artículo
}

// Usamos Object.keys() para obtener un array con las llaves del objeto clothingItem
// Luego iteramos sobre cada llave con un ciclo for...of
for (const key of Object.keys(clothingItem)) {
    // Imprimimos la llave y su valor correspondiente usando la notación de corchetes
    console.log(key, ":", clothingItem[key]);
}

// Definición de una función que muestra acceso dinámico a propiedades de un objeto
function testBracketsDynamicAccess() {
    var dynamicKey; // Variable para almacenar la llave que se usará dinámicamente

    // Asignamos a dynamicKey "speed" o "color" aleatoriamente con 50% de probabilidad
    if (Math.random() > 0.5) {
        dynamicKey = "speed";
    } else {
        dynamicKey = "color";
    }

    // Definimos un objeto drone con dos propiedades: speed y color
    var drone = {
        speed: 15,
        color: "orange"
    };

    // Imprimimos el valor de la propiedad del objeto drone que corresponde a dynamicKey
    // Esto demuestra cómo acceder dinámicamente a propiedades usando corchetes
    console.log(drone[dynamicKey]);
}

// Llamamos a la función para ejecutar el código y ver el resultado
testBracketsDynamicAccess();