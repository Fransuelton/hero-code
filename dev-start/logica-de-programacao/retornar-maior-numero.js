let qntNumeros = parseInt(prompt("Quantos números você deseja digitar "));

let maior = 0;
let numero;

for (var i = 0; i < qntNumeros; i++) {
  numero = parseInt(prompt("Digite o número desejado "));

  if (numero > maior) {
    maior = numero;
  }
}

console.log("O maior número digitado foi: " + maior);
