import React from "react";

const Pricing = ({
  title,
  monthlyPrice,
  annualPrice,
  type,
  features,
  color,
  background,
  border,
}) => {
  return (
    <div className={`${border} border-t-4 p-2`}>
      <p
        className={`font-raleway font-semibold text-2xl ${color} text-center mt-2`}
      >
        {title}
      </p>
      <div className="text-center text-lg mt-2">
        US$
        <p className="text-xl inline">
          {type === "annual" ? monthlyPrice : annualPrice}
        </p>
        /mo
      </div>
      <p className="text-center text-sm">
        billed {type == "month" ? "monthly" : "annually"}
      </p>
      <div className="flex justify-center mt-4">
        <button
          className={`px-2 py-1 ${background} rounded-sm text-white font-semibold`}
        >
          Buy Now
        </button>
      </div>
      <div className="flex justify-center flex-col mt-4">
        {features.map((feature, index) => (
          <p key={index} className="text-center text-sm text-gray-500">
            {feature}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
