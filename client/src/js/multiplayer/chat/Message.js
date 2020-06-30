import React from 'react'

import './Message.css'

const Message = ({ message , name}) => {
  return (
    <div className={name}>
      <p style={{color: `${message.color}`}}>{message.user !== undefined ? `${message.user}: ` : null}</p>
      <p className="userMsg">{message.message}</p>
    </div>
  )
}

export default Message
