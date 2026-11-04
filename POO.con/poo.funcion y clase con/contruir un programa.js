class Animal {
    constructor(color = 'amarillo', energia = 100) {
        this.color = color;
        this.energia = energia;
    }
    estaActivo() {
        if(this.energia > 0) {
            this.energia -= 20;
            console.log('La energía está disminuyendo, actualmente en:', this.energia)
        } else if(this.energia == 0){
            this.dormir();
        }
    }
    dormir() {
        this.energia += 20;
        console.log('La energía está aumentando, actualmente en:', this.energia)
    }
    obtenerColor() {
        console.log(this.color)
    }
}

class Gato extends Animal {
    constructor(sonido = 'ronroneo', puedeSaltarAlto = true, puedeTreparArboles = true, color, energia) {
        super(color, energia);
        this.sonido = sonido;
        this.puedeTreparArboles = puedeTreparArboles;
        this.puedeSaltarAlto = puedeSaltarAlto;
    }
    hacerSonido() {
        console.log(this.sonido);
    }
}

class Ave extends Animal {
    constructor(sonido = 'pío', puedeVolar = true, color, energia) {
        super(color, energia);
        this.sonido = sonido;
        this.puedeVolar = puedeVolar;
    }
    hacerSonido() {
        console.log(this.sonido);
    }
}

class GatoDomestico extends Gato {
    constructor(sonidoGatoDomestico = "miau", sonido, puedeSaltarAlto, puedeTreparArboles, color, energia) {
        super(sonido, puedeSaltarAlto, puedeTreparArboles, color, energia);
        this.sonidoGatoDomestico = sonidoGatoDomestico;
    }
    hacerSonido(opcion) {
        if (opcion) {
            super.hacerSonido();
        }
        console.log(this.sonidoGatoDomestico);
    }
}

class Tigre extends Gato {
    constructor(sonidoTigre = "¡Rugido!", sonido, puedeSaltarAlto, puedeTreparArboles, color, energia) {
        super(sonido, puedeSaltarAlto, puedeTreparArboles, color, energia);
        this.sonidoTigre = sonidoTigre;
    }
    hacerSonido(opcion) {
        if (opcion) {
            super.hacerSonido();
        }
        console.log(this.sonidoTigre);
    }
}

class Loro extends Ave {
    constructor(puedeHablar = false, sonido, puedeVolar, color, energia) {
        super(sonido, puedeVolar, color, energia);
        this.puedeHablar = puedeHablar;
    }
    hacerSonido(opcion) {
        if (opcion) {
            super.hacerSonido();
        }
        if (this.puedeHablar) {
            console.log("¡Soy un loro que habla!");
        }
    }
}

var fiji = new Loro(false); 
var polly = new Loro(true); 

fiji.hacerSonido(); 
fiji.hacerSonido(true); 

polly.hacerSonido(); 
polly.hacerSonido(true); 

polly.color; 
polly.energia; 

polly.estaActivo(); 

var pinguino = new Ave("grito", false, "negro y blanco", 200); 
pinguino; 

pinguino.sonido; 
pinguino.puedeVolar; 
pinguino.color; 
pinguino.energia; 
pinguino.estaActivo(); 

var leo = new GatoDomestico();

leo.hacerSonido(false); 
leo.hacerSonido(true); 

var cuddles = new Tigre();
cuddles.hacerSonido(false); 
cuddles.hacerSonido(true);