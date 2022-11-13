
import { useCart } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ img, id, name, category, price, description, stock }) => {
 
  const {addItem, isInCart, getProductQuantity } = useCart()

  const handleOnAdd = (quantity) =>{
    const productToAdd = {
      id, img, name, price, quantity
    }
    addItem(productToAdd)
  }

  const quantityAdded = getProductQuantity(id)

  return (
    <div className=" mx-4 mb-4 mx-2 card h-100">
      <div style={{ height: "250px" }} className="d-flex mt-2">
        <img
          src={process.env.PUBLIC_URL + img}
          className="d-block img-fluid mx-auto mh-100 mw-100"
          alt={name}
        />
      </div>
      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
        <p>U$D {price}</p>
        <p className="card-text"> {category} </p>
        <p className="card-text">{description}</p>
        <p className="card-text">Stock:{stock} </p>
        
        {
          stock === 0? <span className="d-flex flex-column">
            <button type="button" disabled className="btn btn-danger">Sin Stock</button>
          </span>:
          !isInCart(id)?
          <ItemCount stock={stock}  onAdd={handleOnAdd} inicial={quantityAdded}></ItemCount> :
          <Link to='/cart'  className="btn btn-success btn-outline-dark " > Finalizar Compra</Link>
        }
        <div className="mt-3">
          <Link className="btn btn-outline-dark" to='/'> Volver </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

 