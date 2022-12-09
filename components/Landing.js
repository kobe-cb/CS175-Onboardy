import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";
import "animate.css";

const Landing = () => {
  return (
    // <div className="w-full h-screen bg-blue-700  pt-8">
    <div className="flex items-center flex-col min-h-[80vh]">
      <div className="h-[70vh] flex justify-center items-center flex-col">
        <Row className="w-10/12 m-0 p-2 h-fit">
          <Col xl={6} className="p-0 animate__animated animate__fadeIn ">
            <div className="w-10/12">
              <h6 className="text-5xl font-semibold">
                Crush the Coding Interview
              </h6>
              <p className="font-raleway mt-3">
                We provide various assessments to better prepare customers from
                technical online assessments to non-technical face-to-face
                interviews.
              </p>
              <p className="font-raleway mt-8">
                Customers will experience the whole process of a real interview
              </p>
            </div>
            <div className=" w-10/12 mt-4 flex justify-center">
              <Link
                href="/contact"
                className="bg-[#7B8CDE] text-white px-12 py-2 rounded-xl text-center font-raleway"
              >
                get started
              </Link>
            </div>
          </Col>
          <Col
            xl={6}
            className="animate__animated animate__fadeInRight animate__delay-1s"
          >
            <img
              className="rounded-lg"
              //src="https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.jpg?s=612x612&w=0&k=20&c=HYlIJ1VFfmHPwGkM3DtVIFNLS5ejfMMzEQ81ko534ak="
              src="https://i.imgur.com/5dt7T4k.png"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Landing;
