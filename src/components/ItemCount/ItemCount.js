import { useState } from "react"

export default function ItemCount({stock, inicial = 1, onAdd}) {
    const [quantity, setQuantity] = useState(inicial)

    const sumar = () => {
        if(quantity < stock) {
            console.log(quantity, stock)
            setQuantity(quantity + 1)
        }
    }
 
    const restar = () => {
        if(quantity > 1) {
          setQuantity(quantity - 1)
        }     
    }

  return (
    <>
    <div className="m-1 d-flex justify-content-center">
      <button className="m-1 text-danger border border-1 border-light" onClick={restar}>-</button>
      <input className="text-center" type="text" size="3" disabled  value={quantity}></input>
      <button className="m-1 text-success border border-1 border-light" onClick={sumar} >+</button>      
    </div>
    <button className="mt-2 btn btn-light btn-outline-dark" onClick={() => onAdd(quantity)} > Añadir al carro</button>
    </>
  );
}
