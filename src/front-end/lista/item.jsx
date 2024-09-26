/* eslint-disable react/prop-types */
export function Item({ produto }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white shadow-md rounded-lg border border-gray-300">
      <div className="p-3 bg-gray-100 text-lg font-semibold rounded">
        {produto.nome}
      </div>
      <div className="p-3 bg-gray-50 text-gray-700 rounded">
        <span className="font-bold">Quantidade:</span> {produto.qtd}
      </div>
      <div className="p-3 bg-gray-50 text-gray-700 rounded">
        <span className="font-bold">Solicitante:</span> {produto.usuario}
      </div>
    </div>
  );
}