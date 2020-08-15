import React, { useEffect, useState } from "react";
import CategoriaApi from "../api/CategoriaApi";
import Avaliacao from "./Avaliacao";
import { Link } from "react-router-dom";
import ProdutoListaFuncao from "./ProdutoListaFuncao";
import ProdutoApi from "../api/ProdutoApi";
import { toast } from "react-toastify";

function ProdutoEdit({ history }) {
  const [produto, setProduto] = useState({
    nome: "",
    preco: 0,
    avaliacao: 1,
    codigoCategoria: 0,
  });
  const [categorias, setCategorias] = useState();

  useEffect(() => {
    CategoriaApi.getAll().then((response) => {
      setCategorias(response.data);
    });
  }, []);

  function submitForm() {
    ProdutoApi.add(produto)
      .then((response) => {
        debugger;
        history.push("/produtos");
        toast.success("Produto adicionado com sucesso.");
      })

      .catch((error) => {
        debugger;
        toast.error(`Erro: ${error}`);
      });
  }

  function avaliacaoMudou(valor) {
    setProduto({ ...produto, avaliacao: valor });
  }

  function changeHandler(event) {
    setProduto({ ...produto, [event.target.name]: event.target.value });
  }

  return (
    <div className="container">
      <form className="form" onSubmit={submitForm}>
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            className="form-control"
            value={produto.nome}
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="preco">Preço</label>
          <input
            type="number"
            name="preco"
            className="form-control"
            value={produto.preco}
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="categoria">Categoria</label>
          <select
            name="codigoCategoria"
            className="form-control"
            value={produto.codigoCategoria}
            onChange={changeHandler}
          >
            {categorias &&
              categorias.map((c) => (
                <option key={c.codigo} value={c.codigo}>
                  {c.nome}
                </option>
              ))}
          </select>
        </div>
        <div>
          <label htmlFor="avaliacao">Avaliação</label>
          <Avaliacao
            valor={produto.avaliacao}
            editavel={true}
            onAvaliacaoChanged={avaliacaoMudou}
          ></Avaliacao>
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Confirmar
          </button>
          <Link to="/produtos">Cancelar</Link>
        </div>
      </form>
    </div>
  );
}

export default ProdutoEdit;
