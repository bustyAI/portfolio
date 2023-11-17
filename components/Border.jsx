import React from 'react'

const Border = ({ color, shadow }) => {
  return (
    <div className={`border-l border-2 ${shadow} rounded-full ${color}`}></div>
  )
}

export default Border