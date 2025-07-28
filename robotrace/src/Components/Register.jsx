import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { FaLock } from "react-icons/fa";
import "./Form.css";
const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const url = "http://localhost:5001/user/register";
  const formData = {
    username,
    email,
    password,
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, formData);
      if (response.status === 200) {
       toast.success(response.data.message);
        navigate("/user/login");
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

          <h3>Register With us</h3>
          <form>
            <input
              type="text"
              placeholder="Enter Your username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
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
              Already have an account! Login here. 
              <Link to="/user/login"> Login</Link>
            </span>
            <button onClick={registerHandler}>Register</button>
            <p>
              Notic:Read <Link>User agreement and privacy policy </Link>
               before Register with us
            </p>
          </form>
        </div>
      </div>
      
    </>
  );
};

export default Register;
