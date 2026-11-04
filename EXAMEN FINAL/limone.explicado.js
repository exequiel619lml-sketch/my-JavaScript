/* =========================================================================
   LITTLE LEMON — RECIBIDOR (Receipt Maker)
   Proyecto final: Programming with JavaScript (Meta / Coursera)
   Autor: Exequiel
   -------------------------------------------------------------------------
   Este archivo imprime en consola el precio de cada plato (con o sin
   impuesto) y luego el descuento que corresponde segun la cantidad de
   comensales.
   ========================================================================= */


/* -------------------------------------------------------------------------
   DATOS DE LOS PLATOS
   -------------------------------------------------------------------------
   dishData es un ARRAY (una lista ordenada) de OBJETOS.
   Cada objeto es como una ficha con dos campos: "name" y "price".
   Se accede a cada campo con punto:  dish.name  /  dish.price
   Se usa "const" porque la lista no se va a reasignar.
------------------------------------------------------------------------- */
const dishData = [
    { name: "Italian pasta", price: 9.55 },
    { name: "Rice with veggies", price: 8.65 },
    { name: "Chicken with potatoes", price: 15.55 },
    { name: "Vegetarian Pizza", price: 6.45 },
];


/* -------------------------------------------------------------------------
   VALOR DEL IMPUESTO
   -------------------------------------------------------------------------
   OJO: vale 1.20, no 0.20.
   Esto significa que el impuesto se aplica MULTIPLICANDO, no sumando:
       precio * 1.20  ->  el precio mas un 20%
   Si valiera 0.20 habria que escribir:  precio + (precio * 0.20)
------------------------------------------------------------------------- */
const tax = 1.20;


/* =========================================================================
   TAREA 1 — getPrices(taxBoolean)
   -------------------------------------------------------------------------
   Recorre el menu completo e imprime el precio de cada plato.
   Recibe un solo parametro:
       taxBoolean -> true  = mostrar precios CON impuesto
                     false = mostrar precios SIN impuesto
========================================================================= */
function getPrices(taxBoolean) {

    // Bucle for...of: toma la lista y entrega un plato por vuelta.
    // En cada vuelta, la variable "dish" contiene UN objeto del array.
    for (const dish of dishData) {

        // Se declara DENTRO del bucle para que arranque limpia en cada vuelta.
        // "let" permite reasignarla mas abajo; "const" no lo permitiria.
        let finalPrice;

        // --- Logica condicional ---
        // Se usa === (triple igual) y no == (doble igual) a proposito:
        //   ===  compara VALOR y TIPO   ->  1 === true  es false
        //   ==   convierte tipos antes  ->  1 ==  true  es true  (!)
        // Con == el caso defensivo de abajo nunca se activaria si alguien
        // pasara un 1 o un 0 en lugar de un booleano.
        if (taxBoolean === true) {
            finalPrice = dish.price * tax     // precio con 20% de impuesto

        } else if (taxBoolean === false) {
            finalPrice = dish.price;          // precio tal cual

        } else {
            // CASO DEFENSIVO: llego algo que no es booleano
            // (undefined, un texto, un numero...).
            console.log("You need to pass a boolean to the getPrices call!");

            // "return" corta la ejecucion de ESTA funcion inmediatamente.
            // No se imprime ningun plato y no se sigue iterando.
            return
        }

        // --- Salida ---
        // Template literal: comillas invertidas ` ` que permiten insertar
        // variables con ${ }.
        // El doble signo peso NO es un error:
        //   el primer $  -> es el simbolo de moneda, texto literal
        //   el segundo $ -> es parte de la sintaxis ${finalPrice}
        console.log(`Dish: ${dish.name} Price: $${finalPrice}`);
    }

}


