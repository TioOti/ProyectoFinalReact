import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../asyncMock";
import Loading from "../Loading/Loading";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const {categoryId} = useParams();


  useEffect(() => {
    setLoading(true)
    const asyncFunction = categoryId? getProductsByCategory:getProducts
    
    asyncFunction(categoryId)
      .then((response) => {        
        setProductos(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return <Loading />;
  } 
  return (
    <>
      <h1 className="d-flex justify-content-center">Productos</h1>
      <section className="d-flex flex-wrap justify-content-center container-xl mt-4">
        <ItemList productos={productos} />
      </section>
    </>
  );
};

export default ItemListContainer;
