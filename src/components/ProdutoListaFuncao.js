import React, { useState, useEffect } from "react";
import ProdutoApi from "../api/ProdutoApi";
import Avaliacao from "./Avaliacao";
import ProdutoDetalhe from "./ProdutoDetalhe";
import { Titulo } from "../Styles";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function ProdutoListaFuncao({ history }) {
  // useState => cria novo state
  const [produtos, setProdutos] = useState(undefined);

  // var [ numero1, numero2 ] = [1, 2];
  const [produtoSelecionado, setProdutoSelecionado] = useState(undefined);

  useEffect(() => {
    var promise = ProdutoApi.getAll();
    promise
      .then((response) => {
        setProdutos(response.data);
      })
      .catch((error) => {
        toast.error("Erro: " + error);
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

  function alterarProduto() {
    if (!produtoSelecionado) {
      toast.error("Selecione um produto.");
      return;
    }

    history.push(`/produto/${produtoSelecionado.codigo}`);
  }

  function removerProduto() {
    if (!produtoSelecionado) {
      toast.error("Selecione um produto.");
      return;
    }

    ProdutoApi.delete(produtoSelecionado.codigo)
      .then((response) => {
        toast.success("Produto removido com sucesso");
      })
      .catch((error) => {
        toast.success(`Erro ao remover produto. ${error}`);
      });
  }

  return (
    <>
      <Titulo>Lista de Produtos</Titulo>
      {produtos && (
        <>
          <div>
            <Link class="btn btn-primary" to="/produto/novo">
              Novo
            </Link>
            <button class="btn btn-primary" onClick={alterarProduto}>
              Alterar
            </button>
            <button class="btn btn-danger" onClick={removerProduto}>
              Remover
            </button>
          </div>
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
                    <Avaliacao valor={p.avaliacao} editavel={false} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      <ProdutoDetalhe
        titulo="Produto Selecionado"
        produto={produtoSelecionado}
      />
    </>
  );
}

export default ProdutoListaFuncao;
