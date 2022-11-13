import { CartWidget } from "../CartWidget/CartWidget";
import ITechLogo from "./Assets/pngegg.png";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { useCart, } from "../../context/CartContext";
import { getDocs, collection, query, orderBy } from 'firebase/firestore'
import { db } from "../../services/Firebase";
import { useState, useEffect } from "react";



export function NavBar() {

  const { totalQuantity } = useCart()

  const [categories, setCategories] = useState([]);

  useEffect(() =>{
    const collectionRef = query(collection(db, 'categories'), orderBy('order'))

    getDocs(collectionRef).then(response =>{

      const categoriesAdapted = response.docs.map(doc => {
        const data = doc.data()
        const id = doc.id
        return {id, ...data}
      })
      setCategories(categoriesAdapted)
    }).catch(error => {
      console.log(error);
    })

  }, [])

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
            {
              categories.map(category =>(
                <li key={category.id} className="nav-item">
                  <NavLink  to = {`/categoria/${category.slug}`} className="nav-link active" aria-current="page">
                    {category.label}
                  </NavLink>
                </li>
              ))
              
            }    
          </ul>
        </div>
        {
          totalQuantity > 0 && <CartWidget/>
        }
        
      </div>
    </nav>
  );
}
