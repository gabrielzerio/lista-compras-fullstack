import { useState, useEffect } from "react";
import { fetchListas } from "../scripts/scriptListaListas";
const token = localStorage.getItem("tkn");

function Lista({ lista, status }) {
  return (
    <>
    {console.log(lista)}
      <button className="p-2 bg-green-400 text-center">{lista.titulo}</button>
    </>
  );
}

function ExibeListas() {
  const [listas, setListas] = useState([]);
  const [ativas, setAtivas] = useState([]);
  const [inativas, setInativas] = useState([]);

  const getListas = async () => {
    setListas(await fetchListas(token));
    listas.forEach((lista) => {
      if (lista.status === "ativo") {
        setAtivas(...ativas, lista);
      } else {
        setInativas(...inativas, lista);
      }
    });
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
            <Lista lista={ativa} status={'ativo'}/>
          ))}
        </div>

        <p>Listas concluidas</p>
        <div className="p-2 flex gap-2 flex-col">
        {inativas.map((inativa) => (
            <Lista lista={inativa} status={'inativo'}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExibeListas;
