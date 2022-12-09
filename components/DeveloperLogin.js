import React from "react";
import { Col, Row } from "react-bootstrap";
import Picture from "./Picture";
import { FcGoogle } from "react-icons/fc";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookSquare, FaGithub, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const DeveloperLogin = ({ image, text, title }) => {
  return (
    <div>
      <Row>
        <Col xl={4} className="flex justify-center items-center flex-col">
          <div className="w-10/12 bg-sky-100 hover:cursor-pointer rounded-sm font-raleway font-semibold text-center flex justify-center items-center p-2 mt-4">
            <FaFacebookSquare className="p-0 m-0 text-3xl text-blue-900" />
            <Link href="/candidates" className="w-full">
              <p>Sign in with Facebook</p>
            </Link>
          </div>
          <div className="w-10/12 bg-sky-100 hover:cursor-pointer rounded-sm font-raleway font-semibold text-center flex justify-center items-center p-2 mt-4">
            <FcGoogle className="p-0 m-0 text-3xl" />
            <Link href="/candidates" className="w-full">
              <p>Sign in with Google</p>
            </Link>
          </div>
          <div className="w-10/12 bg-sky-100 hover:cursor-pointer rounded-sm font-raleway font-semibold text-center flex justify-center items-center p-2 mt-4">
            <FaGithub className="p-0 m-0 text-3xl" />
            <Link href="/candidates" className="w-full">
              <p>Sign in with Github</p>
            </Link>
          </div>
          <div className="w-10/12 bg-sky-100 hover:cursor-pointer rounded-sm font-raleway font-semibold text-center flex justify-center items-center p-2 mt-4">
            <FaTwitter className="p-0 m-0 text-3xl text-sky-400" />
            <Link href="/candidate" className="w-full">
              <p>Sign in with Twitter</p>
            </Link>
          </div>
          <div className="flex justify-center items-center w-full mt-4">
            <hr className=" bg-black h-0.5 w-32" />
            <p className="w-fit mx-4">OR</p>
            <hr className=" bg-black h-0.5 w-32" />
          </div>

          <div className="flex flex-col w-10/12 ">
            <label className="font-raleway text-gray-400 mt-2">
              Email or Username
            </label>
            <input
              type="text"
              placeholder="eg. tony_stark@onboardy.com"
              className="p-2 border-2 rounded-md"
            />
            <label className="font-raleway text-gray-400 mt-4">Password</label>
            <input
              type="text"
              placeholder="Password"
              className="p-2 border-2 rounded-md"
            />
            <label className="font-raleway text-blue-800 text-right text-sm hover:cursor-pointer">
              Forgot Password?
            </label>
            <Link
              href="/candidates"
              className="mt-4 bg-blue-500 py-2 text-white rounded-sm font-semibold hover:cursor-pointer flex justify-center"
            >
              <button className=" bg-blue-500 text-white rounded-sm font-semibold hover:cursor-pointer">
                SIGN IN
              </button>
            </Link>
          </div>

          <div className="mt-4">
            <p className="inline font-raleway">No account?</p>
            <p className="inline text-blue-800 font-semibold font-raleway hover:cursor-pointer">
              {" "}
              Sign up here!
            </p>
          </div>
        </Col>
        <Col xl={8} className="flex justify-center items-center flex-col">
          <Picture image={image} text={text} title={title} />
        </Col>
      </Row>
    </div>
  );
};

export default DeveloperLogin;
