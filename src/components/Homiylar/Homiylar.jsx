import React from "react";
import images from "@/assets/div.banner-icon.png";
import images1 from "@/assets/div.banner-icon1.png";
import images2 from "@/assets/div.banner-icon2.png";
import images3 from "@/assets/div.banner-icon4.png";
import images4 from "@/assets/div.banner-icon3.png";

const HomiylarCardlari = [
  {
    id: 1,
    image: images,
    title: "Best prices & offers",
    description: "Orders $50 or more",
  },
  {
    id: 2,
    image: images1,
    title: "Free delivery",
    description: "24/7 amazing services",
  },
  {
    id: 3,
    image: images2,
    title: "Great daily deal",
    description: "When you sign up",
  },
  {
    id: 4,
    image: images3,
    title: "Wide assortment",
    description: "Mega Discounts",
  },
  {
    id: 5,
    image: images4,
    title: "Easy returns",
    description: "Within 30 days",
  },
];

const Homiylar = () => {
  return (
    <section className="container mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {HomiylarCardlari.map(({ id, image, title, description }) => (
          <div
            key={id}
            className="bg-[#F4F6FA] flex items-center gap-2 p-4 rounded-lg"
          >
            <img className="w-[50px] object-contain" src={image} alt={title} />
            <div>
              <h3 className="text-[15px] text-[#242424] font-semibold">{title}</h3>
              <p className="text-[14px] text-[#ADADAD]">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Homiylar;

