/*
This that yung navbar at the top + mobile three bar side nav 
*/
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  //fix transparent navbar in home or other pages
  //const [navBg, setNavBg] = useState("#ecf0f3");
  const [navBg, setNavBg] = useState("");
  const [linkColor, setLinkColor] = useState("#e0e0e0");

  const handleNav = () => {
    //set to [invert nav] instead of [true]
    setNav(!nav);
  };

  return (
    // h-[120px] (custom height property)
    // z-[100] for always on top (z-axis)
    <div className="bg-background font-raleway">
      <div>
        <div className="flex justify-between items-center h-[10vh] w-full px-8 ">
          <Link href="/">
            <div>
              <div className="cursor-pointer hover:scale-110 ease-in duration-300 text-4xl text-[#7B8CDE] flex justify-center items-center">
                <div className="text-black">On</div>board
                <div className="text-black">y</div>
              </div>
            </div>
          </Link>
          <div>
            {/* Tailwind is mobile first, so hide; otherwise show flex when screen is medium size (768px)*/}
            <div className="flex font-raleway justify-end">
              <Link
                href="/candidates"
                className="text-black text-md text-right mx-4 underline-offset-4 hover:underline my-2"
              >
                For Candidates
              </Link>
              <Link
                href="/login"
                className="text-black text-md text-right mx-4 underline-offset-4 hover:underline my-2"
              >
                Login
              </Link>
            </div>
            <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
              <Link href="/">
                <li className="ml-10 text-md hover:underline text-black underline-offset-4">
                  Home
                </li>
              </Link>
              <Link href="/company/products">
                <li className="ml-10 text-md hover:underline text-black underline-offset-4">
                  Products
                </li>
              </Link>
              <Link href="/company/solutions">
                <li className="ml-10 text-md hover:underline text-black underline-offset-4">
                  Solutions
                </li>
              </Link>
              <Link href="/company/resources">
                <li className="ml-10 text-md hover:underline text-black underline-offset-4">
                  Resources
                </li>
              </Link>
              <Link href="/company/pricing">
                <li className="ml-10 text-md hover:underline text-black underline-offset-4">
                  Pricing
                </li>
              </Link>
              <Link href="/contact">
                <li className="ml-10 text-md hover:underline text-black underline-offset-4">
                  Contact Us
                </li>
              </Link>
            </ul>
            {/* On click of menu button, toggle navigation side bar*/}
            <div onClick={handleNav} className="md:hidden">
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>

        {/* If nav is true -> ? ' ' : else ' '*/}
        {/* md:hidden closes side nav if medium screen size, otherwise show this div*/}
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[%45] h-screen bg-[#141414] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Link href="/">
                  <div>
                    <h1 className="text-black cursor-pointer hover:scale-110 ease-in duration-300 p-4 md:p-6">
                      Onboardy Pic
                    </h1>
                  </div>
                </Link>

                {/* On click of close button, toggle navigation side bar*/}
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4">stuff</p>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="">
                <Link href="/">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    home
                  </li>
                </Link>
                <Link href="/#about">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    products
                  </li>
                </Link>
                <Link href="/#skills">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    solutions
                  </li>
                </Link>
                <Link href="/#projects">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    resources
                  </li>
                </Link>
                <Link href="/#timeline">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    pricing
                  </li>
                </Link>
                <Link href="/assets/Kobe_Braga_Resume.pdf">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    hit my line
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
