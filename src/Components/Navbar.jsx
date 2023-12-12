"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// import Link from 'next/link';
// import { TiSocialFacebookCircular } from "react-icons/ti";
// import { TiSocialTwitterCircular } from "react-icons/ti";
// import { TiSocialInstagram } from "react-icons/ti";
// import { TiSocialLinkedinCircular } from "react-icons/ti";
// import { BiLogoGithub } from "react-icons/bi";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <nav>
      <div className="bg-[white] h-[15vh] z-[1000] sticky top-0 flex flex-row  justify-between  items-center  p-5">
        <div className="logo h-20  text-3xl mt-10 ">
          <h2 className=" z-[1000] text-[black]">
            Freelance<span className="text-[#3BD442]">HQ</span>
          </h2>
        </div>
        <div className="lg:block hidden">
          <ul className=" flex flex-row  gap-8 items-center  ">
            <span
              className=" cursor-pointer"
            >
              <li>Home</li>
            </span>
            <span
              className=" cursor-pointer"
            >
              <li>About</li>
            </span>
            <span
              className=" cursor-pointer"
            >
              <li>How it works</li>
            </span>
            <span
              className=" cursor-pointer"
            >
              <li>Pricing</li>
            </span>
          
              <Link to={"/login"} class="inline-flex text-white bg-[#3BD442] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Login
              </Link>
          </ul>
        </div>
       
        <button onClick={toggleMenu} className={`lg:hidden z-[500] ${menu ? "toggle open" : "toggle"}`}>
          <div className="first"></div>
          <div className="second"></div>
          <div className="third"></div>
        </button>
      </div>
      <div className="w-full">
        <div className={`flex  z-[500]  w-[250px]  transition-[all,3s,ease-linear] ${menu ? "ml-0" : " ml-[-550px]"} flex-col px-5 bg-white lg:hidden fixed top-0 left-0 bottom-0 items-start gap-4`}>
          <ul className=" flex flex-col pt-32 gap-8 items-start  ">
            <Link activeClass="active" to="hero" ><li>Home</li></Link>
            <Link activeClass="active" to="about" > <li>About</li></Link>
            <Link activeClass="active" to="service" ><li>How it works</li></Link>
            <Link activeClass="active" to="contact" spy={true}  smooth={true} offset={-70} className=" cursor-pointer" duration={500}><li>Pricing</li></Link>
           
            <Link to={"/login"} class="inline-flex text-white bg-[#3BD442] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Login
              </Link>
          </ul>
         
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
