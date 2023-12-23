
import React, { useState } from 'react';
import Contador from '../Contador/Contador';
import { Link } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = ({ id, nombre, stock, precio, img }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregados: " + cantidad);
  };

  return (
    <div className='contenedorItem'>
      
      <div className="item-image">
        <img src={img} alt={nombre} />
      </div>

      <div className="item-info">
        <h2>{nombre}</h2>
        <p>Precio: {precio}</p>
        <p>ID: {id}</p>
      </div>
    
      <div className="item-controls">
        {agregarCantidad > 0 ? (
          <Link to="/cart">Terminar Compra</Link>
        ) : (
          <Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
        )}
      </div>
      
    </div>
    
  );
}

export default ProductDetail;
