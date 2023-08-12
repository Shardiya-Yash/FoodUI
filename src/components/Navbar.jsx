import React, { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* left side start */}
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu size={27} onClick={()=>setToggle(true)}/>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Eats<span className="font-bold">UI</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] ">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      {/* middle -search input */}
      <div className="bg-gray-100 flex items-center px-2 rounded-full w-[200px] sm:w-[400px] lg:w-[500px] ">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 focus:outline-none w-full"
          type="text"
          placeholder="Search...."
        />
      </div>
      {/* right side - cart button */}
      <button className="bg-black text-white hidden md:flex justify-center items-center py-2 rounded-full">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>

      {/* Mobile Menu Started */}
      {toggle ? (
        <div className="bg-black/80 fixed w-full h-screen bg-white z-10 top-0 left-0 duration-300"></div>
      ) : (
        " "
      )}

      {/* side menu drawer started */}

      <div
        className={
          toggle
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          size={20}
          className="absolute right-4 top-4 cursor-pointer"
          onClick={() => {
            setToggle(false);
          }}
        />
        <h2 className="text-2xl p-4">
          Eats<span className="font-bold">UI</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-3 flex ">
              <TbTruckDelivery size={25} className="mr-4" />
              Order
            </li>
            <li className="text-xl py-3 flex ">
              <MdFavorite size={25} className="mr-4" />
              Favorite
            </li>
            <li className="text-xl py-3 flex">
              <FaWallet size={25} className="mr-4" />
              Wallet
            </li>
            <li className="text-xl py-3 flex">
              <MdHelp size={25} className="mr-4" />
              Help
            </li>
            <li className="text-xl py-3 flex">
              <AiFillTag size={25} className="mr-4" />
              Promotions
            </li>
            <li className="text-xl py-3 flex">
              <BsFillSaveFill size={25} className="mr-4" />
              Best One
            </li>
            <li className="text-xl py-3 flex">
              <FaUserFriends size={25} className="mr-4" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
      {/* side menu drawer over */}
    </div>
  );
}

export default Navbar;
