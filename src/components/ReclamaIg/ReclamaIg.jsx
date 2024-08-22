import React from "react";
import heroBg from "@/assets/heroBg.png";

const ReclamaImg = ({ title }) => {
  return (
    <div className="container mx-auto mt-8">
      <div
        className="hero h-[540px] w-full bg-no-repeat   rounded-2xl   overflow-hidden flex flex-col justify-center bg-cover "
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="mx-24 flex flex-col gap-3">
          <h1 className="text-[#253D4E] text-7xl max-w-[600px] font-bold mb-5">{title}</h1>
          <p className="text-[#7E7E7E] text-3xl mb-3">
            Save up to 50% off on your first order
          </p>
          <div className="hero__input flex items-center  rounded-2xl w-max bg-white ">
      <div className="p-3 flex items-center">
        <input
          type="text"
          placeholder="Your emaill address"
          className=" bg-transparent outline-none pr-20 pl-2 max-w-[300px]"
        />
      </div>
      <button className="border bg-[#3BB77E] py-3 px-4 rounded-2xl text-white">
        Subscribe
      </button>
    </div>
        </div>
      </div>
    </div>
  );
};

export default ReclamaImg;
