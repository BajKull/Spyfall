import React from 'react'


const Avatar = ({ user }) => {
  return (
    <div className="Avatar">
      {user.ready ? <p className="AvatarReady">✓</p> : <p className="AvatarReady2">✗</p>}
      {user.promoted ? <p className="AvatarPromoted">⋆</p> : null}
      <p className="AvatarName" style={{color: `${user.color}`}}> {user.name} </p>
    </div>
  )
}

export default Avatar
