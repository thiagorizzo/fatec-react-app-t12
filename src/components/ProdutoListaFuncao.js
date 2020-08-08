import React, { useState, useEffect } from "react";
import ProdutoApi from "../api/ProdutoApi";

function ProdutoListaFuncao() {
  // useState => cria novo state
  const [produtos, setProdutos] = useState(undefined);

  // var [ numero1, numero2 ] = [1, 2];
  const [produtoSelecionado, setProdutoSelecionado] = useState(undefined);

  useEffect(() => {
    const produtoApi = new ProdutoApi();

    var promise = produtoApi.getAll();
    promise.then((_produtos) => {
      setProdutos(_produtos);
    });
  }, []);

  return (
    <>
      {produtos && (
        <table className="table">
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Preço</th>
              <th>Avaliacao</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((p) => (
              <tr key={p.codigo}>
                <td>{p.codigo}</td>
                <td>{p.nome}</td>
                <td>{p.preco}</td>
                <td>{p.avaliacao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default ProdutoListaFuncao;
