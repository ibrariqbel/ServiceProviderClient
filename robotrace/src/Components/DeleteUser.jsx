import axios from "axios";
import React, { useState } from "react";
import { FaLock } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const DeleteUser = () => {
  const navigate = useNavigate();
  const [password, setpassword] = useState("");

  const { userId } = useParams();
  const url = `http://localhost:5001/user/delete/${userId}`;
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, { password: password });
      console.log(response);
      if (response.status === 200) {
        toast.success(response.data.message);
        localStorage.clear();
        navigate("/");
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

          <h3>Delete Your Account</h3>
          <form>
            <input
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />

            <span>
              Forgot your Password ? Please enter your email we will send you a
              reset link on your register email
            </span>
            <button onClick={handleDelete}>Delete Account</button>
            <p>
              or <Link to="/user/login"> Login with us</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default DeleteUser;
