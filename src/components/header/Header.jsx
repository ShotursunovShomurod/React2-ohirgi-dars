import { useEffect, useState } from "react";
import navbar from "../../assets/Logo.png";
import "./header.css";
import { CiSearch, CiLocationOn, CiHeart } from "react-icons/ci";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { useStateValue } from "../context/Index";
import axios from "@/api/index";

const Header = () => {
  const [searchRes, setSearchRes] = useState(null);
  const [search, setSearch] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);

  useEffect(() => {
    search.trim().length >= 3
      ? axios
          .get(`/products/search`, {
            params: { q: search },
          })
          .then((res) => setSearchRes(res.data))
          .catch((err) => console.log(err))
      : setSearchRes(null);
  }, [search]);

  const searchHandler = (e) => setSearch(e.target.value);

  const [{ wishlist, cart }] = useStateValue();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="container mx-auto">
      <div className="flex items-center gap-[69px] bg-white  py-2 fixed z-[99] w-full top-0 px-10 left-0 justify-between">
        <Link to={"/"}>
          <img src={navbar} alt="Navbar" />
        </Link>
        <div className="border hidden lg:flex gap-2 w-[40%] pr-4 py-[10px] bg-white rounded-[5px]">
          <select className="border-none outline-none text-[14px] font-[700] text-[#253D4E] pl-2">
            <option value="">All Categories</option>
            <option value="">All Categories</option>
            <option value="">All Categories</option>
            <option value="">All Categories</option>
          </select>
          <hr className="w-[1px] h-[20px] bg-[#eee]" />
          <div className="relative hidden sm:block w-full">
            <input
              className="border-none outline-none w-full pl-2 text-[14px]"              
              type="text"
              placeholder="Search for items..."
              value={search}
              onChange={searchHandler}
              onFocus={() => setSearchFocus(true)}
              onBlur={() => setSearchFocus(false)}
            />
            {searchFocus && searchRes && searchRes.products?.length > 0 && (
              <div className="absolute top-[50px] left-0 w-full p-4 bg-white rounded-lg shadow-lg z-10">
                <ul className="flex flex-col gap-4 text-[13px]">
                  {searchRes.products.map((product) => (
                    <li
                      key={product.id}
                      className="p-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
                    >
                      {product.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <button>
            <CiSearch />
          </button>
        </div>

        <div className="rounded-[5px] border hidden bg-white gap-3 py-[6px] px-[8px] sm:flex">
          <button>
            <CiLocationOn />
          </button>
          <select className="border-none outline-none text-[14px] text-[#3BB77E]">
            <option value="">Your Location</option>
            <option value="">Your Location</option>
            <option value="">Your Location</option>
            <option value="">Your Location</option>
          </select>
        </div>

        <div className={`nav__collect flex gap-3 ${isMenuOpen ? "show" : ""}`}>
          <div className="flex items-center gap-4 navbar navbar__collection">
            <div className="flex items-center gap-1">
              <CiHeart className="text-[24px]" />
              <sup className="text-blue-500">{wishlist.length}</sup>
              <NavLink
                className="text-[16px] font-[400] text-[#fff] lg:text-[#7e7e7e]"
                to="/Wishlist"
              >
                Wishlist
              </NavLink>
            </div>
            <div className="flex items-center gap-1 navbar__collection">
              <IoCartOutline className="text-[24px]" />
              <sup className="bg-blue-500 text-blue-500">{cart.length}</sup>
              <NavLink
                className="text-[16px] font-[400] text-[#fff] lg:text-[#7e7e7e]"
                to="/Cart"
              >
                Cart
              </NavLink>
            </div>
            <div className="flex items-center gap-1">
              <IoPersonOutline className="text-[24px]" />
              <NavLink
                className="text-[16px] font-[400] text-[#fff] lg:text-[#7e7e7e] navbar__collection"
                to="/Account"
              >
                Account
              </NavLink>
            </div>
          </div>
        </div>
        <div onClick={toggleMenu} className="navbar__menu">
          <RiMenu2Fill />
        </div>
      </div>
    </div>
  );
};

export default Header;