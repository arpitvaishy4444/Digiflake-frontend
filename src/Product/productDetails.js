import React from 'react';
import "./productDetails.css";
import {useNavigate} from "react-router-dom";


const ProductDetails = () => {

    const navigate = useNavigate();

    const submithandler =(e)=>{
        console.log('hello')

        navigate("/update")


    }
    return (
        <div>
        <div className='productDetails'>
            <h1 style={{color:"white"}}>Product Name</h1>
            <h6>product Id</h6>
            <h3>Product Description</h3>
            <h5>Product status</h5>
            <br/>
            <div className="button">
                <button onClick={submithandler}>Edit</button>
                <button>Delete</button>
            </div>

            
        </div>
        
        </div>
    );
};

export default ProductDetails;