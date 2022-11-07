import { Link } from "react-router-dom"

const Checkout = () => {

    return(
        <>
            <div className=" m-3 container-md justify-content-center row g-3">
                <div className="col-6">
                    <label for="formControlInput" className="form-label">Nombre</label>
                    <input type="text" className="form-control" placeholder="Emiliano"/>
                </div>
                <div className="col-6">
                    <label for="formControlInput" className="form-label">Apellido</label>
                    <input type="text" className="form-control" placeholder="Gutierrez"/>
                </div>
                <div className="col-6">
                    <label for="formControlInput" className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="emiliano@gutierrez.com"/>
                </div>
                <div className="col-6">
                    <label for="formControlInput" className="form-label">Telefono</label>
                    <input type="tel" className="form-control" placeholder="+54351..."/>
                </div>
                <div className="footer_form text-center">
                    <button type="button" className="btn btn-outline-success">Confirmar Compra</button>
                    <Link to='/' type="button" className="ms-3 btn btn-outline-dark">Seguir Comprando</Link>
                </div>            
            </div>
        </>
    )

}


export default Checkout