import React from "react";
import { useNavigate } from "react-router-dom";

const Empty = ({ title, url }) => {
  const navigate = useNavigate();

  return (
    <div className="text-center min-[60vh] py-16">
      <img className="w-[200px] flex m-auto" src={url} alt={title} />
      <p className="text-[24px] font-bold text-[#0009]">
        {title}
      </p>
      <button
        onClick={() => navigate("/")}
        className="w-[150px] border rounded-[5px] font-bold text-[#fff] bg-[#00ffbf] py-2 mt-10"
      >
       Uyga qaytish
      </button>
    </div>
  );
};

export default Empty;
