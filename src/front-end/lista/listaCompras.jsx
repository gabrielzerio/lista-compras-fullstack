import { useState, useContext, useEffect } from "react";
import { Item } from "./item";
import { ItemModel } from "../objetos/itemModel";
import { LoginContext } from "../App";

function ListaCompra() {

  const {token} = useContext(LoginContext);

  const [itens, setItens] = useState([]);
  const [solicitante, setSolicitante] = useState('');

  useEffect(() => {
    const fetchItens = async () => {
      try {
        const response = await fetch("http://localhost:3000/lista", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`, // Passa o token JWT no cabeçalho
          },
        });

        if (response.ok) {

          const data = await response.json();
          const itensComNome = data.itens.map(item => ({
            ...item,
            solicitante: data.nome
          }));
          setSolicitante(data.nome);
          setItens(itensComNome); 
        } else {
          console.error("Erro ao buscar produtos", response.status);
        }
      } catch (error) {
        console.error("Erro na requisição", error);
      }
    };

    if (token) {

      fetchItens(); // Faz a requisição apenas se o token estiver disponível
    }
  }, [token]);
  



  const [nomeProduto, setNomeProduto] = useState("");
  const [qtdProduto, setQtdProduto] = useState("");

  const handleNomeProduto = (e) => {
    setNomeProduto(e.target.value);
  };
  const handleQtdProduto = (e) => {
    setQtdProduto(e.target.value);
  };

  const handleAdicionaProduto = () => {
    console.log("alegria");
  };


  return (
    <>
      <div className="bg-blue-400 p-3 text-lg font-bold">Usuario: {solicitante}</div>
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
        <Item key={produto.id} produto={produto} />
      ))}

    </>
  );
}
export default ListaCompra;
