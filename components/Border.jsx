import React from 'react'

const Border = ({ type, color, shadow }) => {
  return (
    <div className={`${type} border-2 ${shadow} rounded-full ${color}`}></div>
  )
}

export default Border