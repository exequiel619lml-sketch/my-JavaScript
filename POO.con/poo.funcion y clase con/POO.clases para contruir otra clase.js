// Clase que representa una bicicleta estática
class StationaryBike {
    // Constructor que define la posición y la cantidad de velocidades (gears)
    constructor(position, gears) {
        this.position = position; // Posición dentro del gimnasio
        this.gears = gears;       // Número de velocidades de la bicicleta
    }
}

// Clase que representa una caminadora (treadmill)
class Treadmill {
    // Constructor que define la posición y los modos de ejercicio
    constructor(position, modes) {
        this.position = position; // Posición dentro del gimnasio
        this.modes = modes;       // Número de modos de ejercicio disponibles
    }
}

// Clase que representa un gimnasio
class Gym {
    // Constructor que define las horas de apertura y las posiciones de los equipos
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs; // Horario de apertura del gimnasio (ejemplo: "7-22")

        // Crea una instancia de StationaryBike con la posición dada y 8 velocidades
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8);

        // Crea una instancia de Treadmill con la posición dada y 5 modos de ejercicio
        this.treadmill = new Treadmill(treadmillPos, 5);
    }
}

// Crear una instancia de Gym llamada boxingGym
var boxingGym = new Gym("7-22", "right corner", "left corner");

// Mostrar en consola las propiedades del gimnasio boxingGym
console.log(boxingGym.openHrs);          // Muestra: "7-22"
console.log(boxingGym.stationaryBike);  // Muestra: StationaryBike { position: 'right corner', gears: 8 }
console.log(boxingGym.treadmill);        // Muestra: Treadmill { position: 'left corner', modes: 5 }