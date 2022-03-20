import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importação de Pages
import { Home } from "./pages";

export function Routers(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}