import React, { useState, useEffect } from "react";
import ProdutoApi from "../api/ProdutoApi";
import Avaliacao from "./Avaliacao";
import ProdutoDetalhe from "./ProdutoDetalhe";
import { Titulo } from "../Styles";

function ProdutoListaFuncao() {
  // useState => cria novo state
  const [produtos, setProdutos] = useState(undefined);

  // var [ numero1, numero2 ] = [1, 2];
  const [produtoSelecionado, setProdutoSelecionado] = useState(undefined);

  useEffect(() => {
    var promise = ProdutoApi.getAll();
    promise.then((_produtos) => {
      setProdutos(_produtos);
    });

    return () => {
      // componentDidUnmount()
    };
  }, []);

  function selecionarProduto(produto) {
    setProdutoSelecionado(produto);
  }

  function getProdutoStyle(produto) {
    if (produto === produtoSelecionado)
      return {
        backgroundColor: "cyan",
      };

    return undefined;
  }

  return (
    <>
      <Titulo>Lista de Produtos</Titulo>
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
              <tr
                key={p.codigo}
                onClick={() => selecionarProduto(p)}
                style={getProdutoStyle(p)}
              >
                <td>{p.codigo}</td>
                <td>{p.nome}</td>
                <td>{p.preco}</td>
                <td>
                  <Avaliacao valor={p.avaliacao} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <ProdutoDetalhe
        titulo="Produto Selecionado"
        produto={produtoSelecionado}
      />
    </>
  );
}

export default ProdutoListaFuncao;
