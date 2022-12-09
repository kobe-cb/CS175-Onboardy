import React from "react";
import "animate.css";

const Picture = ({ image, text, title }) => {
  return (
    <div className="">
      <div className="flex justify-center items-center flex-col text-left mt-4">
        <p className="animate__animated animate__fadeInDown font-raleway text-4xl text-black font-semibold mt-4 text-center">
          {title}
        </p>
        <p className="animate__animated animate__fadeIn font-raleway text-xl my-4 text-center">
          {text}
        </p>
        <img className="animate__animated animate__fadeIn " src={image} />
      </div>
    </div>
  );
};

export default Picture;
