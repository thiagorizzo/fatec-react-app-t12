class ProdutoApi {
  static produtos = [
    {
      codigo: 1,
      nome: "Fantasma do Sushiman",
      preco: 250.99,
      avaliacao: 4,
    },
    {
      codigo: 2,
      nome: "Os últimos de nós 2",
      preco: 15.5,
      avaliacao: 5,
    },
    {
      codigo: 3,
      nome: "Aliens atacando humanos",
      preco: 39.5,
      avaliacao: 2,
    },
    {
      codigo: 4,
      nome: "Fantasia Final 15zão",
      preco: 2,
      avaliacao: undefined,
    },
  ];

  static getAll() {
    let promise = new Promise((resolve, reject) => {
      resolve(this.produtos);
    });

    return promise;
  }

  static getByCodigo(codigo) {
    let promise = new Promise((resolve, reject) => {
      var produto = this.produtos.filter((p) => {
        return codigo === p.codigo;
      })[0];

      resolve(produto);
    });

    return promise;
  }
}

export default ProdutoApi;
