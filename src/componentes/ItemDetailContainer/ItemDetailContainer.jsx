import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { base } from "../../services/config";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const {idItem} = useParams();

  useEffect( () => {
      const nuevoDoc = doc(base, "inventario", idItem);
      getDoc(nuevoDoc)
        .then(res => {
            const data = res.data();
            const nuevoPoducto = {id:res.id, ...data};
            setProducto(nuevoPoducto);
        })
        .catch(error => console.log(error))
  }, [idItem])

  return (
    <div>
        <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer