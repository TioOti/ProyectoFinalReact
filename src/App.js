import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { NavBar } from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {CartProvider} from './context/CartContext'
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';



function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer/> }></Route>
          <Route path='/categoria/:categoryId' element={ <ItemListContainer/> }></Route>
          <Route path='/item/:productId' element={ <ItemDetailContainer/> }></Route>
          <Route path='*' element={ <h1 className='d-flex justify-content-center m-5'> <h3>Ups, algo ha salido mal</h3> ! </h1> }></Route>
          <Route path='/cart' element={< Cart/> }> </Route>
          <Route path='/checkout' element={<Checkout />}/> 
        </Routes>        
      </BrowserRouter>
    </CartProvider>
   
  );
}

export default App;
