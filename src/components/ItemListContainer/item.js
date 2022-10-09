import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, img, nombre, precio}) => {
  return (
    <div className=" mx-4 mb-4 mx-2 card h-100">
      <div style={{ height: "250px" }} className="d-flex mt-2">
        <img
          src={img}
          className="d-block img-fluid mx-auto mh-100 mw-100"
          alt={nombre}
        />
      </div>
      <div className="card-body text-center">
        <h5 className="card-title">{nombre}</h5>
        <p>${precio}</p>
        <Link to={`/item/${id}`} className="btn btn-secondary btn-outline-dark ">
          Ver Detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;
