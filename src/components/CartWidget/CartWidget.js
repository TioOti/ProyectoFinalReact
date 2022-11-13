import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import CartLogo from "../Navbar/Assets/shopping-cart.png";

export function CartWidget() {

  const {totalQuantity} = useCart()

  return (
    <NavLink to='/cart' className="position-relative">
      <img id="cartlogo" alt="cartLogo" className="" src={CartLogo}></img>
      <p className='fw-bold m-0 px-1 text-dark border border-danger border-1 rounded-circle position-absolute top-0 end-0' style={{fontSize: '14px'}}>
        {totalQuantity}
      </p>
    </NavLink>
  );
}
 