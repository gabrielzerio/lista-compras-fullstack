import { useState } from "react";
import React from "react";
/* eslint-disable react/prop-types */
export function Item({produto}) {
  const dataLocal = new Date(produto.data).toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo", hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: '2-digit'});
  
  // Para formatar como "DD/MM/YYYY HH:mm"
  const dataFormatada = dataLocal.replace(',', ''); // Remove a vírgula que aparece entre a data e a hora
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white shadow-md rounded-lg border border-gray-300">
  <div className="p-3 bg-gray-50 text-gray-700 rounded">
    <div>
      {produto.usuario.nome}
    </div>
  </div>
  <div className="p-3 bg-gray-100 text-lg font-semibold rounded">
    <span className="font-bold"></span>{produto.produto} |  {produto.qtd}
  </div>
  
  <div className="p-3 bg-gray-50 text-gray-700 rounded">
    
    <div>
      {dataFormatada}
    </div>
  </div>
</div>

  );
}
