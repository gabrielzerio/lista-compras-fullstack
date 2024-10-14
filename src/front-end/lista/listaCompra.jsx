import { useState, useEffect } from "react";
import { Item } from "./item.jsx";
import { ItemModel } from "../objetos/itemModel.js";
import { fetchItens, fetchAllItens } from "../scripts/scriptListaItens.js";
import { adicionaItem } from "../scripts/scriptAdicionaItem.js";
import { useNavigate } from "react-router-dom";

function ListaCompra() {
  const navigate = useNavigate();
  
  const token = localStorage.getItem('tkn');
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const payload = JSON.parse(atob(base64));
  const usuario = payload.nome;
  const id_usuario = payload.id;

  const [itens, setItens] = useState([]);
  const [nomeProduto, setNomeProduto] = useState("");
  const [qtdProduto, setQtdProduto] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const handleNomeProduto = (e) => setNomeProduto(e.target.value);
  const handleQtdProduto = (e) => setQtdProduto(e.target.value);

  const handleAdicionaProduto = async () => {
    const novoItem = new ItemModel(nomeProduto, parseInt(qtdProduto), "66f708a785ec7101e05e6177", id_usuario, usuario);
    const retorno = await adicionaItem(novoItem, token);
    await handleLista();
  };

  const handleCheckBox = (e) => setShowAll(e.target.checked);

  const handleLista = async () => {
    if(localStorage.getItem('tkn') === ""){
      navigate('/');
    }
    const data = showAll ? await fetchItens(token) : await fetchAllItens(token);
    setItens(data);
  };

  useEffect(() => {
    
    handleLista();
  }, [showAll]);

  function handleQuit(){
    localStorage.setItem('tkn', "");
    navigate("/");  
  }
  return (
    <>
      <div className="bg-blue-400 p-3 text-lg font-bold flex justify-between">
        <div>Usuario: {usuario}</div>
        <button onClick={handleQuit}>SAIR</button>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg shadow-md flex flex-col md:flex-row items-start md:items-center gap-4">
        <label>Meus Itens</label>
        <input type="checkbox" checked={showAll} onChange={handleCheckBox} className="indeterminate:bg-gray-300 w-6 h-6" />
        <input
          className="border border-gray-300 rounded-lg p-2 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Produto"
          value={nomeProduto}
          onChange={handleNomeProduto}
        />
        <input
          className="border border-gray-300 rounded-lg p-2 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="number"
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
        <div key={produto.id} className="fade-in-up">
          <Item produto={produto} />
        </div>
      ))}
    </>
  );
}

export default ListaCompra;
