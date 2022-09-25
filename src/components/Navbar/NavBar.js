import { CartWidget } from "../CartWidget/CartWidget";
import ITechLogo from "./Assets/pngegg.png";
import CartLogo from "./Assets/shopping-cart.png";
import "./NavBar.css";

export function NavBar() {
  return (
    <nav id="navbar" className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <picture>
          <img src={ITechLogo} className="img-fluid" alt="iTechStore"></img>
        </picture>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-light"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                IPhone
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                MacBook
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Servicio Técnico
              </a>
            </li>
          </ul>
        </div>
        <CartWidget/> 
      </div>
    </nav>
  );
}
