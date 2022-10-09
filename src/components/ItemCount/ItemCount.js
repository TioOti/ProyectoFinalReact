import { useState } from "react"

export default function ItemCount({stock, inicial}) {
    const [cantidad, setCantidad] = useState(inicial)

    const sumar = () => {
        if(cantidad < stock) {
            console.log(cantidad, stock)
            setCantidad(cantidad+1)
        }
    }
 
    const restar = () => {
        if(cantidad > 1) {
            setCantidad(cantidad - 1)
        }     
    }

  return (
    <>
    <div className="m-1 d-flex justify-content-center">
      <button className="m-1 text-danger border border-1 border-light" onClick={restar}>-</button>
      <input className="text-center" type="text" size="3"  value={cantidad}></input>
      <button className="m-1 text-success border border-1 border-light" onClick={sumar} >+</button>      
    </div>
    <button className="mt-2 btn btn-light btn-outline-dark"> Añadir al carro</button>
    </>
  );
}
