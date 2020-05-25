import React from 'react'
const User = ({ user }) => {
  return (
    <p style={{color: `${user.color}`}}> {user.name} </p>
  )
}

export default User
