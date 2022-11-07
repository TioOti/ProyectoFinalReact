import './CartItem.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const CartItem = ({ img, id, name, quantity, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }
    
    return (
        <article className='CardCartItem '>
            <header className="HeaderCartItem">
                <div>
                    <img width={'60px'} src={img} alt="Cart Item"/>
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
                    Precio x Unidad: ${price}
                </p>
            </section>           
            <footer className='ItemFooterCartItem'>
                 <p className="InfoCartItem">
                     Subtotal: ${price * quantity}
                 </p>
                 {/* <ItemCount onAdd={handleOnAdd} stock={stock}/> */}
                 <button className='ButtonCartItem text-black fs-6' onClick={() => handleRemove(id)}>X</button>
            </footer>
        </article>
    )
}

export default CartItem