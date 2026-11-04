function fib(n) {
    if (n === 0) return 0; // caso base: se pone una condicion para impedir bucle infinito
    if (n === 1) return 1;
    
    
    return fib(n - 1) + fib(n - 2);  // caso recursividad lo que hace es hacer el problema mas pequeño
}
console.log(fib(5)); //llamado a la funcion
console.log(fib(10));
//

