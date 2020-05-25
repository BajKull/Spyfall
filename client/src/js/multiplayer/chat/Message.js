import React from 'react'

const Message = ({ message , name}) => {
  return (
    <div className={name}>
      <p style={{color: `${message.color}`}}>{message.user !== undefined ? `${message.user}: ` : null}</p>
      <p>{message.message}</p>
    </div>
  )
}

export default Message
