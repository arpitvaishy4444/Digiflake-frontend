import React,{useState} from 'react';
import "./NewProduct.css";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import DescriptionIcon from"@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import { Button } from '@mui/material';
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";







const NewProduct = () => {

    const navigate = useNavigate();
  

    const [name, setName] = useState("");
    const [description, SetDescription] = useState("");
    const [category, setCategory] = useState("");
    const [stock, setStock] = useState(0);

    const categories = [
        "Laptop",
        "Footwear",
        "Bottom",
        "Tops",
        "Attire",
        "Camera",
        "SmartPhones"
    ];

    const submitHandler=()=>{
        navigate("/products");
        Swal.fire({
            title: 'Product Created Successfully',
            text: 'Go to the product Page',
            icon: 'success',
            confirmButtonText: 'OK'
          })
     
    }
    return (
        <div className="newProductContainer">
        <form 
        className='createProductForm'
        encType='multipart/form-data'
        onSubmit={submitHandler}
        
        >
            <h1>Create Product</h1>

            <div>
                <SpellcheckIcon/>
                <input 
                type="text"
                placeholder='Product Name'
                required
                name={name}
                onChange={(e)=> setName(e.target.value)}
                 />
            </div>

            <div>
              <DescriptionIcon/>
              <textarea
              placeholder='Product Description'
              cols="30"
              rows="1"
              value={description}
              onChange={(e)=> SetDescription(e.target.value)}
              ></textarea>
            </div>

            <div>
                {/* <AccountTreeIcon/> */}
                <select onChange={(e)=> setCategory(e.target.value)}>
                    <option value={category}>Choose Category</option>
                    {categories.map((cate)=>(
                        <option key={cate} value={cate}>
                            {cate}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <StorageIcon/>
                <input
                 type="number"
                 placeholder='Stock'
                 required
                 value={stock}
                 onChange={(e)=> setStock(e.target.value)}
                  />
            </div>


            <Button
            id='createProductBtn'
            type='submit'
            
            >
                Create
                
            </Button>
        </form>
    </div>

    );
};

export default NewProduct;