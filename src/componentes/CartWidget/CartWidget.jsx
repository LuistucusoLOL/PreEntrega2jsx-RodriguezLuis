
import './CartWidget.css';

const CartWidget = ({ itemCount }) => {
  const imgCarrito =
    'https://www.pngarts.com/files/3/Shopping-Cart-PNG-Download-Image.png';

  return (
    <div className='cart-widget-container'>
      <img className='imgCarrito' src={imgCarrito} alt='CarritoUwU' />
      {itemCount > 0 && <span className='badge'>{itemCount}</span>}
    </div>
  );
};

export default CartWidget;
