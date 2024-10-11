/* eslint-disable react/prop-types */
export function Item({produto}) {
  const dataLocal = new Date(produto.data).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-white shadow-md rounded-lg border border-gray-300">
      <div className="p-3 bg-gray-100 text-lg font-semibold rounded">
      <span className="font-bold"></span>{produto.produto} |  {produto.qtd}
      </div>
      <div className="p-3 bg-gray-50 text-gray-700 rounded">
        <span className="font-bold">Qtd: </span> {produto.qtd}
      </div>
      <div className="p-3 bg-gray-50 text-gray-700 rounded">
        <span className="font-bold">Solicitante: </span> {produto.usuario.nome}
      </div>
      <div className="p-3 bg-gray-50 text-gray-700 rounded">
        <span className="font-bold">Adicionado: </span> {dataLocal}
      </div>
    </div>
  );
}
