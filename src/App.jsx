import { BrowserRouter, Routes, Route } from "react-router-dom";
import CatalogoContainer from "./componentes/CatalogoContainer/CatalogoContainer";
import ProductDetailContainer from "./componentes/ProductDetailContainer/ProductDetailContainer";
import NavBar from "./componentes/NavBar/NavBar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<CatalogoContainer/>} />
          <Route path="/categoria/:idCategoria" element={<CatalogoContainer/>}  />
          <Route path="/item/:idItem" element={<ProductDetailContainer/>}  />
          <Route path="/cart" element={<h2>no hay carro XD</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
