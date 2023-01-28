import React from "react";
import { FaBars } from "react-icons/fa";

interface NavbarComponentProps {}

export const NavbarComponent: React.FC<NavbarComponentProps> = (
  props: NavbarComponentProps
) => {
  return (
    <div>
      <div className="nav bg-gray-800">
        <div className="container flex">
          <div className="px-8 py-4 bg-primari flex items-center cursor-pointer">
            <span className="text-white">
              <FaBars />
            </span>
            <span className="capitalize ml-2 text-white">All Categories</span>
          </div>
          <div className="flex items-center justify-between flex-grow pl-12">
            <div className="flex items-center space-x-4 capitalize">
              <a
                href="/#"
                className="text-gray-200 hover:text-white transition"
              >
                Home
              </a>
              <a
                href="/#"
                className="text-gray-200 hover:text-white transition"
              >
                Shop
              </a>
              <a
                href="/#"
                className="text-gray-200 hover:text-white transition"
              >
                About us
              </a>
              <a
                href="/#"
                className="text-gray-200 hover:text-white transition"
              >
                Contact us
              </a>
            </div>
            <a href="/#" className="text-gray-200 hover:text-white transition">
              Login/Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
