import Link from "next/link";
import React from "react";
import { Row, Col } from "react-bootstrap";
import Solution from "../../../components/Solution";
import Fluff from "../../../components/Fluff";
import WIP from "../../WIP";

const index = () => {
  return (
    <div className="flex justify-center flex-col items-center bg-background">
      <p className="animate__animated animate__fadeInDown text-4xl font-semibold text-center mt-4">
        Products
      </p>
      <Row className="mt-4 w-10/12 flex justify-center">
        <Col
          xl={4}
          className="animate__animated animate__fadeInLeft flex justify-center items-top"
        >
          <Solution
            title="Tech Screen"
            description="A modern way to conduct consistent and fair technical screens that gives time back to engineers. Replace phone screens and recieve fast, research-backed results while making the process an enjoyable experience for the candidates. "
            border="hover:!border-theme-red"
            background="bg-theme-red"
            color="text-theme-red"
            link="/WIP"
            img="https://png.pngitem.com/pimgs/s/348-3485738_mobile-device-with-a-check-mark-on-the.png"
          />
        </Col>
        <Col
          xl={4}
          className="animate__animated animate__fadeIn animate__delay-1s flex justify-center items-top"
        >
          <Solution
            title="Pre-Screen"
            description="Optimize the hiring process by elimiating the resume screen. Identify skilled candidates early with validated and proctored results. We offer end to end screening from question designs to test delivery."
            border="hover:!border-theme-purple"
            background="bg-theme-purple"
            color="text-theme-purple"
            link="/WIP"
            img="https://cutewallpaper.org/24/stack-of-paper-png/stack-of-papers-icons-download-free-vector-icons-noun-project.png"
          />
        </Col>
        <Col
          xl={4}
          className="animate__animated animate__fadeIn animate__delay-2s flex justify-center items-top"
        >
          <Solution
            title="Interview"
            description="Streamline the interview process by delivering the best candidate experience in a realistic code environment. Gather deeper insights and be able to scale to perform interviews fast. "
            border="hover:!border-theme-green"
            background="bg-theme-green"
            color="text-theme-green"
            link="/WIP"
            img="https://www.jobs.ie/job-talk/wp-content/uploads/STAR-interview-method.jpg"
          />
        </Col>
      </Row>
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
  );
};

export default index;
