import { useState, useEffect } from "react";
import { getUnProducto } from "../../asyncmock";
import ProductDetail from "../ProductDetail/ProductDetail";
import { useParams } from "react-router-dom";



const ProductDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    const {idItem} = useParams();

    useEffect(()=> {
        getUnProducto(idItem)
            .then(respuesta => setProducto(respuesta))
    }, [idItem])

  return (
    <div>
        <ProductDetail {...producto} />
    </div>
  )
}

export default ProductDetailContainer