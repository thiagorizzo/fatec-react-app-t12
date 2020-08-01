import React from "react";

// Props é um objeto => { texto: "...", cor: "..." }
function Cabecalho(props) {
  return (
    <h1 style={{ backgroundColor: "black", color: props.cor }}>
      {props.children}
    </h1>
  );
}

export default Cabecalho;
