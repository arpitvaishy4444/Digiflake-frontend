import React from 'react';
import logo from "../images/digiflake.png";
import "./home.css";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Swal from 'sweetalert2';

const Home = () => {

    const navigate = useNavigate();

    const submitHandler = ()=>{
        navigate("/login");
        Swal.fire({
            title: 'Logout Successfully',
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }


    return (
       <>
       <div className='logoutbtn'>
        <button onClick={submitHandler}>Logout</button>
        </div>
       

        <div className='homeContainer'>
            <div className="image"><img src={logo} alt="img"/>
            <h1>Welcome to Digitalflake Admin</h1>
            <Link to="/register">Register Now</Link>
            <p>already have an account !</p>
            <Link to="/login">Login Now</Link>
            </div>
         
        </div>


       </>
    );
};

export default Home;