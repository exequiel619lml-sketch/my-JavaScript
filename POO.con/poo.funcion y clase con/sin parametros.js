// Función sin parámetro por defecto
function sinParametroPorDefecto(number) {
  console.log('Resultado:', number * number);
}

sinParametroPorDefecto(); // Resultado: NaN (porque number es undefined)

// Función con parámetro por defecto
function ConParamtroPorDefecto(number = 10) {
  console.log('Resultado:', number * number);
}

ConParamtroPorDefecto(); // Resultado: 100 (usa 10 por defecto)
ConParamtroPorDefecto(5); // Resultado: 25 (usa el valor pasado)


// Clase sin parámetros por defecto
class NoDefaultParams {
  constructor(num1, num2, num3, string1, bool1) {
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
    this.string1 = string1;
    this.bool1 = bool1;
  }

  calculate() {
    if (this.bool1) {
      console.log(this.string1, this.num1 + this.num2 + this.num3);
      return;
    }
    return "El valor de bool1 es incorrecto";
  }
}

let fail = new NoDefaultParams(1, 2, 3, "Resultado:", false);
console.log(fail.calculate()); // "El valor de bool1 es incorrecto"

// Clase con parámetros por defecto
class WithDefaultParams {
  constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Resultado:", bool1 = true) {
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
    this.string1 = string1;
    this.bool1 = bool1;
  }

  calculate() {
    if (this.bool1) {
      console.log(this.string1, this.num1 + this.num2 + this.num3);
      return;
    }
    return "El valor de bool1 es incorrecto";
  }
}

let better = new WithDefaultParams();
better.calculate(); // Resultado: 6