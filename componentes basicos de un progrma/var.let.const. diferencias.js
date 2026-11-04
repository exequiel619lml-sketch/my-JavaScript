
// Uso de const para un valor que no cambia
const x = 10;  
console.log(x); 

// Uso de let para variables que pueden cambiar pero no se redeclaran
let a = 20;    
console.log(a); 


if (true) {
    let z = 30;   // Variable con ámbito de bloque
    console.log(z); 
}


let b = 40; // Variable que puede reasignarse
b = 50; 
console.log(b);

const PI = 3.14159; // Valor constante que no debería cambiar
console.log(PI);
