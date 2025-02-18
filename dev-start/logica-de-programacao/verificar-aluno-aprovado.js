let nMatematica = 6;
let nPortugues = 4;
let nHistoria = 10;
let nGeografia = 10;

const mediaDoAluno = (nMatematica + nPortugues + nHistoria + nGeografia) / 4;

console.log(`A média do aluno é: ${mediaDoAluno}`);

if (mediaDoAluno > 7) {
  console.log("O aluno está aprovado!");
} else {
  console.log("O aluno não está aprovado!");
}
