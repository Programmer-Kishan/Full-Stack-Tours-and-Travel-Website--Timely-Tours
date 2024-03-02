import React from 'react'

const Button = ({className = '', type, onButtonClick = () => {}, children}) => {
  return (
    <button className={`w-[150px] h-[40px] font-Roboto ${className}`} type={type} onClick={onButtonClick}>{children}</button>
  )
}

export default Button