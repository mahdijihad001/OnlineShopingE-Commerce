import { NavLink } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaCartFlatbed } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="pt-3 pb-3 bg-slate-100 shadow-md sm:px-2 md:px-[20px]">
      <div className="container flex items-center justify-between">
        <div className="logo flex items-center gap-2">
        <FaChartBar className="text-[18px] sm:text-[30px]" />
          <h1 className="font-bold text-xl text-black sm:text-[30px]">Exclusive</h1>
        </div>
        <nav className="flex font-normal lg:flex gap-5 sm:hidden md:hidden">
          <NavLink>Home</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Contact</NavLink>
          <NavLink>Sign Up</NavLink>
        </nav>
        <div className="flex items-center gap-[20px]">
          <div className="flex items-center px-3 py-2 bg-white rounded-[10px]">
            <input type="search" placeholder="What are you looking?" className="border-none outline-none" />
            <div className="text-[25px]">
            <IoSearchOutline />
            </div>
          </div>
          <div className="lg:flex items-center justify-between gap-[8px] text-[20px] sm:hidden">
            <FaHeart className="hover:text-[#DB4444] duration-500" />
            <FaCartFlatbed className="hover:text-[#DB4444] duration-500" />
            <FaUser className="hover:text-[#DB4444] duration-500" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
