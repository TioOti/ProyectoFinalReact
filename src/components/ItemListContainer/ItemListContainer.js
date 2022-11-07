import Loading from "../Loading/Loading";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/Firebase/Firestore/products";
import { useAsync } from '../../hooks/useAsync'


const ItemListContainer = () => {

  const {categoryId} = useParams();

  const getProductsWithCategory = () => getProducts(categoryId)

  const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId])

  if (loading) {
    return <Loading />;
  } 

  if (error) {
    return <h1 className="d-flex justify-content-center m-4 text-danger">Ups ! Parece que algo salió mal ...</h1>;
  }

  return (
    <>
      <h1 className="d-flex justify-content-center">Productos</h1>
      <section className="d-flex flex-wrap justify-content-center container-xl mt-4">
        <ItemList productos={products} />
      </section>
    </>
  );
};

export default ItemListContainer;
