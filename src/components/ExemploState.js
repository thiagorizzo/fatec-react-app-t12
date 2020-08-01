import React from "react";

class ExemploState extends React.Component {
  state = {
    nomeCliente: "João",
    codigoCliente: 1,
  };

  setNomeCliente(event) {
    this.setState({ nomeCliente: event.target.value });
  }

  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.nomeCliente}
          onChange={(event) => this.setNomeCliente(event)}
        ></input>
        {this.state.nomeCliente}
      </>
    );
  }
}

export default ExemploState;
