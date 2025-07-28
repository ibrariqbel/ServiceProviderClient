import axios from "axios";
import { useState } from "react";
import { FaLock } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const url = "http://localhost:5001/user/forgotPass";
  const handleforgot = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, { email: email });
      console.log(response);
      if (response.status === 200) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
       if (
              error.response &&
              error.response.data &&
              error.response.data.message
            ) {
              toast.error(error.response.data.message);
            } else {
              toast.error("server error");
            }
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
          <h3>Forgot Your Account</h3>
          <form>
             <span>
               Forgot your Password ? Please enter your email we will send you a reset link on your register email

            </span>
    <br />
            <input
              type="email"
              placeholder="Enter Your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

           
            <button onClick={handleforgot}>Forgot</button>
            <p>
              or <Link to="/user/login"> Login with us</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPass;
