import { BrowserRouter, Route, Routes } from "react-router-dom"
import { createContext } from "react";

import Login from "./login/index.jsx";
import ListaCompra from "./lista/listaCompras.jsx";
const ThemeContext = createContext(null);
function App() {
    return (
        <ThemeContext.Provider value="azul">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/lista-compra" element={<ListaCompra />} />
                </Routes>
            </BrowserRouter>
        </ThemeContext.Provider>
    )
}

export default App;