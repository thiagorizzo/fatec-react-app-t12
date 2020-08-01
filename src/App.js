import React from "react";
import Sobre from "./components/Sobre";
import Cabecalho from "./components/Cabecalho";
import ProdutoLista from "./components/ProdutoLista";

class App extends React.Component {
  render() {
    return (
      <>
        <Cabecalho cor="cyan">
          <em>Aplicação Fatec-React-App</em>
        </Cabecalho>
        <Sobre />
        <ProdutoLista />
      </>
    );
  }
}

export default App;
