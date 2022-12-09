import Link from "next/link";
import React, { useState } from "react";
import CompanyLogin from "./CompanyLogin";
import DeveloperLogin from "./DeveloperLogin";
import { AiOutlineMenu } from "react-icons/ai";

const LoginNav = () => {
  const [company, setCompany] = useState(true);
  const [navBg, setNavBg] = useState("");
  const [linkColor, setLinkColor] = useState("#e0e0e0");
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    //set to [invert nav] instead of [true]
    setNav(!nav);
  };
  return (
    <div>
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
            <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
              <li
                onClick={() => setCompany(true)}
                className="ml-10 text-md hover:cursor-pointer  hover:underline text-black underline-offset-4"
              >
                Company Login
              </li>
              <li
                onClick={() => setCompany(false)}
                className="ml-10 text-md hover:cursor-pointer hover:underline text-black underline-offset-4"
              >
                Developer Login
              </li>
            </ul>
            {/* On click of menu button, toggle navigation side bar*/}
            <div onClick={handleNav} className="md:hidden">
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="flex justify-evenly items-center w-10/12">
          {company ? (
            <CompanyLogin
              image={
                "https://media.istockphoto.com/id/498323251/photo/colleagues-discussing-over-digital-tablet.jpg?s=612x612&w=0&k=20&c=DNvyl9vDe6sRY76cuGdaye1unr_F48GKRtm2FB8thII="
              }
              text={
                "Request certified assessments, send take-home tests, and conduct live interviews."
              }
              title={"Make Data-Driven Hiring Decisions"}
            />
          ) : (
            <DeveloperLogin
              image={
                "https://thumbs.dreamstime.com/b/professional-development-programmer-working-programming-website-software-coding-technology-writing-codes-data-code-132331729.jpg"
              }
              text={
                "Take our certified assessment to see how you compare to the rest of the industry"
              }
              title={"Get your coding report and prepare for interviews"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginNav;
