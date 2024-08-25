import React from "react";
import { Banner } from "..";
import images from "@/assets/banner.png";
import images1 from "@/assets/banner1.png";
import images2 from "@/assets/banner2.png";

const Reclamachalar = () => {
  return (
    <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[45px]">
      {[
        { title: "Make your Breakfast Healthy and Easy", bg: images },
        { title: "Everyday Fresh & Clean with Our Products", bg: images1 },
        { title: "The best Organic Products Online", bg: images2 },
      ].map(({ title, bg }, index) => (
        <Banner key={index} title={title} bg={bg} />
      ))}
    </div>
  );
};

export default Reclamachalar;