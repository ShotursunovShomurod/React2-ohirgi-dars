import React from "react";
import delivery from "@/assets/delivery.png";
import heroBg from "@/assets/heroBg.png";
import Logotip from "@/assets/icon1.png";
import Logotip2 from "@/assets/icon2.png";
import Logotip3 from "@/assets/icon3.png";
import Logotip4 from "@/assets/icon4.png";
import Logotip5 from "@/assets/icon5.png";
import DeliveryCard from "../delvieryCard/DeliveryCard";

const CategoryCard = [
  {
    img: Logotip,
    title: "Best prices ",
    desc: "Orders $50 or more",
  },
  {
    img: Logotip2,
    title: "Free delivery",
    desc: "24/7 amazing services",
  },
  {
    img: Logotip3,
    title: "Great daily deal",
    desc: "When you sign up",
  },
  {
    img: Logotip4,
    title: "Wide assortment",
    desc: "Mega Discounts",
  },
  {
    img: Logotip5,
    title: "Easy returns",
    desc: "Within 30 days",
  },
];

const items = CategoryCard?.map((e) => (
  <div className="w-[298px]">
    <DeliveryCard img={e.img} title={e.title} desc={e.desc} />
  </div>
));

const Delivery = () => {
  return (
    <div className="mx-auto container">
      <div
        className="h-[400px] bg-no-repeat  rounded-2xl flex items-end justify-between"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="left flex border flex-col justify-center w-1/3  h-full items-start gap-3 ml-20">
          <h3 className="text-[#253D4E] text-4xl">
            Stay home & get your daily needs from our shop
          </h3>
          <p className="text-[#7E7E7E] text-xl">
            Start You'r Daily Shopping with Nest <span>Mart</span>
          </p>
        </div>
        <div className="right">
          <img src={delivery} alt="" />
        </div>
      </div>

      <div className="cards flex gap-3 justify-between my-5 overflow-auto">{items}</div>
    </div>
  );
};

export default Delivery;
