import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login/index.jsx";
import ListaCompra from "./lista/listaCompras.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/lista-compra" element={<ListaCompra />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
