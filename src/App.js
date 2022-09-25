import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { NavBar } from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer/>   
    </>
   
  );
}

export default App;
