function addTwoNums (a, b) {
    try{
        if(typeof(a) != "number") {
            throw new ReferenceError("The first argument is not a number")
        }else if (typeof(b) != "number") {
             throw new ReferenceError("The second argument is not a number")
        }else{
            console.log(a + b)
        }
        console.log (a + b)
        }catch(err){
        console.log("Error!", err)
    }
}
addTwoNums (5, "5")
console.log("It still works")

/* Aqui en esta funcion lo que hago es crear mediante bloques try, throw, catch
una red que detecte errores en el codigo basicamente:
1. llamo una funcion ddTwoNums que tiene 2 parametros a y b
2. luego uso try para poder comenzar un codigo que puede tener errores
3. verifica mediante una condicion  if si el argumento tipo A no es un nùmero
4. Si a no es un numero, lanza un error de tipo ReferenceError
con un mensaje personalizado
5. si A es un numero verifica que B no sea numero
6. Si B no es un numero, lanza un error de tipo ReferenceError
con un mensaje personalizado
7 y 8. Si ambos son numeros se imprime la suma de a + b
10. redundante porque ya se habia impreso el bloque de arriba
11. se inicia el bloque catch para atrapar el error creado dentro de try
y para ello imprimira un mensaje !ERROR! seguido del error capturado
12. se llama a la funcion ddTwoNums con los valores 5 y "5" 
13. se pone en la consola un mensaje "It still works" mostrando que el programa
sigue funcionando a pesar del error. */

function addTwoNums (a, b) {
    try{
        if(typeof(a) != "number") {
            throw new ReferenceError("The first argument is not a number")
        }else if (typeof(b) != "number") {
             throw new ReferenceError("The second argument is not a number")
        }else{
            console.log(a + b)
        }
        }catch(err){
        console.log("Error!", err)
    }
}
addTwoNums (5, "5")
console.log("It still works")
/*asi queda corregido notese que las llaves con las condicionales todo queda
dentro del bloque try mientras que catch queda fuera de try para poder
evaluar ese bloque y luego cerrar con las llaves todo en la funcion*/