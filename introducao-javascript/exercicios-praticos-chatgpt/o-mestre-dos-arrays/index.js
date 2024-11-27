const tesouros = [
  {
    nome: "Barra de ouro",
    valor: 400,
    raridade: "médio",
  },
  {
    nome: "Anel de diamantes",
    valor: 250,
    raridade: "baixo",
  },
  {
    nome: "Colar antigo",
    valor: 1000,
    raridade: "alto",
  },
  {
    nome: "Esmeralda",
    valor: 3500,
    raridade: "alto",
  },
  {
    nome: "Quadro famoso",
    valor: 5000000,
    raridade: "alto",
  },
];

// 1. Exibir todos os tesouros formatados.

console.log("Tesouro: ", tesouros);

// 2. Ordenar os tesouros por valor (maior > menor)

console.log(
  tesouros.sort((a, b) => {
    if (a.valor > b.valor) {
      return -1;
    } else if (b.valor > a.valor) {
      return +1;
    }

    return 0;
  })
);

// 3. Filtrar apenas os tesouros de raridade "alto" e exibir uma nova lista

console.log(
  tesouros.filter((tesouro) => {
    const raridadeAlta = tesouro.raridade === "alto";

    return raridadeAlta;
  })
);

// 4. Calcular o valor total dos tesouros

console.log(
  tesouros.reduce((acumulador, tesouro) => {
    acumulador += tesouro.valor;

    return acumulador;
  }, 0)
);

// Extra: Adicionando um tesouro novo à lista

tesouros.push({
  nome: "Joia rara",
  valor: 800,
  raridade: "alta",
});

console.log(tesouros);
