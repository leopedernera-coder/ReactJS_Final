import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import './CartItem.css'


const CartItem = ({item, cantidad}) => {
    const { eliminarProducto } = useContext(CarritoContext);

  return (
    <div>
        <h4> {item.nombre} </h4>
        <p> Cantidad: {cantidad} </p>
        <p> Precio: {item.precio} </p>
        <button className="agregarCarro" onClick={() => eliminarProducto(item.id)}> Eliminar </button>
        <hr/>
    </div>
  )
}

export default CartItem