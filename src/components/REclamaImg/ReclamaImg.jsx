import React from "react";
import hero from "@/assets/Hero.png";
import { IoMdPaperPlane } from "react-icons/io";

const ReclamaImg = ({ bg }) => {
  console.log(bg);

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundColor: "#d8f1e5",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
      className="container mx-auto w-full"
    >
      <div
        style={{ marginTop: "100px" }}
        className="relative w-full overflow-hidden rounded-lg"
      >
        <img
          src={hero}
          alt="Hero"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100",
            objectFit: "cover",
            zIndex: -10,
          }}
        />
        <div style={{ padding: "20px", maxWidth: "600px" }} className="flex flex-col gap-6">
          <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#253D4E" }}>
            Fresh Vegetables Big discount
          </p>
          <p style={{ fontSize: "1rem", color: "#7E7E7E" }}>
            Save up to 50% off on your first order
          </p>
          <div style={{ display: "flex", alignItems: "center", backgroundColor: "#fff", borderRadius: "999px" }} className="border p-2">
            <IoMdPaperPlane style={{ marginLeft: "10px" }} />
            <input
              type="text"
              placeholder="Your email address"
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                marginLeft: "10px",
                fontSize: "1rem",
              }}
            />
            <button style={{ padding: "10px 15px", backgroundColor: "#3BB77E", color: "#fff", borderRadius: "999px", marginLeft: "10px" }}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReclamaImg;
