import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./login/index.jsx";
function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;