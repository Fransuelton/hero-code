// 1. Faça uma chamada usando fetch

const getUsers = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const resultJson = await result.json();
  // 2. Exiba no console os nomes dos usuários
  console.log("🚀 ~ getUsers ~ resultJson:", resultJson);
};

// 3. Função que recebe um ID como parâmetro, faz uma nova chamada para buscar detalhes específicos de um usuário e exibe informações como nome, email e cidade.

async function buscarUsuarioEspecifico(id) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const resultJson = await result.json();
  const user = {
    name: resultJson.name,
    email: resultJson.email,
    city: resultJson.address.city,
  };

  console.log("User: ", user);
}

getUsers();
buscarUsuarioEspecifico(1);
