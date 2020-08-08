import React from "react";
import Sobre from "./components/Sobre";
import Cabecalho from "./components/Cabecalho";
import ProdutoListaFuncao from "./components/ProdutoListaFuncao";
import PaginaPrincipal from "./components/PaginaPrincipal";
import PaginaNaoEncontrada from "./components/PaginaNaoEncontrada";
import GlobalStyles from "./GlobalStyles";
import { Route, Switch, NavLink } from "react-router-dom";

class App extends React.Component {
  state = {
    titulo: "",
  };

  componentWillMount() {
    this.setState({ titulo: this.props.titulo });
  }

  render() {
    return (
      <>
        <GlobalStyles />
        <Cabecalho cor="red">
          <em>{this.state.titulo}</em>
        </Cabecalho>
        <ul className="nav nav-tabs">
          <NavLink className="nav-link" activeClassName="active" exact to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" activeClassName="active" to="/produtos">
            Produtos
          </NavLink>
          <NavLink className="nav-link" activeClassName="active" to="/sobre">
            Sobre
          </NavLink>
        </ul>
        <Switch>
          <Route path="/" exact component={PaginaPrincipal}></Route>
          <Route path="/produtos" component={ProdutoListaFuncao}></Route>
          <Route path="/sobre" component={Sobre}></Route>
          <Route component={PaginaNaoEncontrada}></Route>
        </Switch>
      </>
    );
  }
}

export default App;
