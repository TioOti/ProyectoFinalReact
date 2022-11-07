import { CartWidget } from "../CartWidget/CartWidget";
import ITechLogo from "./Assets/pngegg.png";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { getDocs, collection, query, orderBy } from 'firebase/firestore'
import { getCategories } from "../../services/Firebase/Firestore/products";


export function NavBar() {

  const { totalQuantity } = useContext(CartContext)

  return (
    <nav id="navbar" className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <NavLink to = "/">
           <picture>
           <img src={ITechLogo} className="img-fluid" alt="iTechStore"></img>
          </picture>
        </NavLink>       
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="navbar-toggler-icon text-light"></div>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <NavLink to = "/" className="nav-link active" aria-current="page">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to = "/categoria/Celulares" className="nav-link">
                IPhone
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to = "/categoria/MacBook" className="nav-link">
                MacBook
              </NavLink>
            </li>            
          </ul>
        </div>
        {
          totalQuantity > 0 && <CartWidget/>
        }
        
      </div>
    </nav>
  );
}
