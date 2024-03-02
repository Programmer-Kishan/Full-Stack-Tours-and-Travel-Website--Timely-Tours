import React, { useState } from "react";

import Button from "../Helper/Button/Button";

import { FiAlignJustify } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [navClick, setNavClick] = useState(false);

  return (
    <>
      <div
        className={`w-full max-tablet:h-screen ${navClick ? 'bg-[#94a3b893]' : ''} tablet:bg-transparent absolute z-50`}
      >
        <Button
          className="tablet:hidden absolute z-50 bg-white w-[50px] h-[50px] text-3xl top-5 left-5 rounded-full cursor-pointer"
          type="button"
          onButtonClick={() => {
            setNavClick(!navClick);
          }}
        >
          {navClick ?
            <AiOutlineClose className="ml-[10px]" /> : <FiAlignJustify className="ml-[10px]" />
          }
          
        </Button>
        <nav className={`relative px-4 py-5 tablet:flex flex-col tablet:flex-row justify-around ${navClick ? 'flex animate-go-down' : 'hidden'} max-tablet:h-screen items-center transition-all`}>
          <div className="flex tablet:text-white italic">
            <h1 className="company-title">
              T<span className="company-title-subtext">imly</span>
            </h1>
            <h1 className="company-title">
              T<span className="company-title-subtext">ours</span>
            </h1>
          </div>
          <div className="lg:ml-[80px]">
            <ul className="flex flex-col tablet:flex-row text-center justify-evenly gap-16">
              <li className="nav-link">
                <a href="#">Home</a>
              </li>
              <li className="nav-link">
                <a href="#">About</a>
              </li>
              <li className="nav-link">
                <a href="#">Services</a>
              </li>
              <li className="nav-link">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="flex gap-5">
            <Button
              type="button"
              className="text-black bg-white text-xl rounded-full transition-all hover:rounded-md"
            >
              SignUp
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
