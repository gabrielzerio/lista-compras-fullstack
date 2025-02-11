import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login/index.jsx";
import ListaCompra from "./lista/listaCompra.jsx";
import Listas from "./listas/listas.jsx";
import { ListaProvider } from "./ListaContext.jsx";
function App() {
  return (
    <ListaProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/listas" element={<Listas/>} />
        <Route path="/lista-compra" element={<ListaCompra />} />
      </Routes>
    </BrowserRouter>
    </ListaProvider>
  );
}

export default App;
