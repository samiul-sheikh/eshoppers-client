import React from "react";
import {
  FaBars,
  FaRegUser,
  FaRegUserCircle,
  FaShopify,
  FaUser
} from "react-icons/fa";

interface NavbarComponentProps {}

export const NavbarComponent: React.FC<NavbarComponentProps> = (
  props: NavbarComponentProps
) => {
  return (
    <div>
      <div className="nav bg-gray-800">
        <div className="container flex">
          <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
            <span className="text-white">
              <FaBars />
            </span>
            <span className="capitalize ml-2 text-white">All Categories</span>
            <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
              <a
                href="/"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <FaUser />
                {/* <img src={logo1} className="w-5 h-5 object-contain" /> */}
                <span className="ml-6 text-gray-600 text-sm">Men</span>
              </a>
              <a
                href="/"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <FaRegUser />
                <span className="ml-6 text-gray-600 text-sm">Women</span>
              </a>
              <a
                href="/"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <FaRegUserCircle />
                <span className="ml-6 text-gray-600 text-sm">Baby</span>
              </a>
              <a
                href="/"
                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
              >
                <FaShopify />
                <span className="ml-6 text-gray-600 text-sm">Others</span>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-between flex-grow pl-12">
            <div className="flex items-center space-x-4 capitalize">
              <a href="/" className="text-gray-200 hover:text-white transition">
                Home
              </a>
              <a href="/" className="text-gray-200 hover:text-white transition">
                Shop
              </a>
              <a href="/" className="text-gray-200 hover:text-white transition">
                About us
              </a>
              <a href="/" className="text-gray-200 hover:text-white transition">
                Contact us
              </a>
            </div>
            <a href="/" className="text-gray-200 hover:text-white transition">
              Login/Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
