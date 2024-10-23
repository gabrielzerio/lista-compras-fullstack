import { useState, useEffect } from "react";
import { fetchListas } from "../scripts/scriptListaListas";
import { useNavigate } from "react-router-dom";
const token = localStorage.getItem("tkn");

function Lista({ lista }) {
  const navigate = useNavigate();
  const dataLocal = new Date(lista.data).toLocaleDateString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });
  return (
    <>
      <button
        onClick={() => navigate(`/lista-compra?id=${lista.id}`)} // Passando o ID como query parameter
        className={`p-2 text-center ${
          lista.status === "ativo" ? "bg-green-400" : "bg-red-400"
        }`}
      >
        {lista.titulo} {dataLocal}
      </button>
    </>
  );
}

function ExibeListas() {
  const [ativas, setAtivas] = useState([]);
  const [inativas, setInativas] = useState([]);

  const getListas = async () => {
    const listas = await fetchListas(token);

    const listasAtivas = [];
    const listasInativas = [];

    listas.forEach((lista) => {
      if (lista.status === "ativo") {
        listasAtivas.push(lista);
      } else {
        listasInativas.push(lista);
      }
    });

    setAtivas(listasAtivas);
    setInativas(listasInativas);
  };

  useEffect(() => {
    getListas();
  }, []);

  return (
    <div className="w-1/2 border-solid border-2">
      <div className="p-2 flex gap-2 flex-col">
        <p>Listas ativas</p>
        <div className="p-2 flex gap-2 flex-col">
          {ativas.map((ativa) => (
            <Lista key={ativa.id} lista={ativa} />
          ))}
        </div>

        <p>Listas concluídas</p>
        <div className="p-2 flex gap-2 flex-col">
          {inativas.map((inativa) => (
            <Lista key={inativa.id} lista={inativa} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExibeListas;
