import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/Firebase/Firestore/products";
import { useAsync } from "../../hooks/useAsync";

export function ItemDetailContainer() {

  const { productId } = useParams()

  const getProductById = () => getProduct(productId)

  const { data: product, error, loading } = useAsync(getProductById, [productId])
   
  if (loading) {
      return <Loading />;
    } 

    if(error) {
      return <h1 className="d-flex justify-content-center ">Estamos experimentando algunos problemas .. Porfavor intentelo de nuevo</h1>
  }

  return (
    <section className="d-flex flex-wrap justify-content-center container-xl mt-4">
      <ItemDetail {...product} />
    </section>
  )
}
