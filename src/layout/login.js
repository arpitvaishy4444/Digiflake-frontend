import React,{Fragment,useState} from 'react';
import "./LoginSignUp.css";
import {useNavigate} from "react-router-dom"
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import Swal from 'sweetalert2';



const Login = () => {

    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const submitHandler = ()=>{
        navigate("/products");
        Swal.fire({
            title: 'Logged In',
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Ok'
          })

    }


    return (
        <Fragment>
        <div className="LoginSignUpContainer">
        <div className="LoginSignUpBox">
            <div>
            <div className='login_signUp_toggle'>
                <p >LOGIN</p>
               
            </div>
            <button></button>
            </div>
            <form className='loginForm' onSubmit={submitHandler}>
                <div className="loginEmail">
                    <MailOutlineIcon/>
                    <input type="email"
                    placeholder='Email'
                    required
                    name={email}
                    onChange={(e)=> setEmail(e.target.value)}
                     />
                </div>
                <div className="loginPassword">
                    <LockOpenIcon/>
                    <input type="password"
                    placeholder='Password'
                    required
                    name={password}
                    onChange={(e)=> setPassword(e.target.value)}
                     />
                </div>
                <input type="submit" value="Login" className='loginBtn' />
            </form>
            
           
        </div>
    </div>

  </Fragment>

    )
};

export default Login;