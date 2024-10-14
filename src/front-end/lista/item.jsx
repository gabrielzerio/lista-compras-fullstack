import { useState } from "react";
import React from "react";
/* eslint-disable react/prop-types */
export function Item({ produto, teste} ) {
  const [riscado, setRiscado] = useState(false);

  const toggleRiscado = () => {
    setRiscado(!riscado);
  };

  const dataLocal = new Date(produto.data).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

  return (
    <div 
      onClick={toggleRiscado} 
      className={`grid grid-cols-2 gap-1 sm:grid-cols-3 sm:gap-4 sm:p-4 bg-white shadow-md rounded-lg border border-gray-300 cursor-pointer
      ${riscado ? "line-through text-red-400" : ""}`}
    >
      <div className="p-3 bg-gray-100 text-lg text-gray-700  font-semibold rounded">
        {produto.produto} | {produto.qtd}
      </div>
      <div className="p-3 bg-gray-50 text-gray-700 rounded">
        {produto.usuario.nome}
      </div>
      <div className="order-first bg-gray-50 rounded text-center col-span-2 sm:col-span-1 text-gray-700 sm:p-3 sm:text-left sm:order-none">
        {dataLocal}
      </div>
    </div>
  );
}
