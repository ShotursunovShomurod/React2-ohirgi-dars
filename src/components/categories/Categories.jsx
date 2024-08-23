import React from "react";
import category1 from "@/assets/category1.png";
import category2 from "@/assets/category2.png";
import category3 from "@/assets/category3.png";
import category4 from "@/assets/category4.png";
import category5 from "@/assets/category5.png";
import category6 from "@/assets/category6.png";
import category7 from "@/assets/category7.png";
import category8 from "@/assets/category8.png";
import category9 from "@/assets/category9.png";
import category10 from "@/assets/category10.png";
import Fruit from "../Vegetables/Vegetables";
import BigCard from "../BigCards/BigCard";
import BigCard1 from "@/assets/BigCard1.png";
import BigCard2 from "@/assets/BigCard2.png";
import BigCard3 from "@/assets/BigCard3.png";

const fruitData = [
  { Rasmlar: category1, Titellar: "Cake & Milk", Itemlar: "26 items" },
  { Rasmlar: category2, Titellar: "Organic Kiwi", Itemlar: "28 items" },
  { Rasmlar: category3, Titellar: "Peach", Itemlar: "42 items" },
  { Rasmlar: category4, Titellar: "Red Apple", Itemlar: "54 items" },
  { Rasmlar: category5, Titellar: "Snack", Itemlar: "25 items" },
  { Rasmlar: category6, Titellar: "Vegetables", Itemlar: "12 items" },
  { Rasmlar: category7, Titellar: "Strawberry", Itemlar: "45 items" },
  { Rasmlar: category8, Titellar: "Black Plum", Itemlar: "57 items" },
  { Rasmlar: category9, Titellar: "Custard Apple", Itemlar: "61 items" },
  { Rasmlar: category10, Titellar: "Coffee & Tea", Itemlar: "14 items" },
];

const Categories = (item) => {
  return (
    <div className="container mx-auto mt-10">
      <div className="category flex items-center gap-7">
        <div className="category__title mb-4">
          <h3 className="text-4xl">Featured Categories</h3>
        </div>

        <div className="category__links flex gap-4">
          <a href="#" className="hover:text-[#3BB77E]">
            Cake & Milk
          </a>
          <a href="#" className="hover:text-[#3BB77E] ">
            Coffes & Teas
          </a>
          <a href="#" className="hover:text-[#3BB77E]">
            Pet Foods
          </a>
          <a href="#" className="hover:text-[#3BB77E]">
            Vegetables
          </a>
        </div>
      </div>
      <div className="category__items flex justify-center gap-6 flex-wrap">
        {fruitData.map((item, index) => (
          <Fruit
            key={index}
            img={item.Rasmlar}
            title={item.Titellar}
            kolvo={item.items}
          />
        ))}
      </div>
      <div className=" flex flex-wrap gap-4">
        <div className="flex-1 min-w-[300px] text-2xl font-bold">
          <BigCard
            img={BigCard1}
            text="Everyday Fresh & Clean with Our Products"
          />
        </div>
        <div className="flex-1 min-w-[300px] text-2xl font-bold">
          <BigCard img={BigCard2} text="Make your Breakfast Healthy and Easy" />
        </div>
        <div className="flex-1 min-w-[300px] text-2xl font-bold">
          <BigCard img={BigCard3} text="The best Organic Products Online" />
        </div>
      </div>
    </div>
  );
};

export default Categories;
