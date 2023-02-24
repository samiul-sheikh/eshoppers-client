import React from "react";
import { FaHeart, FaSearch, FaStar } from "react-icons/fa";
import product1 from "../../../assets/products/men01.jpg";

interface RecomendedProductsComponentProps {}

export const RecomendedProductsComponent: React.FC<
  RecomendedProductsComponentProps
> = (props: RecomendedProductsComponentProps) => {
  return (
    <div className="container pb-16">
      <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">
        Recommend For You
      </h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded overflow-hidden group">
          <div className="relative">
            <img src={product1} alt="product-1" className="w-full" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
              <a
                href="/product-details"
                className="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              >
                <FaSearch />
              </a>
              <a
                href="/wishlist"
                className="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              >
                <FaHeart />
              </a>
            </div>
          </div>
          <div className="pt-4 pb-3 px-4">
            <a href="/product-details">
              <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                Mens Jacket
              </h4>
            </a>
            <div className="flex items-baseline mb-1 space-x-2 font-roboto">
              <p className="text-xl text-primary font-semibold">100</p>
              <p className="text-sm text-gray-400 line-through">150</p>
            </div>
            <div className="flex items-center">
              <div className="flex gap-1 text-sm text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="text-xs text-gray-500 ml-3">(500)</div>
            </div>
          </div>
          <a
            href="/cart"
            className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
          >
            Add to cart
          </a>
        </div>
        <div className="bg-white shadow rounded overflow-hidden group">
          <div className="relative">
            <img src={product1} alt="product-1" className="w-full" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
              <a
                href="/product-details"
                className="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              >
                <FaSearch />
              </a>
              <a
                href="/wishlist"
                className="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              >
                <FaHeart />
              </a>
            </div>
          </div>
          <div className="pt-4 pb-3 px-4">
            <a href="/product-details">
              <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                Mens Jacket
              </h4>
            </a>
            <div className="flex items-baseline mb-1 space-x-2 font-roboto">
              <p className="text-xl text-primary font-semibold">100</p>
              <p className="text-sm text-gray-400 line-through">150</p>
            </div>
            <div className="flex items-center">
              <div className="flex gap-1 text-sm text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="text-xs text-gray-500 ml-3">(500)</div>
            </div>
          </div>
          <a
            href="/cart"
            className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
          >
            Add to cart
          </a>
        </div>
        <div className="bg-white shadow rounded overflow-hidden group">
          <div className="relative">
            <img src={product1} alt="product-1" className="w-full" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
              <a
                href="/product-details"
                className="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              >
                <FaSearch />
              </a>
              <a
                href="/wishlist"
                className="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              >
                <FaHeart />
              </a>
            </div>
          </div>
          <div className="pt-4 pb-3 px-4">
            <a href="/product-details">
              <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                Mens Jacket
              </h4>
            </a>
            <div className="flex items-baseline mb-1 space-x-2 font-roboto">
              <p className="text-xl text-primary font-semibold">100</p>
              <p className="text-sm text-gray-400 line-through">150</p>
            </div>
            <div className="flex items-center">
              <div className="flex gap-1 text-sm text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="text-xs text-gray-500 ml-3">(500)</div>
            </div>
          </div>
          <a
            href="/cart"
            className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
          >
            Add to cart
          </a>
        </div>
        <div className="bg-white shadow rounded overflow-hidden group">
          <div className="relative">
            <img src={product1} alt="product-1" className="w-full" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
              <a
                href="/product-details"
                className="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              >
                <FaSearch />
              </a>
              <a
                href="/wishlist"
                className="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              >
                <FaHeart />
              </a>
            </div>
          </div>
          <div className="pt-4 pb-3 px-4">
            <a href="/product-details">
              <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                Mens Jacket
              </h4>
            </a>
            <div className="flex items-baseline mb-1 space-x-2 font-roboto">
              <p className="text-xl text-primary font-semibold">100</p>
              <p className="text-sm text-gray-400 line-through">150</p>
            </div>
            <div className="flex items-center">
              <div className="flex gap-1 text-sm text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="text-xs text-gray-500 ml-3">(500)</div>
            </div>
          </div>
          <a
            href="/cart"
            className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};
