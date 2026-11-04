function letterFinder (word,match) {
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            console.log('Found the', match, 'at', i)
        } else {
             console.log('--No match found at', i)
        }
    }
}
letterFinder ("test" ,"t")
/* quiero construir una funcion que haga una interacion sobre una palabra dada
para que encuentre la posicion de una letra en la palabra dada.

1. defino el nombre de la funcion y le agrego 2 parametros word y match
2. luego defino la variable , la condicion en donde quiero que 
el contador "i" debe ser menor que la cantidad total de letras en la palabra. 
Esto asegura que el ciclo recorra cada letra de la palabra sin pasarse del final
y luego tengo el incremento de i en 1 mediante i++
3. defino una condicion que sea verdadera donde si la palabra encontrada
en word a partir de la lista i es igual a match indicara la posicion en la que
esta letra en la palabra se encuentra
4.mostramos en consola que encontramos la letra y en qué posición (i)
5. si la posicion de i no es igual a la letra que buscamos la consola mostrara
que no hay coincidencia en esa posiciòn
llamo a la funcion letterFinder con la palabra "test" y la letra "t"*/