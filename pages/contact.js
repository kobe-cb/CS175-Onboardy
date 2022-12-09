import React from "react";
import { Row, Col } from "react-bootstrap";
import "animate.css";

const companies = Array(6).fill(
  "https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png"
);

const contact = () => {
  return (
    <div className="flex justify-center items-center bg-background">
      <Row className=" w-10/12">
        <Col xl={6}>
          <h6 className="animate__animated animate__fadeIn font-raleway text-5xl font-semibold mt-3">
            Contact Us
          </h6>
          <p className="font-raleway mt-3">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit
          </p>
          <p className="font-raleway mt-3 font-semibold text-xl">
            Join hundreds of companies!
          </p>
          <Row className="">
            {companies.map((company, index) => (
              <Col xl={3} className="" key={index}>
                <img className="p-2" src={company} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col xl={6}>
          <h6 className="font-raleway text-3xl font-semibold mt-4">
            Contact Us
          </h6>
          <label className="mt-4 text-sm" htmlFor="email">
            WORK EMAIL
          </label>
          <br />
          <input
            className="w-full p-2 font-raleway placeholder:font-raleway rounded-md border-2"
            type="text"
            name="email"
            placeholder="example@company.com"
          />
          <br />
          <label className="mt-4 text-sm" htmlFor="title">
            JOB TITLE
          </label>
          <br />
          <input
            className="w-full p-2 font-raleway placeholder:font-raleway rounded-md border-2"
            type="text"
            name="title"
            placeholder="Director of Talent Acquisition"
          />
          <br />
          <label className="mt-4 text-sm" htmlFor="role">
            ROLE
          </label>
          <br />
          <input
            className="w-full p-2 font-raleway placeholder:font-raleway rounded-md border-2"
            type="text"
            name="role"
            placeholder="Talent Acquistion"
          />
          <br />
          <label className="mt-4 text-sm" htmlFor="company">
            COMPANY NAME
          </label>
          <br />
          <input
            className="w-full p-2 font-raleway placeholder:font-raleway rounded-md border-2"
            type="text"
            name="company"
            placeholder="Company Name"
          />
          <br />
          <label className="mt-4 text-sm" htmlFor="first">
            FIRST NAME
          </label>
          <br />
          <input
            className="w-full p-2 font-raleway placeholder:font-raleway rounded-md border-2"
            type="text"
            name="first"
            placeholder="First Name"
          />
          <br />
          <label className="mt-4 text-sm" htmlFor="last">
            LAST NAME
          </label>
          <br />
          <input
            className="w-full p-2 font-raleway placeholder:font-raleway rounded-md border-2"
            type="text"
            name="last"
            placeholder="Last Name"
          />
          <br />
          <label className="mt-4 text-sm" htmlFor="phone">
            PHONE NUMBER
          </label>
          <br />
          <input
            className="w-full p-2 font-raleway placeholder:font-raleway rounded-md border-2"
            type="phone"
            name="phone"
            placeholder="Phone Number"
          />
          <br />
          <button className="rounded-full w-full bg-blue-500 py-3 text-white mt-4">
            Submit
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default contact;
