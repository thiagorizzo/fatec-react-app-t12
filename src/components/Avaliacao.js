import React, { useState, useEffect } from "react";

const imagemEstrela = `${process.env.PUBLIC_URL}/estrela.png`;
const imagemEstrelaApagada = `${process.env.PUBLIC_URL}/estrela-apagada.png`;

// var objeto = { 'codigo': 1, 'valor': 5 };
// var { codigo, valor } = { 'codigo': 1, 'valor': 5 };
function Avaliacao({ valor }) {
  const [vetorEstrelas, setVetorEstrelas] = useState(undefined);

  // 3 => [1,1,1,0,0]
  useEffect(() => {
    if (valor !== undefined)
      setVetorEstrelas(new Array(5).fill(0).fill(1, 0, valor - 1));
  }, [valor]);

  return (
    <>
      {vetorEstrelas &&
        vetorEstrelas.map((v, index) => (
          <img
            key={index}
            alt="avaliacao"
            src={v === 0 ? imagemEstrelaApagada : imagemEstrela}
            style={{ height: 30 }}
          />
        ))}
      {!vetorEstrelas && "sem avaliação"}
    </>
  );
}

export default Avaliacao;
