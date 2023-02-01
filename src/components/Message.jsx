import React from 'react'

const Message = ({ msg, color }) => {
  return <span className={`text-sm font-thin text-${color}`}>{msg}</span>
}

export default Message
