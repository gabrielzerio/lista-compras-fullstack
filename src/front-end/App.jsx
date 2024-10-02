import { BrowserRouter, Route, Routes } from "react-router-dom"
import { createContext, useState } from "react";
import Login from "./login/index.jsx";
import ListaCompra from "./lista/listaCompras.jsx";

export const LoginContext = createContext();

function App() {
    const [token, setToken] = useState();

    return (
        <LoginContext.Provider value={{token,setToken}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/lista-compra" element={<ListaCompra />} />
                </Routes>
            </BrowserRouter>
        </LoginContext.Provider>
    )
}

export default App;