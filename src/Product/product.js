import React,{useState,useEffect} from 'react';
import "./product.css";
import ProductList from "./ProductList.jsx"
import axios from 'axios';

const Product = () => {

    const [productData,setProductData] = useState([]);

       useEffect(()=>{
         axios.get("http://localhost:4000/api/products")
        .then((res)=> setProductData(res.data))
        .catch((err)=>console.log(err));

       },[]);
       console.log(productData)
    
    
    return (
        <>
            <div className='navbar'>
                <div className='navbar-1'>
                    <h3>Id</h3>
                    <h3>Name</h3>
                </div>
                <div className="navbar-2">
                <h3>Description</h3>
                <h3>Status</h3>
                </div>
            </div>

            <ProductList 
             name="Macbook Pro"
             id={343252} description="
             Product by Apple"
             status="active"
              />
          
        </>
        
    );
};

export default Product;