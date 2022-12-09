import Link from "next/link";
import React from "react";

const Solution = ({
  img,
  link,
  border,
  color,
  background,
  title,
  description,
}) => {
  return (
    <div
      className={`${border} border-white border-2 hover:cursor-pointer p-4 flex justify-center flex-col items-center rounded-lg ease-in duration-300`}
    >
      <p
        className={`font-raleway font-semibold text-2xl ${color} text-center mt-2`}
      >
        {title}
      </p>
      <img src={img} className="mt-4 " />
      <p className="mt-4">{description}</p>
      <div className="flex justify-center mt-4">
        <Link href={link}>
          <button
            className={`px-2 py-1 ${background} rounded-sm text-white font-semibold`}
          >
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Solution;
