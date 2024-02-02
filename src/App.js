import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./layout/Header.jsx";
import About from './About/about.js';
import Home from "./Home/home.js";
import Product from "./Product/product.js";
import ProductDetails from "./Product/productDetails.js";
import Login from "./layout/login.js";
import SignUp from "./layout/SignUp.js";
import NewProduct from "./Product/NewProduct.js";
import UpdateProduct from "./Product/UpdateProduct.js";


function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Product/>}/>
          <Route path='/productdetails' element={<ProductDetails/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<SignUp/>}/>
          <Route path='category' element={<NewProduct/>}/>
          <Route path="/update" element={<UpdateProduct/>}/>
        </Routes>


      </Router>
    </div>
  );
}

export default App;
