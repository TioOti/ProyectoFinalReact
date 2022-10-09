import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ img, nombre, categoria, precio, descripcion, stock }) => {
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
        <p className="card-text"> {categoria} </p>
        <p className="card-text">{descripcion}</p>
        <p className="card-text">Stock:{stock} </p>
        <ItemCount stock={stock} /* onAdd={handleOnAdd} */ inicial={1}></ItemCount>
      </div>
    </div>
  );
};

export default ItemDetail;