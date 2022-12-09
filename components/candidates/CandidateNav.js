import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BsBellFill, BsFillQuestionCircleFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";

const CandidateNav = () => {
  const [company, setCompany] = useState(true);
  const [navBg, setNavBg] = useState("");
  const [linkColor, setLinkColor] = useState("#e0e0e0");
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    //set to [invert nav] instead of [true]
    setNav(!nav);
  };
  const router = useRouter();

  return (
    <div className=" w-full h-[10vh] flex justify-start items-center">
      <div className="flex justify-between items-center h-[10vh] w-full px-8">
        <Link href="/">
          <div>
            <div className="cursor-pointer hover:scale-110 ease-in duration-300 text-4xl text-[#7B8CDE] flex justify-center items-center">
              <div className="text-black">On</div>board
              <div className="text-black">y</div>
            </div>
          </div>
        </Link>
        <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
          <Link href="/candidates">
            <li
              onClick={() => setCompany(true)}
              className="ml-10 text-md hover:cursor-pointer  hover:underline text-black underline-offset-4"
            >
              Dashboard
            </li>
          </Link>
          <Link href="/candidates/practice">
            <li
              onClick={() => setCompany(false)}
              className="ml-10 text-md hover:cursor-pointer hover:underline text-black underline-offset-4"
            >
              Practice
            </li>
          </Link>
        </ul>
        {/* On click of menu button, toggle navigation side bar*/}
        <div onClick={handleNav} className="md:hidden">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div className="flex justify-end items-center">
        <BsBellFill className="text-black text-3xl mx-4 hover:cursor-pointer hover:!text-theme-purple hover:scale-110" />
        <BsFillQuestionCircleFill className="text-black text-3xl mx-4 hover:cursor-pointer hover:!text-theme-purple hover:scale-110" />
        <CgProfile className="text-black text-3xl mx-4 hover:cursor-pointer hover:!text-theme-purple hover:scale-110" />
      </div>
    </div>
  );
};

export default CandidateNav;
