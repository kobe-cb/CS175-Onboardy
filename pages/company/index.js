import React from "react";
import { Col, Row } from "react-bootstrap";

const array = Array(9).fill(0);

const index = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <Row className="w-10/12 mt-4">
        {array.map((grid, index) => (
          <Col
            xl={4}
            key={index}
            className="flex justify-center items-center flex-col p-2"
          >
            <div className="border-2 border-black flex justify-center items-center flex-col p-2">
              <p className="font-raleway text-3xl">Company Dashboard</p>
              <p className="font-raleway">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                odio euismod lacinia at quis. Est pellentesque elit ullamcorper
                dignissim cras. Non blandit massa enim nec dui nunc mattis.
                Feugiat in ante metus dictum. Mi ipsum faucibus vitae aliquet.
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default index;
