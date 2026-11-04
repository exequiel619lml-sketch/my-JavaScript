// Definición de la clase base Train
class Train {
    // El constructor crea propiedades para cada objeto nuevo
    constructor(color, lightsOn) {
        this.color = color;       // Color del tren
        this.lightsOn = lightsOn; // Estado de las luces (encendidas o apagadas)
    }

    // Método para cambiar el estado de las luces (de encendido a apagado y viceversa)
    toggleLights() {
        this.lightsOn = !this.lightsOn; // Cambia true a false o false a true
    }

    // Método para mostrar en consola si las luces están encendidas
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }

    // Método para mostrar el objeto actual (el tren)
    getSelf() {
        console.log(this);
    }

    // Método para mostrar el prototipo del objeto (donde están los métodos compartidos)
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

// Definición de la clase HighSpeedTrain que hereda de Train
class HighSpeedTrain extends Train {
    // Constructor que añade nuevas propiedades y llama al constructor de Train
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn); // Llama al constructor de Train para inicializar color y luces
        this.passengers = passengers;   // Número de pasajeros
        this.highSpeedOn = highSpeedOn; // Estado de alta velocidad
    }

    // Método para cambiar el estado de alta velocidad
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }

    // Método que sobreescribe toggleLights para añadir comportamiento extra
    toggleLights() {
        super.toggleLights();    // Usa el método toggleLights de Train para cambiar luces
        super.lightsStatus();    // Muestra el estado actualizado de las luces
        console.log('Lights are 100% operational.'); // Mensaje adicional
    }
}

// Crear instancias de Train
var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Muestra: Train {color: 'red', lightsOn: false}

var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

// Usar métodos en una instancia de Train
var train4 = new Train('red', false);
train4.toggleLights();    // Cambia luces a true
train4.lightsStatus();    // Muestra: Lights on? true
train4.getSelf();         // Muestra el objeto train4 con sus propiedades
train4.getPrototype();    // Muestra los métodos compartidos en el prototipo

// Crear instancias de Train y HighSpeedTrain
var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

// Usar métodos en las instancias
train5.toggleLights();    // Cambia luces a true
train5.lightsStatus();    // Muestra: Lights on? true

// En HighSpeedTrain, toggleLights tiene comportamiento extendido
highSpeed1.toggleLights(); 
// Muestra:
// Lights on? true
// Lights are 100% operational.