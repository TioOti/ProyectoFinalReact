import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import swal from "sweetalert"
import Loading from "../Loading/Loading"
import { useCreateOrderInFirestore } from "../../services/Firebase/Firestore/orders"


const Checkout = () => {

    const [loading, setLoading] = useState(false)
    const { clearCart } = useCart()
    const { orderCreation } = useCreateOrderInFirestore()
    const navigate = useNavigate()

    const name = useRef("")
    const lastName = useRef("")
    const telephone = useRef("")
    const email = useRef("")

    const doOrder = (e) => {

        e.preventDefault()
        setLoading(true)

        const buyer = {
            name: name.current.value,
            lastName: lastName.current.value,
            telephone: telephone.current.value,
            email: email.current.value
        }
        orderCreation(buyer).then(response => {
            if(response.result === 'success') {

                clearCart()

                swal({
                    title: "Gracias por su compra!",
                    text:`Su numero de Orden es: ${response.orderId}`,
                    icon: "success",
                    dangerMode: true,
                })

                setTimeout(() => {
                    navigate('/')
                }, 3000)
            }else{
                swal({
                    title: "Los siguientes productos no se encuentran en stock:",
                    icon: "warning",
                    dangerMode: true,
                })
            }
        }).catch(error => {
            console.error(error)
        }).finally(() => {
            setLoading(false)
        })
    }

    if(loading) {
        <Loading/>
    }

    

    return(
        <>
            <form onSubmit={doOrder} className=" m-3 container-md justify-content-center row g-3">
                <div className="col-6">
                    <label className="form-label">Nombre</label>
                    <input required ref={name} type="text" className="form-control" placeholder="Emiliano"/>
                </div>
                <div className="col-6">
                    <label className="form-label">Apellido</label>
                    <input required ref={lastName} type="text" className="form-control" placeholder="Gutierrez"/>
                </div>
                <div className="col-6">
                    <label className="form-label">Email</label>
                    <input required ref={email} type="email" className="form-control" placeholder="emiliano@gutierrez.com"/>
                </div>
                <div className="col-6">
                    <label className="form-label">Telefono</label>
                    <input required ref={telephone} type="tel" className="form-control" placeholder="+54351..."/>
                </div>
                <div className="footer_form text-center">
                    <button type="submit" className="btn btn-outline-success" >Confirmar Compra</button>

                    <Link to='/' type="button" className="ms-3 btn btn-outline-dark">Seguir Comprando</Link>
                </div>            
            </form>
        </>
    )

}


export default Checkout