import React from "react";
const BigCard = ({ img, text }) => {
  return (
    <div
      className="h-[300px] bg-no-repeat  rounded-lg mt-4 max-w-[500px] bg-contain flex items-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="w-1/2 ml-7 flex flex-col gap-3">
        <h3>{text}</h3>
        <button
          type="button"
          class="w-28  text-white bg-green-700  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default BigCard;
