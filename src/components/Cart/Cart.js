
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import CartItem from "../ItemCart/CartItem";


const Cart = () => {
  const {cart, totalQuantity, totalPrice, clearCart} = useCart()
 
    return (
        <>
         {
            totalQuantity === 0 ? 

            <div className="container-sm m-5">
                    <h3 className="m-2"> Oops! Parece que todavía no has añadido nada .. </h3>
                    <Link to="/" className="mt-3 mx-3 btn btn-outline-dark text-success"> Comenzar compra ! </Link>
                </div>
                :
                <div className="container-xl justify-content-center text-center">
                    { cart.map(p => <CartItem key={p.id} {...p}/>) }
                    <h3 className="text-center" >Total: U$D {totalPrice}</h3>
                    <div className="btn-group btn-group-sm mt-4 ">
                        <button onClick={() => clearCart()} className="btn btn-outline-primary">Limpiar carrito</button>
                        <Link to='/checkout' className='btn btn-success btn-outline-dark mx-3'>Finalizar Compra</Link>
                        <Link to='/' className="btn btn-outline-primary"> Seguir Comprando</Link>
                    </div>                   
                    
                    
                    
                </div>
        }
        </>
       

    )
      
    };


export default Cart;
