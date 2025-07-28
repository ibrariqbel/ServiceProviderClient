import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import "./global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Register from "./Components/Register";
import axios from "axios";
import Login from "./Components/Login";
import PageNotFound from "./Components/PageNotFound";
import ForgotPass from "./Components/ForgotPass";
import ResetPass from "./Components/ResetPass";
import DeleteUser from "./Components/DeleteUser";
import UserSecureProfile from "./Components/UserSecureProfile";

const App = () => {
 
  const [username, setUsername] = useState("")
  const userId = localStorage.getItem("userId")
  const [loggedIn, setLoggedIn] = useState(false)
    const fetchData = async(userId)=>{
      try {
        const url = `http://localhost:5001/user/getUser/${userId}`
       
        const response = await axios.get(url)
  
         setUsername(response.data.payload.username)
       
       
      } catch (error) {
        console.error(error)
      }
    }
     useEffect(()=>{
      fetchData(userId)
     },[userId,loggedIn])

  return (
    <>
      <BrowserRouter>
        <Navbar user = {username}  />
        <div className="main">
          <Routes>
            {/* Guest Routs */}
            <Route path="*" element={<PageNotFound/>}/>
            <Route path="/" element={<Home user = {username} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user/register" element={<Register />} />
            <Route path="/user/login" element={<Login setLoggedIn={setLoggedIn} />} />
            <Route path="/user/forgot" element={<ForgotPass/>}/>
            <Route path="/user/resetpass/:userId" element={<ResetPass/>}/>
            {/* Secure Path */}
            <Route path="/user/delete/:userId" element={<DeleteUser/>}/>
            <Route path="/user/secureprofile" element={<UserSecureProfile/>}/>




          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
