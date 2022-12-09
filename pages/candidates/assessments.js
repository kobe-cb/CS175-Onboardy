import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

const technicals = Array(5).fill(0);
const nontechincals = Array(2).fill(0);

const assessments = () => {
  const [type, setType] = useState("technical");
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-10/12">
        <div className="flex justify-center items-center my-4">
          <button
            className={`${
              type === "technical" ? "bg-green-500" : "bg-gray-100"
            } ${type === "technical" ? "text-white" : "text-black"} ${
              type === "techincal" ? "border-none" : "border-2 border-gray-200"
            } px-4 py-2 mx-4 font-raleway font-semibold rounded-sm`}
            onClick={() => setType("technical")}
          >
            Technical
          </button>
          <button
            className={`${
              type === "nontechnical" ? "!bg-green-500" : "bg-gray-100"
            } ${type === "nontechnical" ? "text-white" : "text-black"} ${
              type === "nontechnical"
                ? "border-none"
                : "border-2 border-gray-200"
            } px-4 py-2 mx-4 font-raleway font-semibold rounded-sm`}
            onClick={() => setType("nontechnical")}
          >
            Nontechnical
          </button>
        </div>

        <Accordion defaultActiveKey="0" className="">
          {type === "technical" &&
            technicals.map((technical, index) => (
              <Accordion.Item eventKey={index}>
                <Accordion.Header>
                  Technical Question #{index + 1}
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            ))}
          {type === "nontechnical" &&
            nontechincals.map((nontechnical, index) => (
              <Accordion.Item eventKey={index}>
                <Accordion.Header>
                  Nontechnical Question #{index + 1}
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            ))}
        </Accordion>
      </div>
    </div>
  );
};

export default assessments;
