import React from "react";
import ProdutoApi from "../api/ProdutoApi";

class ProdutoLista extends React.Component {
  state = {
    produtos: undefined,
  };

  componentDidMount() {
    const produtoApi = new ProdutoApi();

    var promise = produtoApi.getAll();
    promise.then((_produtos) => {
      this.setState({ produtos: _produtos });
    });
  }

  render() {
    return (
      <>
        {this.state.produtos && (
          <table className="table">
            <thead>
              <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Preço</th>
              </tr>
            </thead>
            <tbody>
              {this.state.produtos.map((p) => (
                <tr key={p.codigo}>
                  <td>{p.codigo}</td>
                  <td>{p.nome}</td>
                  <td>{p.preco}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </>
    );
  }
}

export default ProdutoLista;
