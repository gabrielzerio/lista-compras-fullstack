import { useState, useEffect } from "react";
import { Item } from "./item";
import { ItemModel } from "../objetos/itemModel";
import { fetchItens } from "../scripts/scriptListaItens.js";
import { adicionaItem } from "../scripts/scriptAdicionaItem.js";

function ListaCompra() {
  const token = localStorage.getItem('tkn');
  const [itens, setItens] = useState([]);
  const [solicitante, setSolicitante] = useState([]);
  const [nomeProduto, setNomeProduto] = useState("");
  const [qtdProduto, setQtdProduto] = useState("");

  const handleNomeProduto = (e) => {
    setNomeProduto(e.target.value);
  };
  const handleQtdProduto = (e) => {
    setQtdProduto(e.target.value);
  };

  const handleAdicionaProduto = () => {
    const novoItem = new ItemModel(nomeProduto, qtdProduto, solicitante[1]);
    adicionaItem(novoItem);

    handleLista();
  };

  const handleLista = async () => {
    const data = await fetchItens(token);
    setItens(data['itens']);
    setSolicitante(data['solicitante']);
    // console.log(solicitante);
  }

  useEffect(() => {
    handleLista();
      
    },[])

  return (
    <>
      <div className="bg-blue-400 p-3 text-lg font-bold">Usuario: {solicitante[0]}</div>
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
      { itens.map((produto) => (
        <Item key={produto.id} produto={produto} solicitante={solicitante[0]}  />
      ))}
      
    </>
  );
}
export default ListaCompra;
