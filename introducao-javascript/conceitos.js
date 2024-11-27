const number = 5;

var string = "Olá, mundo!";

let array = [];
const object = {};

const multiply = (valorA, valorB) => {
  if (valorA > 100) {
    return valorA / valorB;
  }

  return valorA * valorB;
};

function soma(valorA, valorB) {
  const sum = valorA + valorB;
  return sum;
}

console.log(soma(10, 20));

console.log(multiply(101, 20));
