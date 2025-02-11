import { createContext, useContext, useState } from "react";

const ListaContext = createContext();

export const ListaProvider = ({ children }) => {
  const [listaSelecionada, setListaSelecionada] = useState(null);

  return (
    <ListaContext.Provider value={{ listaSelecionada, setListaSelecionada }}>
      {children}
    </ListaContext.Provider>
  );
};

export const useLista = () => {
  return useContext(ListaContext);
};
