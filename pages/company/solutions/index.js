import React from "react";
import { Row, Col } from "react-bootstrap";
import Solution from "../../../components/Solution";
import Fluff from "../../../components/Fluff";
import "animate.css";

const index = () => {
  return (
    <div className="flex justify-center flex-col items-center bg-background">
      <p className="animate__animated animate__fadeInDown text-4xl font-semibold text-center mt-4">
        Solutions
      </p>
      <Row className="mt-4 w-10/12 flex justify-center">
        <Col
          xl={4}
          className="animate__animated animate__fadeInLeft flex justify-center items-top"
        >
          <Solution
            title="Flourish (Team Growth)"
            description="Save significant time while identifying top talent for growing your team fast. Let us optimize the interview process and streamline the interview process, start to finish."
            border="hover:!border-theme-red"
            background="bg-theme-red"
            color="text-theme-red"
            link="/WIP"
            img="https://cdn.dribbble.com/users/1951182/screenshots/9539982/dribbble_adobe_3.png?compress=1&resize=400x300"
          />
        </Col>
        <Col
          xl={4}
          className="animate__animated animate__fadeIn animate__delay-1s flex justify-center items-top"
        >
          <Solution
            title="University Recruit"
            description="Assist and empower university recruiters to optimize and streamline evaluations. Identify top candidates while consuming less time and resources for everyone."
            border="hover:!border-theme-purple"
            background="bg-theme-purple"
            color="text-theme-purple"
            link="/WIP"
            img="https://previews.123rf.com/images/mustahtar/mustahtar1807/mustahtar180700015/104273298-young-students-university-college-books-and-knowledge-vector-concept-flat-design-business-communicat.jpg"
          />
        </Col>
        <Col
          xl={4}
          className="animate__animated animate__fadeIn animate__delay-2s flex justify-center items-top"
        >
          <Solution
            title="Engineering Community"
            description="Reduce significant engineering time spent interviewing all while optimizing candidate interview experience. Our solution will fill any role from start to end utilizing teams of assessment engineers and psychologists."
            border="hover:!border-theme-green"
            background="bg-theme-green"
            color="text-theme-green"
            link="/WIP"
            img="https://mooregeneralservices.com/wp-content/uploads/2021/10/hiring-tips.png"
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
