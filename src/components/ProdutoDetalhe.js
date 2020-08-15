import React, { useEffect, useState } from "react";
import { Prompt } from "react-router-dom";
import ProdutoApi from "../api/ProdutoApi";

function ProdutoDetalhe({ produto, titulo, match }) {
  const [produtoDetalhe, setProdutoDetalhe] = useState(produto);
  const [tituloDetalhe, setTituloDetalhe] = useState(titulo);

  // 2) executa depois de mount
  useEffect(() => {
    // origem: codigo da rota
    if (match) {
      setTituloDetalhe("Produto Detalhe Por Rota");
      let codigoProduto = +match.params.codigo; // string
      ProdutoApi.getByCodigo(codigoProduto).then((_produto) => {
        setProdutoDetalhe(_produto);
      });
    } else {
      // origem: prop produto
      setProdutoDetalhe(produto);
      setTituloDetalhe(titulo);
    }
  }, [produto, match]);

  // 1) render
  return (
    <>
      <h1>Produto Detalhe</h1>
      <Prompt when={true} message="Deseja realmente sair?" />
      {produtoDetalhe && (
        <div className="card">
          <div className="card-header">{tituloDetalhe}</div>
          <div className="card-body">
            <h5 className="card-title">{produtoDetalhe.nome}</h5>
            <p className="card-text">{produtoDetalhe.preco}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ProdutoDetalhe;
