import React from 'react';

import Button from '../Helper/Button/Button';

const Navbar = () => {
  return (
    <div className='w-full absolute z-10'>
        <nav className='px-4 py-5 flex justify-between items-center'>
            <div className='flex text-white italic'>
                <h1 className='text-4xl font-Montserrat'>T<span className='text-xl'>imly</span></h1>
                <h1 className='text-4xl font-Montserrat'>T<span className='text-xl'>ours</span></h1>
            </div>
            <div className='ml-[80px]'>
                <ul className='flex justify-evenly gap-16'>
                    <li className='text-lg font-Poppins text-white'><a href="#">Home</a></li>
                    <li className='text-lg font-Poppins text-white'><a href="#">About</a></li>
                    <li className='text-lg font-Poppins text-white'><a href="#">Services</a></li>
                    <li className='text-lg font-Poppins text-white'><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div className='flex gap-5'>
                <Button type="button" className='text-black bg-white'>SignUp</Button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar