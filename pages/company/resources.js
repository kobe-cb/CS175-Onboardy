import React from "react";
import { Row, Col } from "react-bootstrap";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { BsPersonBoundingBox, BsCameraVideoFill, BsBook } from "react-icons/bs";
import { TbBookUpload } from "react-icons/tb";
import "animate.css";

const resources_array = Array(10).fill(0);

const resources = () => {
  return (
    <div className="w-full flex justify-center items-center bg-background">
      <div className="w-10/12">
        <p className="animate__animated animate__fadeInDown text-4xl font-semibold text-center my-4">
          Resource Library
        </p>
        <div className="animate__animated animate__fadeIn ">
          <Row className="w-11/12 p-2 flex justify-center items-center">
            <Col className="p-2 bg-blue-100 m-2 text-blue-900 rounded hover:bg-theme-purple hover:text-white hover:cursor-pointer">
              All
            </Col>
            <Col className="p-2 bg-blue-100 m-2 text-blue-900 rounded flex justify-start items-center hover:bg-theme-purple hover:text-white hover:cursor-pointer">
              <AiOutlineCodeSandbox className="mx-2" /> Algorithms
            </Col>
            <Col className="p-2 bg-blue-100 m-2 text-blue-900 rounded flex justify-start items-center hover:bg-theme-purple hover:text-white hover:cursor-pointer">
              <BsPersonBoundingBox className="mx-2" />
              Interviews
            </Col>
            <Col className="p-2 bg-blue-100 m-2 text-blue-900 rounded flex justify-start items-center hover:bg-theme-purple hover:text-white hover:cursor-pointer">
              <BsBook className="mx-2" />
              EBooks
            </Col>
            <Col className="p-2 bg-blue-100 m-2 text-blue-900 rounded flex justify-start items-center hover:bg-theme-purple hover:text-white hover:cursor-pointer">
              <TbBookUpload className="mx-2" />
              Product Info
            </Col>
            <Col className="p-2 bg-blue-100 m-2 text-blue-900 rounded flex justify-start items-center hover:bg-theme-purple hover:text-white hover:cursor-pointer">
              <BsCameraVideoFill className="mx-2" />
              Webinars
            </Col>
          </Row>
        </div>
        <div className="animate__animated animate__fadeIn animate__delay-1s">
          <Row>
            {resources_array.map((resource, index) => (
              <Col xl={4}>
                <div className="m-2 border-2 p-4 font-raleway hover:scale-105 hover:cursor-pointer ease-in duration-300 rounded-lg">
                  <img src="https://www.roberthalf.com/sites/default/files/2021-01/resume-do-dont.jpg" />
                  <p className="font-semibold text-xl my-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  {index % 5 == 0 ? (
                    <div className="flex justify-start items-center mt-2 text-blue-900">
                      <AiOutlineCodeSandbox className="mr-2" /> Algorithms
                    </div>
                  ) : index % 5 == 3 ? (
                    <div className="flex justify-start items-center mt-2 text-blue-900">
                      <BsPersonBoundingBox className="mr-2" />
                      Interviews
                    </div>
                  ) : index % 4 == 2 ? (
                    <div className="flex justify-start items-center mt-2 text-blue-900">
                      <BsBook className="mr-2" />
                      EBooks
                    </div>
                  ) : index % 3 == 1 ? (
                    <div className="flex justify-start items-center mt-2 text-blue-900">
                      <TbBookUpload className="mr-2" />
                      Product Info
                    </div>
                  ) : (
                    <div className="flex justify-start items-center mt-2 text-blue-900">
                      <BsCameraVideoFill className="mr-2" />
                      Webinars
                    </div>
                  )}
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default resources;
