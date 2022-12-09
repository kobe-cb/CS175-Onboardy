import Link from "next/link";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "animate.css";

const questions = Array(10).fill(0);

const index = () => {
  return (
    <div className="w-full flex justify-center items-center bg-background">
      <div className="w-10/12">
        <p className="animate__animated animate__fadeInDown text-4xl font-semibold text-center my-4">
          Practice
        </p>
        <Link href="/candidates/practice/interview">
          <div className="flex justify-evenly items-center my-4 text-black border-black border-2 p-4 rounded">
            <img
              src="https://images.pexels.com/photos/5668863/pexels-photo-5668863.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className="rounded"
            />
            <div className="text-center text-2xl flex justify-center items-center flex-col p-4 font-raleway">
              Practice Onboardy mock interviews to get familiar with the
              interview process and how to better your presentation skills.
              <div className="my-4 px-4 py-2 bg-green-500 w-fit text-xl rounded-md text-white font-semibold hover:scale-105 ease-in duration-300">
                Get Started Here
              </div>
            </div>
          </div>
        </Link>
        <Accordion defaultActiveKey="0" className="">
          {questions.map((technical, index) => (
            <Accordion.Item eventKey={index}>
              <Accordion.Header>
                <div className="flex justify-between w-full items-center">
                  <div className="flex justify-center items-start flex-col">
                    <p className="">Question #{index + 1}</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                  <div className="px-4 py-2 bg-green-500 rounded-md mx-4 text-white">
                    Start
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default index;
