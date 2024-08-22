import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "@/api/index";
import { FaChevronUp } from "react-icons/fa";
import { IoHomeOutline, IoCartOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import ReclamaImg from '@/components/ReclamaIg/ReclamaIg'

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`products/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [count, setCount] = useState(1);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => Math.max(prevCount - 1, 1));
  console.log(data);
  return (
    <>
      <div className="container mx-auto">
        <div className="mt-5 text-[#3BB77E] flex gap-4">
          <Link to={"/"}>
            <p className="flex items-center gap-3">
              <IoHomeOutline /> Home
            </p>
          </Link>
          <Link to={"/"}>
            <p className="flex items-center gap-3">
              <IoIosArrowForward /> Product
            </p>
          </Link>
          <p className="text-[#7E7E7E]">{data?.title}</p>
        </div>
        <hr className="mb-4 mt-3" />
        <div className="flex gap-12">
          <div className="w-1/2 b border rounded-3xl relative">
            <img src={data?.images[0]} alt="" />
            <button className=" absolute top-5 right-5 text-5xl text-[#ECECEC]">
              <IoIosSearch />
            </button>
          </div>
          <div>
            <button className="bg-[#F74B81] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#e63d6c] transition-colors duration-300">
              Sale Off
            </button>
            <h2 className="text-5xl font-semibold max-w-[500px] mt-[19px]">
              {data?.title}
            </h2>
            <div className="rating flex items-center gap-12 mt-[19px] mb-[37px]">
              <FaStar style={{ color: "#FFD601" }} />
              <p className="text-[#B6B6B6]">(32 reviews)</p>
            </div>
            <div className="flex items-center gap-7">
              <p className="text-[#3BB77E] text-5xl font-bold">
                ${data?.price}
              </p>
              <del className="text-[#B6B6B6] text-3xl font-bold">
                ${Math.floor(data?.price * 1.15)}
              </del>
            </div>
            <p className="mt-[37px] w-[466.5px]">{data?.description}</p>

            <div className="buttons flex gap-4 items-center ">
              <div className="flex items-center space-x-4">
                  <span className="text-xl font-semibold">{count}</span>
                <div className="flex flex-col">
                <button
                  onClick={increment}
                  className="text-[#3BB77E] px-2 py-1 rounded-lg"
                  >
               <FaChevronUp />
                </button>
                <button
                  onClick={decrement}
                  className=" text-[#3BB77E] px-2 py-1 rounded-lg"
                  >
                  <FaChevronDown />
                </button>
                  </div>
              </div>
              <button
                type="button"
                class="flex items-center gap-2 mt-3 text-white bg-[#3BB77E] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
              >
                <IoCartOutline /> Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="p-6 bg-white container mx-auto">
        <div class="mb-6">
          <h2 class="text-2xl font-semibold mb-[42px]">Description</h2>
          <p class="text-gray-700 leading-relaxed">
            Uninhibited carnally hired played in whimpered dear gorilla koala
            depending and much yikes off far quetzal goodness and from for
            grimaced goodness unaccountably and meadowlark near unblushingly
            crucial scallop tightly neurotic hungrily some and dear furiously
            this apart. Spluttered narrowly yikes left moth in yikes bowed this
            that grizzly much hello on spoon-fed that alas rethought much
            decently richly and wow against the frequent fluidly at formidable
            acceptably flapped besides and much circa far over the bucolically
            hey precarious goldfinch mastodon goodness gnashed a jellyfish and
            one however because.
          </p>
          <ul class="mt-4">
            <li>
              <strong>Type Of Packing</strong> Bottle
            </li>
            <li>
              <strong>Color:</strong> Green, Pink, Powder Blue, Purple
            </li>
            <li>
              <strong>Quantity Per Case:</strong> 100ml
            </li>
            <li>
              <strong>Ethyl Alcohol:</strong> 70%
            </li>
            <li>
              <strong>Piece In One:</strong> Carton
            </li>
          </ul>
        </div>

        <div class="mb-6">
          <h2 class="text-2xl font-semibold mb-2">Packaging & Delivery</h2>
          <p class="text-gray-700 leading-relaxed">
            Less lion goodness that euphemistically robin expeditiously bluebird
            smugly scratched far while thus cackled sheepishly rigid after due
            one assenting regarding censorious...
          </p>
        </div>

        <div class="mb-6">
          <h2 class="text-2xl font-semibold mb-2">Suggested Use</h2>
          <p class="text-gray-700">Refrigeration not necessary.</p>
          <p class="text-gray-700">Stir before serving</p>
        </div>

        <div class="mb-6">
          <h2 class="text-2xl font-semibold mb-2">Other Ingredients</h2>
          <p class="text-gray-700">
            <strong>Organic raw pecans, organic raw cashews.</strong>
            <br />
            This butter was produced using a LTG (Low Temperature Grinding)
            process.
            <br />
            Made in machinery that processes tree nuts but does not process
            peanuts, gluten, dairy or soy.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-semibold mb-2">Warnings</h2>
          <p class="text-gray-700">
            Oil separation occurs naturally. May contain pieces of shell.
          </p>
        </div>
      </div>



{ReclamaImg}

      
    </>
  );
};

export default Detail;
