import React,{Fragment , useState } from 'react';
import {useNavigate} from "react-router-dom"
import "./LoginSignUp.css";
// import axios from "axios";

import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import Swal from "sweetalert2";



const SignUp = () => {


    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


const submitHandler = ()=>{
    navigate("/products");
    Swal.fire({
        title: 'Successfull',
        text: 'Do you want to continue',
        icon: 'successs',
        confirmButtonText: 'OK'
      })
}


    return (
        <Fragment>
        <div className="LoginSignUpContainer">
        <div className="LoginSignUpBox">
            <div>
            <div className='login_signUp_toggle'>
                <p >Register</p>
               
            </div>
            <button></button>
            </div>
            <form className='loginForm' onSubmit={submitHandler} >
            <div className="loginEmail">
                    <MailOutlineIcon/>
                    <input type="text"
                    placeholder='Name'
                    required
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                     />
                </div>
                <div className="loginEmail">
                    <MailOutlineIcon/>
                    <input type="email"
                    placeholder='Email'
                    required
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                     />
                </div>
                <div className="loginPassword">
                    <LockOpenIcon/>
                    <input type="password"
                    placeholder='Password'
                    required
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                     />
                </div>
                <input type="submit" value="Register" className='loginBtn' />
            </form>
            
           
        </div>
    </div>

  </Fragment>

    )
};

export default SignUp;