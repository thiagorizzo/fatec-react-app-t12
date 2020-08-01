class ProdutoApi {
  getAll() {
    let promise = new Promise((resolve, reject) => {
      resolve([
        {
          codigo: 1,
          nome: "Fantasma do Sushiman",
          preco: 250.99,
        },
        {
          codigo: 2,
          nome: "Os últimos de nós",
          preco: 15.5,
        },
      ]);
    });

    return promise;
  }
}

export default ProdutoApi;
