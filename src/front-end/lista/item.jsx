import { useState } from "react";
import React from "react";
/* eslint-disable react/prop-types */
export function Item({ produto, handleChangeStatus }) {
  const [status, setStatus] = useState(produto.checked); // Estado local para o status

  const dataLocal = new Date(produto.data).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo", hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: '2-digit' });
  const dataFormatada = dataLocal.replace(',', ''); // Remove a vírgula que aparece entre a data e a hora
  //comentario
  let itemClasse = status === true ? 'line-through text-black' : '';

  // Função para alternar o status do item
  const handleClick = async () => {
    let novoStatus = status === false ? true : false; // Alterna o status
    setStatus(status === false ? true : false); // Atualiza o estado local
    handleChangeStatus(produto, novoStatus); // Chama a função para atualizar no banco
  };

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white shadow-md rounded-lg border border-gray-300 cursor-pointer"
      onClick={handleClick}
    >
      <div className="p-3 bg-gray-50 text-gray-700 rounded">
        <div className={itemClasse}>
          {produto.usuario.nome}
        </div>
      </div>
      <div className={`p-3 bg-gray-100 text-lg font-semibold rounded ${itemClasse}`}>
        <span className="font-bold"></span>{produto.produto} |  {produto.qtd}
      </div>

      <div className="p-3 bg-gray-50 text-gray-700 rounded">
        <div className={itemClasse}>
          {dataFormatada}
        </div>
      </div>
    </div>
  );
}
