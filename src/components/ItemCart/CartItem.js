import './CartItem.css'
import { useCart } from '../../context/CartContext'


const CartItem = ({ img, id, name, quantity, price }) => {
    const { removeItem } = useCart()

    const handleRemove = (id) => {
        removeItem(id)
    }
    
    return (
        <article className='CardCartItem '>
            <header className="HeaderCartItem">
                <div>
                    <img width={'60px'} src={process.env.PUBLIC_URL + img} alt="Cart Item"/>
                </div>
                <h2 className="fs-4 ItemHeaderCartItem">
                    {name}
                </h2>
            </header>
            <section className='ContainerItemCartItem'>
                <p className="InfoCartItem">
                    Cantidad: {quantity}
                </p>
                <p className="InfoCartItem">
                    Precio Unitario:U$D {price}
                </p>
            </section>           
            <footer className='ItemFooterCartItem'>
                 <p className="InfoCartItem">
                     Subtotal:U$D {price * quantity}
                 </p>                 
                 <button className='ButtonCartItem text-black fs-6' onClick={() => handleRemove(id)}>X</button>
            </footer>
        </article>
    )
}

export default CartItem