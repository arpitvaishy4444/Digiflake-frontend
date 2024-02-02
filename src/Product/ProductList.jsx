import React from 'react';
import './product.css'
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    return (
       <>
       <Link to={"/productdetails"}>
       <div className="products">

        <div className="product-1">
           <h5>{props.id}</h5>
           <h5>{props.name}</h5>
        </div>

        <div className="product-2">
        <h5>{props.description}</h5>
        <h5>{props.status} </h5>
        </div>
      

       </div>
       </Link>
       
       
       </>
    );
};

export default ProductList;