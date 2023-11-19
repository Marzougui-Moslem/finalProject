import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/Navbarr';
import Products from './components/Products';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import Detailss from './components/Detailss';
import Carosel from './components/Carosel';
import products from './components/Data';
import ShoppingCart from './components/ShoppingCart';

function App() {

  return (
    
    <div>
    <Navbarr/>

  <Routes>
  
    <Route path="/" element={<>  <Carosel/> <Products products={products}/></>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/details/:id" element={<Detailss products={products}/>}/>
    <Route path='/cart' element={<ShoppingCart />} />

  </Routes>
    </div>
  );
}

export default App;
