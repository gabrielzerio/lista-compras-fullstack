import { useState } from "react";
import { Item } from "./item";
import { ItemModel } from "../objetos/itemModel";

function ListaCompra() {
  const [itens, setItens] = useState([
    { id: 1, nome: "Pacote arroz 5kg", qtd: 1, usuario: "Gabriel Zerio" },
    { id: 2, nome: "Pacote feijão 1kg", qtd: 1, usuario: "Gabriel Zerio" },
    { id: 3, nome: "Bolacha trakinas", qtd: 1, usuario: "Gabriel Zerio" },
  ]);

  const [nomeProduto, setNomeProduto] = useState("");
  const [qtdProduto, setQtdProduto] = useState("");

  const handleNomeProduto = (e) => {
    setNomeProduto(e.target.value);
  };
  const handleQtdProduto = (e) => {
    setQtdProduto(e.target.value);
  };

  const handleAdicionaProduto = () => {
    if(nomeProduto.trim === '') return;
    if(qtdProduto === '') return;
    const novoItem = new ItemModel(
      itens.length + 1,
      nomeProduto,
      qtdProduto,
      "Gabriel Zerio"
    );
    setItens([...itens, novoItem]);
    setNomeProduto("");
    setQtdProduto("");
  };

  return (
    <>
      <div className="bg-blue-400 p-3 text-lg font-bold">Usuario: Gabriel</div>
      <div className="p-4 bg-gray-50 rounded-lg shadow-md flex flex-col md:flex-row items-start md:items-center gap-4">
        <input
          className="border border-gray-300 rounded-lg p-2 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          name="input-produto"
          placeholder="Produto"
          value={nomeProduto}
          onChange={handleNomeProduto}
        />
        <input
          className="border border-gray-300 rounded-lg p-2 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="number"
          name="input-qtd"
          placeholder="Quantidade"
          value={qtdProduto}
          onChange={handleQtdProduto}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-200 ease-in-out"
          onClick={handleAdicionaProduto}
        >
          Adicionar
        </button>
      </div>
      {itens.map((produto) => (
        <Item key={produto.id} produto={produto} />
      ))}
      ;
    </>
  );
}
export default ListaCompra;
