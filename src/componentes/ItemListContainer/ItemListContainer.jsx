import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { base } from "../../services/config"


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {idCategoria} = useParams();

    useEffect( () => {
        const misProductos = idCategoria ? query(collection(base, "inventario"), where
        ("idCat", "==", idCategoria)) : collection(base, "inventario");

        getDocs(misProductos)
            .then( res => {
                const nuevosProductos = res.docs.map( doc => {
                    const data = doc.data();
                    return {id: doc.id, ...data}
                })
                setProductos(nuevosProductos);
            })
            .catch(error => console.log(error))
    }, [idCategoria])

    return (
        <>
            <h2 style={{ textAlign: "left"}}>Listado de Productos</h2>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer