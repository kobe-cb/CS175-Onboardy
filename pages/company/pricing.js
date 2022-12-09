import React, { useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import Pricing from "../../components/Pricing";
import Fluff from "../../components/Fluff";
import "animate.css";

const pricing = () => {
  const [type, setType] = useState("month");

  return (
    <div className="flex justify-center items-center bg-background">
      <div className="w-10/12 flex justify-center items-center flex-col">
        <p className="animate__animated animate__fadeInDown text-4xl font-semibold text-center my-4">
          Transform your tech hiring today.
        </p>
        <p className="font-raleway text-xl text-center mt-4">
          From interns to experienced hires, evaluate skills for any developer
          role including: software engineer, back-end, front-end, devops, data
          scientist, and QA/SDET
        </p>
        <div className="font-raleway text-base text-center mt-4">
          Questions? Check out the{" "}
          <p className="inline text-blue-800">FAQs here</p>.
        </div>
        <div className="flex justify-center mt-4">
          <button
            className={`${type === "month" ? "bg-green-500" : "bg-gray-100"} ${
              type === "month" ? "text-white" : "text-black"
            } ${
              type === "month" ? "border-none" : "border-2 border-gray-200"
            } px-4 py-2 mx-4 font-raleway font-semibold rounded-sm`}
            onClick={() => setType("month")}
          >
            Monthly
          </button>
          <button
            className={`${type === "annual" ? "bg-green-500" : "bg-gray-100"} ${
              type === "annual" ? "text-white" : "text-black"
            } ${
              type === "annual" ? "border-none" : "border-2 border-gray-200"
            } px-4 py-2 mx-4 font-raleway font-semibold rounded-sm`}
            onClick={() => setType("annual")}
          >
            Annually
          </button>
        </div>
        <Row className="mt-4 w-full">
          <Col
            xl={3}
            className="animate__animated animate__fadeIn flex justify-center items-top"
          >
            <Pricing
              title="Interview"
              annualPrice={50}
              monthlyPrice={30}
              type={type}
              features={[
                "1 Admin Interviewer license",
                "Pay per interview license",
                "Access to Interviews only",
                "Standard content library",
              ]}
              color="text-blue-900"
              background="bg-blue-900"
              border="border-blue-900"
            />
          </Col>
          <Col
            xl={3}
            className="animate__animated animate__fadeIn flex justify-center items-top"
          >
            <Pricing
              title="Individual"
              annualPrice={319}
              monthlyPrice={239}
              type={type}
              features={[
                "1 Full-Access user license ",
                "30 candidates a month",
                "Access to Tests",
                "Access to Interviews",
                "Standard content library",
              ]}
              color="text-sky-600"
              background="bg-sky-600"
              border="border-sky-600"
            />
          </Col>
          <Col
            xl={3}
            className="animate__animated animate__fadeIn animate__delay-1s flex justify-center items-top"
          >
            <Pricing
              title="Team"
              annualPrice={1500}
              monthlyPrice={1000}
              type={type}
              features={[
                "2 Full-Access user licenses",
                "3 Interviewer licenses",
                "240 candidates every 4 months",
                "Access to Tests",
                "Access to Interviews",
                "Premium content library",
                "Projects (Premium Only)",
                "Benchmarking (Premium Only)",
                "Code Reviews (Premium Only)",
              ]}
              color="text-teal-500"
              background="bg-teal-500"
              border="border-teal-500"
            />
          </Col>
          <Col
            xl={3}
            className="animate__animated animate__fadeIn animate__delay-1s flex justify-center items-top"
          >
            <Pricing
              title="Enterprise Platform"
              annualPrice={30000}
              monthlyPrice={25000}
              type={type}
              features={[
                "Custom # of licenses",
                "Access to Tests",
                "Access to Interviews",
                "Projects (Add-on)",
                "Benchmarking (Add-on)",
                "Code Reviews (Add-on)",
                "ATS integration",
                "Premium content library",
                "Customer Success Manager",
              ]}
              color="text-green-700"
              background="bg-green-700"
              border="border-green-700"
            />
          </Col>
        </Row>
        <p className="text-3xl text-center mt-4">Compare Plans</p>
        <Table striped bordered hover className="mt-4 font-raleway">
          <thead>
            <tr>
              <th className="text-center">Features</th>
              <th className="text-center">Interview</th>
              <th className="text-center">Individual</th>
              <th className="text-center">Team</th>
              <th className="text-center">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">Full-Access User Licenses</td>
              <td className="text-center">1</td>
              <td className="text-center">1</td>
              <td className="text-center">2</td>
              <td className="text-center">Custom</td>
            </tr>
            <tr>
              <td className="text-center">Interviewer Licenses</td>
              <td className="text-center">1</td>
              <td className="text-center">1</td>
              <td className="text-center">2</td>
              <td className="text-center">Custom</td>
            </tr>
            <tr>
              <td className="text-center">Test Invites</td>
              <td className="text-center">Pay per User</td>
              <td className="text-center">--</td>
              <td className="text-center">3</td>
              <td className="text-center">Custom</td>
            </tr>
            <tr>
              <td className="text-center">Test Attempts</td>
              <td className="text-center">--</td>
              <td className="text-center">360/year</td>
              <td className="text-center">720/year</td>
              <td className="text-center">Custom</td>
            </tr>
            <tr>
              <td className="text-center">Interview Sessions</td>
              <td className="text-center">Unlimited</td>
              <td className="text-center">Unlimited</td>
              <td className="text-center">Unlimited</td>
              <td className="text-center">Unlimited</td>
            </tr>
            <tr>
              <td className="text-center">Projects</td>
              <td className="text-center">--</td>
              <td className="text-center">--</td>
              <td className="text-center">Premium</td>
              <td className="text-center">Add-on</td>
            </tr>
            <tr>
              <td className="text-center">Benchmarking</td>
              <td className="text-center">--</td>
              <td className="text-center">--</td>
              <td className="text-center">Premium</td>
              <td className="text-center">Add-on</td>
            </tr>
            <tr>
              <td className="text-center">Code Reviews</td>
              <td className="text-center">--</td>
              <td className="text-center">--</td>
              <td className="text-center">Premium</td>
              <td className="text-center">Add-on</td>
            </tr>
            <tr>
              <td className="text-center">Library Access</td>
              <td className="text-center">Standard</td>
              <td className="text-center">Standard</td>
              <td className="text-center">Premium</td>
              <td className="text-center">Premium</td>
            </tr>
            <tr>
              <td className="text-center">Support</td>
              <td className="text-center">Email</td>
              <td className="text-center">Email</td>
              <td className="text-center">Email + Phone</td>
              <td className="text-center">Email + Phone</td>
            </tr>
          </tbody>
        </Table>
        <Fluff
          background="bg-green-100"
          imageFirst={true}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          img="https://www.lehnerinvestments.com/wp-content/uploads/2019/12/Trading_Graph_Chart-780x438-1-256x256.jpg"
        />
        <Fluff
          background="bg-red-100"
          imageFirst={false}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          img="https://www.lehnerinvestments.com/wp-content/uploads/2019/12/Trading_Graph_Chart-780x438-1-256x256.jpg"
        />
        <Fluff
          background="bg-blue-100"
          imageFirst={true}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          img="https://www.lehnerinvestments.com/wp-content/uploads/2019/12/Trading_Graph_Chart-780x438-1-256x256.jpg"
        />
        <Fluff
          background="bg-purple-100"
          imageFirst={false}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          img="https://www.lehnerinvestments.com/wp-content/uploads/2019/12/Trading_Graph_Chart-780x438-1-256x256.jpg"
        />
        <Fluff
          background="bg-orange-100"
          imageFirst={true}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          img="https://www.lehnerinvestments.com/wp-content/uploads/2019/12/Trading_Graph_Chart-780x438-1-256x256.jpg"
        />
      </div>
    </div>
  );
};

export default pricing;
