import React from "react";
import eshoppers from "../../../assets/logo/eshoppers.png";
import { FaCartPlus, FaHeart, FaSearchengin, FaUser } from "react-icons/fa";

export const TopbarComponent: React.FC = () => {
  return (
    <header className="py-4 shadow-lg bg-white">
      <div className="container flex items-center justify-between">
        <a href="/">
          <img src={eshoppers} className="w-12" alt="" />
        </a>

        <div className="w-full max-w-xl relative flex">
          <span className="absolute left-4 top-3 text-lg text-gray-400">
            <FaSearchengin />
          </span>
          <input
            type="text"
            className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-1-md focus:outline-none"
            placeholder="Search"
          />
          <button className="bg-primary border border-primary text-white px-8 rounder-r-md hover:bg-transparent hover:text-primary transition">
            Search
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="/wishlist"
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <FaHeart />
            </div>
            <div className="text-xs leading-3">Wishlist</div>
            <span className="absolute right-1 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              5
            </span>
          </a>
          <a
            href="/cart"
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <FaCartPlus />
            </div>
            <div className="text-xs leading-3">Cart</div>
            <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              2
            </span>
          </a>
          <a
            href="/account"
            className="text-center text-gray-700 hover:text-primary transition relative"
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
