import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { FaBarsProgress } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FcContacts } from "react-icons/fc";
import { IoMdOptions } from "react-icons/io";

const Navbar = (props) => {
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate()
  const userId = localStorage.getItem("userId")
  const navHandle = () => {
    setShowNav(!showNav);
  };
  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact</Link>{" "}
          </li>
        </ul>

        <div className="menubar" onClick={navHandle}>
          <FaBarsProgress />
          {showNav && (
            <ul className="animate__animated animate__bounceInLeft ">
              <li>
                <span>
                  <FaHome />
                  <Link to="/">Home</Link>{" "}
                </span>
              </li>
              <li>
                <span>
                  <BsFillInfoCircleFill />
                  <Link to="/about">About</Link>{" "}
                </span>
              </li>
              <li>
                <span>
                  <FcContacts />
                  <Link to="/contact">Contact</Link>{" "}
                </span>
              </li>
              <li>
                {props.user && (
                  <span>
                    {" "}
                    <Link to="/contact">User Profile</Link>
                  </span>
                )}
              </li>
              <li>
                {props.user && (
                  <span>
                    {" "}
                    <Link to="/contact">Seting</Link>
                  </span>
                )}
              </li>
              <li>
                {props.user && (
                  <span>
                    {" "}
                    <Link to="/contact">Logout</Link>
                  </span>
                )}
              </li>
            </ul>
          )}
        </div>
        <div className="userProfile">
          <p>{props.user ? `Welcom ${props.user}` :  <button><Link to='/user/login'>Login</Link></button>}</p>
          <div className="dropdown" onClick={navHandle}>
            <IoMdOptions style={{fontSize:"25px", fontWeight:'600'}} />
            {showNav && (
              <ul>
                <li>User Profile</li>
                <li>Logout</li>
                <li>Setting</li>
                <li onClick={()=>{navigate(`/user/delete/${userId}`)}}>Delete Account</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
