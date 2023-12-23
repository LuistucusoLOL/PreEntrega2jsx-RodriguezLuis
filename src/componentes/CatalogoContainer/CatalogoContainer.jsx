import { useState, useEffect } from "react";
import { getProductos, getProductosPorCategoria } from "../../asyncmock";
import Catalogo from "../Catalogo/Catalogo";
import { useParams } from "react-router-dom";

const CatalogoContainer = () => {
    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams();

    useEffect( ()=> {

      const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

      funcionProductos(idCategoria)
        .then(respuesta => setProductos(respuesta))
    }, [idCategoria])


  return (
    <div>
        <Catalogo productos = {productos} />
    </div>
  )
}

export default CatalogoContainer