import React from "react";
import brandlogo from "../../../assets/logo/PayloadIT.png";

import { FaCartPlus, FaHeart, FaSearchengin, FaUser } from "react-icons/fa";

export const TopbarComponent: React.FC = () => {
  return (
    <header className="py-4 shadow-sm bg-blue-100 lg:bg-white">
      <div className="container flex items-center justify-between">
        <a href="/">
          <img src={brandlogo} className="w-12" alt="" />
        </a>
        <div className="w-full xl:max-w-xl lg:max-w-lg lg:flex relative hidden">
          <span className="absolute left-4 top-3 text-lg text-gray-400">
            <FaSearchengin />
          </span>
          <input
            type="text"
            className="pl-12 w-full border border-r-0 border-primary py-3 px-3 rounded-l-md focus:ring-primary focus:border-primary"
            placeholder="Search"
          />
          <button className="bg-primary border border-primary text-white px-8 rounder-r-md hover:bg-transparent hover:text-primary transition">
            Search
          </button>
        </div>

        <div className="space-x-4 flex items-center">
          <a
            href="/wishlist"
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <span className="absolute right-1 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                5
              </span>
              <FaHeart />
            </div>
            <div className="text-xs leading-3">Wishlist</div>
          </a>
          <a
            href="/cart"
            className="lg:block text-center text-gray-700 hover:text-primary transition relative"
          >
            <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              2
            </span>
            <div className="text-2xl">
              <FaCartPlus />
            </div>
            <div className="text-xs leading-3">Cart</div>
          </a>
          <a
            href="/account"
            className="block text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <FaUser />
            </div>
            <div className="text-xs leading-3">Account</div>
          </a>
        </div>
      </div>
    </header>
  );
};
