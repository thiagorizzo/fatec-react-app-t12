import React, { useState, useEffect } from "react";

const imagemEstrela = `${process.env.PUBLIC_URL}/estrela.png`;
const imagemEstrelaApagada = `${process.env.PUBLIC_URL}/estrela-apagada.png`;

// var objeto = { 'codigo': 1, 'valor': 5 };
// var { codigo, valor } = { 'codigo': 1, 'valor': 5 };
function Avaliacao({ valor }) {
  const [vetorEstrelas, setVetorEstrelas] = useState(undefined);

  useEffect(() => {
    if (valor !== undefined) setVetorEstrelas(new Array(valor).fill(1));
  }, [valor]);

  return (
    <>
      {vetorEstrelas &&
        vetorEstrelas.map(() => (
          <img src={imagemEstrela} style={{ height: 30 }} />
        ))}
      {!vetorEstrelas && "sem avaliação"}
    </>
  );
}

export default Avaliacao;
