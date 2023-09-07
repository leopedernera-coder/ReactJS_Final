import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({inicial, stock, funcionAgregar}) => {
    const [contador, setContador] = useState(inicial);

    const agregar = () => {
        if (contador < stock){
            setContador(contador + 1);
        }
    }

    const quitar = () => {
        if (contador > inicial){
            setContador(contador - 1);
        }
    }

  return (
    <>
        <div>
            <button className="masmenos" onClick={quitar}> - </button>
            <p> {contador} </p>
            <button className="masmenos" onClick={agregar}> + </button>
        </div>
        <button className="agregarCarro" onClick={() => funcionAgregar(contador)}> Agregar al Carrito </button>
    </>
  )
}

export default ItemCount