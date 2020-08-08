import React from "react";

function ProdutoDetalhe({ produto, titulo }) {
  return (
    <>
      <h1>Produto Detalhe</h1>
      {produto && (
        <div className="card">
          <div className="card-header">{titulo}</div>
          <div className="card-body">
            <h5 className="card-title">{produto.nome}</h5>
            <p className="card-text">{produto.preco}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ProdutoDetalhe;
