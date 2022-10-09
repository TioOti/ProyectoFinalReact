import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
import {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import { getProductsById } from "../asyncMock";

export function ItemDetailContainer() {
    const [producto, setProducto] = useState()    
    const [loading, setLoading] = useState(true);
    const {productoId} = useParams()

    useEffect(() => {
        getProductsById(productoId)
          .then((response) => {            
            setProducto(response);
          })
          .finally(() => {
            setLoading(false);
          });
      }, [productoId]);
    
    if (loading) {
        return <Loading />;
      } 

  return (
    <section className="d-flex flex-wrap justify-content-center container-xl mt-4">
      <ItemDetail {...producto} />
    </section>
  )
}
