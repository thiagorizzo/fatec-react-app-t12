import React, { useEffect, useState } from "react";
import CategoriaApi from "../api/CategoriaApi";
import Avaliacao from "./Avaliacao";
import { Link } from "react-router-dom";
import ProdutoApi from "../api/ProdutoApi";
import { toast } from "react-toastify";

function ProdutoEdit({ history, match }) {
  const [isEdit, setIsEdit] = useState(false);
  const [errors, setErrors] = useState({});

  const [produto, setProduto] = useState({
    nome: "",
    preco: 0,
    avaliacao: 1,
    codigoCategoria: 0,
  });
  const [categorias, setCategorias] = useState();

  useEffect(() => {
    if (match) {
      setIsEdit(true);
      let codigoProduto = +match.params.codigo;
      ProdutoApi.getByCodigo(codigoProduto).then((response) => {
        setProduto(response.data);
      });
    }
    CategoriaApi.getAll().then((response) => {
      setCategorias(response.data);
    });
  }, []);

  function submitForm(event) {
    event.preventDefault();
    if (!isEdit) {
      ProdutoApi.add(produto)
        .then((response) => {
          history.push("/produtos");
          toast.success("Produto adicionado com sucesso.");
        })

        .catch((error) => {
          toast.error(`Erro: ${error}`);
        });
    } else {
      ProdutoApi.edit(produto)
        .then((response) => {
          history.push("/produtos");
          toast.success("Produto adicionado com sucesso.");
        })

        .catch((error) => {
          toast.error(`Erro: ${error}`);
        });
    }
  }

  function avaliacaoMudou(valor) {
    setProduto({ ...produto, avaliacao: valor });
  }

  function changeHandler(event) {
    setErrors({});
    switch (event.target.name) {
      case "nome":
        if (event.target.value.length === 0)
          setErrors({ nome: "Nome é obrigatório" });
        break;
      default:
    }

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
          {errors.nome && <div style={{ color: "red" }}>{errors.nome}</div>}
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
