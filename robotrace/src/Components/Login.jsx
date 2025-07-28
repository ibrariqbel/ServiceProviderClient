import axios from 'axios';
import React, { useState } from 'react'
import { FaLock } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Login = (props) => {
 const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const url = "http://localhost:5001/user/login";
  const formData = {

    email,
    password,
  };

  const LoginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, formData);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.payload.token)
        localStorage.setItem("userId", response.data.payload.userId)
       props.setLoggedIn(true)
        navigate('/')
         return toast.success(response.data.message);
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("server error");
      }
      console.error("Register Error:", error);
    }
  };

  return (
    <>
         <ToastContainer />
         <div className="container">
           <div className="form-container">
             <div className="lock">
               <FaLock style={{ fontSize: "28px", color: "purple" }} />
             </div>
   
             <h3>Login Your Account</h3>
             <form>
              
               <input
                 type="email"
                 placeholder="Enter Your email"
                 value={email}
                 onChange={(e) => {
                   setEmail(e.target.value);
                 }}
               />
               <input
                 type="password"
                 placeholder="Enter Your password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
               />
               <span>
                Forgot Your Password? Click on the Link.
                 <Link to="/user/forgot"> Forgot password</Link>
               </span>
               <button onClick={LoginHandler}>Login</button>
               <p>
                or <Link to='/user/register'> Register with us</Link>
                  
               </p>
             </form>
           </div>
         </div>
         
       </>
  );
}

export default Login