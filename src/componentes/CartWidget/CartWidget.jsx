import './CartWidget.css';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const imgCarrito = "../public/img/carrito.png"
    const {cantidadTotal} = useContext(CarritoContext);

    return (
        <div>
            <Link to="/cart">
                <img className='imgCarrito' src={imgCarrito} alt="Carrito" />
                {
                    cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
                }
            </Link>
        </div>
     )
}

export default CartWidget