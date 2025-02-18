let qntNumeros = parseInt(prompt("Quantos números você deseja digitar "));

let qntPares = 0;
let somaPares = 0;
let qntImpares = 0;
let somaImpares = 0;

for (var i = 0; i < qntNumeros; i++) {
  numero = parseInt(prompt("Digite o número desejado "));

  if (numero % 2 === 0) {
    qntPares = qntPares + 1;
    somaPares = somaPares + numero;
  } else {
    qntImpares = qntImpares + 1;
    somaImpares = somaImpares + numero;
  }
}

console.log("Pares: " + qntPares);
console.log("Impares: " + qntImpares);
console.log("Soma Pares: " + somaPares);
console.log("Soma Impares: " + somaImpares);
console.log("Média impares " + somaImpares / qntImpares);
