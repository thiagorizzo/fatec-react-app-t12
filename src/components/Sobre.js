import React from "react";
import { Redirect } from "react-router-dom";

function Sobre({ history }) {
  function toProdutos() {
    history.push("/produtos");
  }

  // render
  return (
    <>
      <h2>Essa é uma aplicação criada durante a disciplina.</h2>
      <button onClick={toProdutos}>Produtos</button>
    </>
  );
}

export default Sobre;
