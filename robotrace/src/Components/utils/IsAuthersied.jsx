import axios from "axios";
import  { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const IsAuthersied = () => {
  const navigate = useNavigate();

  //   const verifyToken = async(token)=>{
  //   const url = `http://localhost:5001/user/isAuth/${token}`;

  //    const res = await axios.post(url,token)
  //    if(res.status ===200 && res.data.message === "Verify Token"){
  //       navigate("/")
  //    }
  //    else{
  //       navigate("/user/login")
  //    }
  //   }
  const verifyToken = async (token) => {
    const url = `http://localhost:5001/user/isAuth/${token}`;

    const res = await axios.get(url);
    if (res.status === 200 && res.data.message === "Verify Token") {
     return navigate("/user/secureprofile");
    } else {
      navigate("/user/login");
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/user/login");
    } else {
      verifyToken(token);
    }
  }, [navigate]);
};

export default IsAuthersied;
