import React from "react";
import { Col, Row } from "react-bootstrap";
import Picture from "./Picture";
import { FcGoogle } from "react-icons/fc";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";

const CompanyLogin = ({ image, text, title }) => {
  return (
    <div>
      <Row>
        <Col xl={4} className="flex justify-center items-center flex-col">
          <div className="w-10/12 bg-sky-100 hover:cursor-pointer rounded-sm font-raleway font-semibold text-center flex justify-center items-center p-2 mt-4">
            <FcGoogle className="p-0 m-0 text-3xl" />
            <Link href="/company" className="w-full">
              <p className="">Sign in with Google</p>
            </Link>
          </div>
          <div className="w-10/12 bg-sky-100 hover:cursor-pointer rounded-sm font-raleway font-semibold text-center flex justify-center items-center p-2 mt-4">
            <RiLockPasswordLine className="p-0 m-0 text-3xl" />
            <Link href="/company" className="w-full">
              <p className="">Sign in with Password</p>
            </Link>
          </div>
          <div className="w-10/12 bg-sky-100 hover:cursor-pointer rounded-sm font-raleway font-semibold text-center flex justify-center items-center p-2 mt-4">
            <HiOutlineMail className="p-0 m-0 text-3xl" />
            <Link href="/company" className="w-full">
              <p className="">Sign in with SSO</p>
            </Link>
          </div>
          <div className="mt-4">
            <p className="inline font-raleway">No account?</p>
            <p className="inline text-blue-800 font-semibold font-raleway hover:cursor-pointer">
              {" "}
              Request a demo here!
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

export default CompanyLogin;
