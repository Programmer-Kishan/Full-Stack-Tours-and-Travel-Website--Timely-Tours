import React from 'react'

const GeneralInput = ({type, placeholder, className=''}) => {
  return (
    <input type={type} placeholder={placeholder} className={`font-Roboto-Mono text-md ${className} placeholder:text-black ml-2 focus:outline-none`} />
  )
}

export default GeneralInput