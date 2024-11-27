// Promessa que vai comprar um sorvete
/*

Possibilidades:
1 - Comprar o sorvete e tudo dar certo
2 - alguma coisa dar errado

Promise = aguardar o resultado de uma promessa.

*/

// const comprarSorvete = true;

// const resultPromise = new Promise((resolve, reject) => {
//   if (comprarSorvete) {
//     return resolve("tudo certo");
//   }
//   return reject("tudo errado");
// });

// async function start() {
//   try {
//     const result = await resultPromise;
//     console.log("🚀 ~ start ~ result:", result)
//   } catch (error) {
//     console.log("erro=>", error);
//   }
// }

// start();

async function getUserGithub(user) {
  try {
    const result = await fetch(`https://api.github.com/users/${user}`);
    const resultJson = await result.json();

    console.log(resultJson.login)
  } catch (error) {
    console.log("🚀 ~ getUserGithub ~ error", error);
  }
}

getUserGithub("fransuelton");
