/*el primer lenguaje que cree es con condicionales if, if-else para evaluar
las condiciones de ciertos numeros*/
var age = 10;
if(age >= 65) {
    console.log("You receive your pension income")
} else if (age <= 65 && age >= 18) {
    console.log("You receive a salary every month")
} else if (age<18) {
    console.log("Recibes un subsidio");
} else {
    console.log("El valor de la variable no es numèrico");
}
/*el segundo lenguaje que cree es con switch, case, breack y default
es una planificacion semanal*/
var day = "Sunday";
switch (day) {   /* me costo entender que javaScript no lee este dato si va con "" */
    case "monday":
    console.log("trabajar");
    break;
    case "Tuesday":
    console.log("crear");
    break;
    case "Wednesday":
    console.log("estudiar");
    break;
    case "Thursday":
    console.log("trabajar");
    break;
    case "Friday":
    console.log("Ir a comer");
    break;
    case "Sathurday":
    console.log("trabajar");
    break;
    case "Sunday":
    console.log("trabajar todo el dia");
    break;
    default:
    console.log("There is no such day");
    }

