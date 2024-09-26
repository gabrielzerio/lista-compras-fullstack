import { useState } from "react";
import { Produto } from "./produto";

function ListaCompra() {
  const [produtos, setProdutos] = useState([
    { id: 1, nome: "Pacote arroz 5kg", qtd: 1, usuario: "Gabriel Zerio" },
    { id: 2, nome: "Pacote feijão 1kg", qtd: 1, usuario: "Gabriel Zerio" },
    { id: 3, nome: "Bolacha trakinas", qtd: 1, usuario: "Gabriel Zerio" },
  ]);
  const [nomeProduto, setNomeProduto] = useState('');
  const [qtdProduto, setQtdProduto] = useState('');

  const handleNomeProduto = (e) => {
    setNomeProduto(e.target.value);
  }
  const handleQtdProduto = (e) => {
    setQtdProduto(e.target.value);
  }

  const handleAdicionaProduto = () => {
    const novoItem = {
      id: produtos.length + 1,
      nome: nomeProduto,
      qtd: qtdProduto,
      usuario: "Gabriel Zerio",
    };
    setProdutos([...produtos, novoItem]);
    setNomeProduto(''); setQtdProduto('');
  };

  return (
    <>
      <div className="bg-blue-400 p-3 text-lg font-bold">Usuario: Gabriel</div>
      <div className="p-3">
        <input className="border border-gray-300 " type="text" name="input-produto" placeholder="produto" value={nomeProduto} onChange={handleNomeProduto}/>
        <input className="border border-gray-300" type="text" name='input-qtd' placeholder="Quantidade" value={qtdProduto} onChange={handleQtdProduto}/>
        <button className="mx-3 border border-gray-800" onClick={handleAdicionaProduto}>Adicionar</button>
      </div>
      {produtos.map((produto) => (
        <Produto key={produto.id} produto={produto} />
      ))}
      ;
    </>
  );
}
export default ListaCompra;