/* =========================================================================
   TAREA 2 — getDiscount(taxBoolean, guests)
   -------------------------------------------------------------------------
   Coordina todo: primero manda a imprimir los precios y despues calcula
   el descuento del grupo.
   Parametros:
       taxBoolean -> se pasa tal cual a getPrices()
       guests     -> cantidad de comensales
========================================================================= */
function getDiscount(taxBoolean, guests) {

    // 2.1 ENCADENAMIENTO
    // Una funcion llamando a otra. Va primero para que los precios
    // individuales aparezcan antes del resumen del descuento.
    getPrices(taxBoolean);

    /* 2.2 VALIDACION DEFENSIVA
       Tres condiciones unidas por && ("y ademas"). Las tres deben cumplirse.

       typeof guests === "number"
           typeof devuelve un TEXTO que describe el tipo del valor:
               typeof 5      ->  "number"
               typeof "hola" ->  "string"
           Error tipico: escribir  guests === "number"  compara el valor
           contra la palabra "number" y siempre da false.

       guests > 0 && guests < 30
           El enunciado pide el rango EXCLUYENTE: ni el 0 ni el 30 son
           validos. Por eso > y <, nunca >= ni <=.

       Dato util: && evalua de izquierda a derecha y se detiene apenas una
       condicion falla. Si guests es un texto, ni siquiera intenta compararlo
       con numeros.                                                          */
    if (typeof guests === "number" && guests > 0 && guests < 30) {

        // Valor inicial. Se sobrescribe segun el tamano del grupo.
        let discount = 0;

        // 2.3 CALCULO DEL DESCUENTO
        // Cuidado con poner punto y coma despues del if:  if (x);
        // Eso cierra el if en seco, el bloque de abajo se ejecuta siempre
        // y el else queda huerfano (error de sintaxis).
        if (guests < 5) {
            discount = 5;      // grupos chicos
        } else {
            discount = 10;     // 5 comensales o mas
        }

        // 2.4 REGISTRO FINAL (formato exacto pedido por el enunciado)
        console.log(`Discount is: $${discount}`);

    } else {
        // guests no es numero, o esta fuera del rango permitido.
        console.log("The second argument must be a number between 0 and 30");
    }
}


/* =========================================================================
   LLAMADAS DE PRUEBA
   -------------------------------------------------------------------------
   Declarar una funcion no la ejecuta: es como escribir una receta en un
   cuaderno. Recien al escribir el nombre con parentesis se "prende la
   cocina".
========================================================================= */

getDiscount(true, 2);    // 4 platos CON impuesto  + "Discount is: $5"
getDiscount(false, 10);  // 4 platos SIN impuesto  + "Discount is: $10"
getDiscount();           // dispara los DOS mensajes defensivos


/* -------------------------------------------------------------------------
   NOTA SOBRE LA TERCERA LLAMADA
   -------------------------------------------------------------------------
   getDiscount() sin argumentos imprime DOS mensajes de error seguidos:

       You need to pass a boolean to the getPrices call!
       The second argument must be a number between 0 and 30

   Por que? El "return" dentro de getPrices detiene a getPrices, pero NO
   detiene a getDiscount, que es quien la llamo. Es como colgar el telefono:
   uno corta, el otro sigue con su dia. getDiscount continua, evalua guests
   (que vale undefined) y cae al else.

   Este comportamiento es el esperado segun el enunciado.
------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------
   OBSERVACION SOBRE LOS DECIMALES
   -------------------------------------------------------------------------
   Al correr con taxBoolean = true aparecen numeros como 11.459999999999999
   en lugar de 11.46.

   No es un bug del codigo. Los computadores guardan los decimales en
   binario, y algunos numeros (como 0.1 o 1.2) no tienen representacion
   exacta en ese sistema, igual que 1/3 no la tiene en decimal. El error
   minusculo se arrastra al multiplicar.

   Si se quisiera mostrar siempre dos decimales:
       console.log(`Dish: ${dish.name} Price: $${finalPrice.toFixed(2)}`);

   No se aplico aqui porque el enunciado no lo pide.
------------------------------------------------------------------------- */