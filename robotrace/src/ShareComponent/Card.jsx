import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
   <>
   <div className="card">
    <div className="profile">
    <div className="logo">
      <img src="" alt="" />
    </div>
    </div>
    <div className="text">
        <h2>{props.username}</h2>
        <h4>ibrar@gmail.com</h4>
    </div>
   </div>
   </>
  )
}

export default Card