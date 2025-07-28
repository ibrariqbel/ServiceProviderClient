import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
  <>
  <div className="footer">
    <div className='text'>
        All Right Reserved.
    </div>
    <ul>
     <li><FaLinkedin/></li>
    <li><FaFacebook/></li>
    <li><FaGithub/></li>
    </ul>
  </div>
  </>
  )
}

export default Footer