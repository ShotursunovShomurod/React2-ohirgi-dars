
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Needs } from "@/components";
import { useFetch } from "@/hooks/useFetch";

const SingleProduct = () => {
  const { id } = useParams();
  const { data } = useFetch(`/products/${id}`, {}, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const discountPrice = data.price - (data.price * data.discountPercentage) / 100;

  return (
    <div className="container mt-[60px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10 px-1">
        <div className="flex flex-col items-center">
          <img
            className="w-[350px] h-[350px] object-contain border mb-4"
            src={data.images[0]}
            alt={data.title}
          />
          <div className="flex space-x-2 cursor-pointer">
            {data.images.map((item, index) => (
              <img
                className="w-[80px] h-[80px] object-contain border"
                src={item}
                key={index}
                alt={`Image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button className="py-[6px] w-40 rounded-[5px] border bg-[#FDE0E9] text-[#F74B81] text-[14px] font-[700]">
            Sale Off
          </button>
          <h2 className="text-[28px] md:text-[34px] lg:text-[38px] text-start font-quicksand font-[700]">
            {data.title}
          </h2>
          <div className="flex gap-6 items-center">
            <FaStar className="text-yellow-400" />
            <p className="text-[#B6B6B6] text-[14px] font-[400]">
              ({data.rating} reviews)
            </p>
          </div>
          <div className="flex items-baseline space-x-2 mt-2">
            <p className="text-[26px] sm:text-[38px] md:text-[44px] lg:text-[48px] text-[#3BB77E] font-[700]">
              ${data.price.toFixed(2)}
            </p>
            <p className="line-through text-[24px] text-[#B6B6B6] font-[700]">
              ${discountPrice.toFixed(2)}
            </p>
          </div>
          <p className="text-[#7E7E7E] text-[17px]">{data.description}</p>
          <div className="flex gap-5">
            <div className="flex gap-3 border w-[90px] py-[3px] rounded-[5px] items-center justify-center">
              <button>1</button>
              <div className="flex flex-col">
                <button>
                  <HiOutlineChevronUp className="text-[#3BB77E]" />
                </button>
                <button>
                  <HiOutlineChevronDown className="text-[#3BB77E]" />
                </button>
              </div>
            </div>
            <button className="flex gap-1 items-center border w-[120px] lg:w-[159px] bg-[#3BB77E] py-[12px] justify-center font-[600] rounded-[5px]">
              <AiOutlineShoppingCart className="text-[#fff]" />
              <p className="text-[#fff]">Add to cart</p>
            </button>
          </div>
        </div>
      </div>

      <div className="border rounded-[15px] p-[20px] sm:p-[38px] md:p-[48px] lg:p-[51px] flex flex-col gap-[30px]">
        <div className="flex gap-3 overflow-x-auto">
          {["Description", "Additional info", "Vendor", "Reviews (3)"].map((tab) => (
            <button
              key={tab}
              className="lg:py-[4px] border px-[5px] lg:px-[8px] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[15px] rounded-full"
            >
              {tab}
            </button>
          ))}
        </div>

        <p className="text-[15px] text-[#7E7E7E] text-start">
          Uninhibited carnally hired played in whimpered dear gorilla koala...
        </p>

        <div className="flex gap-[30px]">
          <div className="flex flex-col gap-[10px]">
            {["Type Of Packing", "Color", "Quantity Per Case", "Ethyl Alcohol", "Piece In One"].map(
              (desc, index) => (
                <p key={index} className="text-[13px] text-[#7E7E7E] text-start desc">
                  {desc}
                </p>
              )
            )}
          </div>
          <div className="flex flex-col gap-[10px]">
            {["Bottle", "Green, Pink, Powder Blue, Purple", "100ml", "70%", "Carton"].map(
              (detail, index) => (
                <p key={index} className="text-[13px] text-[#7E7E7E] text-start">
                  {detail}
                </p>
              )
            )}
          </div>
        </div>
        <hr />
        <p className="text-[15px] text-[#7E7E7E] text-start">
          Laconic overheard dear woodchuck wow this outrageously taut beaver...
        </p>
        <h3 className="text-[24px] text-[#253D4E] font-quicksand font-[700] text-start">
          Packaging & Delivery
        </h3>
        <hr />
        <p className="text-[15px] text-[#7E7E7E] text-start">
          Less lion goodness that euphemistically robin expeditiously...
        </p>
        <h3 className="text-[24px] text-[#253D4E] font-quicksand font-[700] text-start">
          Suggested Use
        </h3>
        <div className="flex flex-col gap-[10px]">
          {["Refrigeration not necessary.", "Stir before serving"].map((use, index) => (
            <p key={index} className="text-[15px] text-[#7E7E7E] text-start">
              {use}
            </p>
          ))}
        </div>
        <h3 className="text-[24px] text-[#253D4E] font-quicksand font-[700] text-start">
          Other Ingredients
        </h3>
        <div className="flex flex-col gap-[10px]">
          {[
            "Organic raw pecans, organic raw cashews.",
            "This butter was produced using a LTG (Low Temperature Grinding) process",
            "Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy or soy",
          ].map((ingredient, index) => (
            <p key={index} className="text-[15px] text-[#7E7E7E] text-start">
              {ingredient}
            </p>
          ))}
        </div>
        <h3 className="text-[24px] text-[#253D4E] font-quicksand font-[700] text-start">
          Warnings
        </h3>
        <p className="text-[15px] text-[#7E7E7E] text-start">
          Oil separation occurs naturally. May contain pieces of shell.
        </p>
      </div>

      <Needs />
    </div>
  );
};

export default SingleProduct;