import { useState, useEffect } from "react";
import { Item } from "./item.jsx";
import { ItemModel } from "../objetos/itemModel.js";
import { fetchItens } from "../scripts/scriptListaItens.js";
import { fetchAllItens } from "../scripts/scriptListaItens.js";
import { adicionaItem } from "../scripts/scriptAdicionaItem.js";
import { useLocation } from "react-router-dom";

function ListaCompra() {
  const token = localStorage.getItem("tkn");
  const location = useLocation();
  // Separa o payload (a segunda parte do token) e decodifica
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const payload = JSON.parse(atob(base64));
  const usuario = payload.nome;
  const id_usuario = payload.id;
  const queryParams = new URLSearchParams(location.search);
  const listaId = queryParams.get("id"); // Recupera o valor do parâmetro 'id'

  const [itens, setItens] = useState([]);
  const [nomeProduto, setNomeProduto] = useState("");
  const [qtdProduto, setQtdProduto] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const handleNomeProduto = (e) => {
    setNomeProduto(e.target.value);
  };
  const handleQtdProduto = (e) => {
    setQtdProduto(e.target.value);
  };

  const handleAdicionaProduto = async () => {
    const novoItem = new ItemModel(
      nomeProduto,
      parseInt(qtdProduto),
      listaId,
      id_usuario,
      usuario
    );
    const retorno = await adicionaItem(novoItem, token);
    await handleLista();
  };

  const handleCheckBox = (e) => {
    setShowAll(e.target.checked);
  };

  const handleLista = async () => {
    if (showAll) {
      const data = await fetchItens(token, listaId);
      setItens(data);
    } else {
      const data = await fetchAllItens(token, listaId);
      setItens(data);
    }

    // setSolicitante(data['solicitante']);
  };

  useEffect(() => {
    handleLista();
  }, [showAll]);

  return (
    <>
      <div className="bg-blue-400 p-3 text-lg font-bold">
        Usuario: {usuario}
      </div>
      <div className="p-4 bg-gray-50 rounded-lg shadow-md flex flex-col md:flex-row items-start md:items-center gap-4">
        <label>Meus Itens</label>
        <input
          type="checkbox"
          checked={showAll}
          onChange={handleCheckBox}
          name="yn"
          className="indeterminate:bg-gray-300 w-6 h-6"
        />
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
      <div >
        <span className="font-bold">Solicitante:</span>
      </div>
        <div>
          <span className="font-bold">Item:</span>
        </div>
        <div>
          <span className="font-bold">Data:</span>
        </div>
      </div>
      {itens.map((produto) => (
        <Item
          key={produto.id}
          produto={produto}
          solicitante={produto.id_usuario}
        />
      ))}
    </>
  );
}
export default ListaCompra;
