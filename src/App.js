import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <ItemListContainer/> }></Route>
        <Route path='/categoria/:categoryId' element={ <ItemListContainer/> }></Route>
        <Route path='/item/:productoId' element={ <ItemDetailContainer/> }></Route>
        <Route path='*' element={ <h1 className='d-flex justify-content-center m-5'> Ups ! </h1> }></Route>
      </Routes>
       
    </BrowserRouter>
   
  );
}

export default App;
