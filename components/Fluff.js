import React from "react";
import "animate.css";

const Fluff = ({ text, img, imageFirst, background }) => {
  return (
    <div
      className={`animate__animated animate__fadeInLeft flex justify-center my-12 px-4 py-10 rounded-xl items-center w-10/12 ${background} ${
        imageFirst ? "flex-row-reverse" : ""
      }`}
    >
      <div className="w-1/2 flex justify-center items-center font-raleway text-xl">
        {text}
      </div>
      <div className="w-1/3 flex justify-center items-center">
        <img src={img} />
      </div>
    </div>
  );
};

export default Fluff;
