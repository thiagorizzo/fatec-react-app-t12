import React from "react";
import Sobre from "./components/Sobre";
import Cabecalho from "./components/Cabecalho";
import ProdutoLista from "./components/ProdutoLista";

class App extends React.Component {
  getPagina() {
    if (window.location.pathname === "/produtos") return <ProdutoLista />;
    else if (window.location.pathname === "/sobre") return <Sobre />;
    else return "";
  }

  render() {
    return (
      <>
        <Cabecalho cor="cyan">
          <em>Aplicação Fatec-React-App</em>
        </Cabecalho>
        <div className="container">{this.getPagina()}</div>
      </>
    );
  }
}

export default App;
