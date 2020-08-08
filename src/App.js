import React from "react";
import Sobre from "./components/Sobre";
import Cabecalho from "./components/Cabecalho";
import ProdutoLista from "./components/ProdutoLista";
import ProdutoListaFuncao from "./components/ProdutoListaFuncao";

class App extends React.Component {
  state = {
    titulo: "",
  };

  // props em componente que é classe
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({ titulo: this.props.titulo });
  }

  getPagina() {
    if (window.location.pathname === "/produtos") return <ProdutoListaFuncao />;
    else if (window.location.pathname === "/sobre") return <Sobre />;
    else return "";
  }

  render() {
    return (
      <>
        <Cabecalho cor="red">
          <em>Aplicação {this.state.titulo}</em>
        </Cabecalho>
        <div className="container">{this.getPagina()}</div>
      </>
    );
  }
}

export default App;
