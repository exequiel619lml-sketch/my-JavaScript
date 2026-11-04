/*principios POO: herencia, encapsulacion, abstracciòn, polimorfismo*/
class cocina{
    cocinaAlmuerzo() {
        console.log("Me encanta el almuerzo!")
    }
}
class Olla extends cocina {
    cocinaAlmuerzo() {
        super.cocinaAlmuerzo();  //super llama a la clase padre
        console.log ("Me gusta la carne a la olla!")
    }
}
class paila extends cocina {
    cocinaAlmuerzo() {
        console.log ("Me encanta comer huevos!")
    }
}
var aceroOlla = new Olla();
var Cobrepaila = new paila();
aceroOlla.cocinaAlmuerzo();
Cobrepaila.cocinaAlmuerzo();
