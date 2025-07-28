import React from 'react'
import IsAuthersied from './utils/IsAuthersied'

const UserSecureProfile = () => {
 IsAuthersied()
  return (
    <>
    <h1>This is user Secure Profile it is only open When User is Login</h1>
    </>
  )
}

export default UserSecureProfile