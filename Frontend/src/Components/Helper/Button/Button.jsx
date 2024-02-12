import React from 'react'

const Button = ({className = '', type, children}) => {
  return (
    <button className={`w-[150px] h-[40px] font-Roboto text-xl rounded-full ${className}`} type={type}>{children}</button>
  )
}

export default Button