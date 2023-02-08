import React from "react";
import {
  FaCartPlus,
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaStar,
  FaTwitter
} from "react-icons/fa";
import product1 from "../../../assets/products/men01.jpg";

interface ProductDetailsComponentProps {}

export const ProductDetailsComponent: React.FC<ProductDetailsComponentProps> = (
  props: ProductDetailsComponentProps
) => {
  return (
    <div className="container mb-16 grid grid-cols-2 gap-6">
      <div>
        <img src={product1} className="w-full" alt="productOne" />
        <div className="grid grid-cols-5 gap-4 mt-4">
          <img
            src={product1}
            className="w-full cursor-pointer border border-primary"
            alt="productOne"
          />
          <img
            src={product1}
            className="w-full cursor-pointer border"
            alt="productOne"
          />
          <img
            src={product1}
            className="w-full cursor-pointer border"
            alt="productOne"
          />
          <img
            src={product1}
            className="w-full cursor-pointer border"
            alt="productOne"
          />
          <img
            src={product1}
            className="w-full cursor-pointer border"
            alt="productOne"
          />
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-medium uppercase mb-2">Mens Jacket</h2>
        <div className="flex items-center mb-4">
          <div className="flex gap-1 text-sm text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="text-xs text-gray-500 ml-3">(120 Reviews)</div>
        </div>
        <div className="space-y-2">
          <p className="text-gray-800 font-semibold space-x-2">
            <span>Availability :</span>
            <span className="text-green-600">In Stock</span>
          </p>
          <p className="space-x-2">
            <span className="text-gray-800 font-semibold ">Brand :</span>
            <span className="text-gray-600">Estacy</span>
          </p>
          <p className="space-x-2">
            <span className="text-gray-800 font-semibold ">Category :</span>
            <span className="text-gray-600">Men</span>
          </p>
          <p className="space-x-2">
            <span className="text-gray-800 font-semibold ">SKU :</span>
            <span className="text-gray-600">adggkk22</span>
          </p>
        </div>
        <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
          <p className="text-2xl text-primary font-semibold">100</p>
          <p className="text-base text-gray-400 line-through">150</p>
        </div>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          aliquam!
        </p>
        <div className="pt-4">
          <h3 className="text-sm text-gray-800 uppercase mb-1">Size</h3>
          <div className="flex items-center gap-2">
            <div className="size-selector">
              <input type="radio" name="size" className="hidden" id="small" />
              <label
                htmlFor="small"
                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                S
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" className="hidden" id="medium" />
              <label
                htmlFor="medium"
                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                M
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" className="hidden" id="large" />
              <label
                htmlFor="large"
                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                L
              </label>
            </div>
            <div className="size-selector">
              <input
                type="radio"
                name="size"
                className="hidden"
                id="extra-large"
              />
              <label
                htmlFor="extra-large"
                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >
                XL
              </label>
            </div>
          </div>
        </div>
        <div className="pt-4">
          <h3 className="text-sm text-gray-800 uppercase mb-1">Color</h3>
          <div className="flex items-center gap-2">
            <div className="color-selector">
              <input
                type="radio"
                name="color"
                className="hidden"
                id="primary"
              />
              <label
                htmlFor="primary"
                className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block bg-primary"
              ></label>
            </div>
            <div className="color-selector">
              <input type="radio" name="color" className="hidden" id="white" />
              <label
                htmlFor="white"
                className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block bg-white"
              ></label>
            </div>
            <div className="color-selector">
              <input type="radio" name="color" className="hidden" id="black" />
              <label
                htmlFor="black"
                className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block bg-black"
              ></label>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
          <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
              -
            </div>
            <div className="h-8 w-8 text-base flex items-center justify-center">
              1
            </div>
            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
              +
            </div>
          </div>
        </div>
        <div className="flex gap-3 border-b border-gray-200 pb-5 mt-6">
          <a
            href="/"
            className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
          >
            <FaCartPlus />
            Add To Cart
          </a>
          <a
            href="/"
            className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"
          >
            <FaHeart />
            Wish List
          </a>
        </div>
        <div className="flex gap-3 mt-4">
          <a
            href="/"
            className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
          >
            <FaFacebook />
          </a>
          <a
            href="/"
            className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
          >
            <FaTwitter />
          </a>
          <a
            href="/"
            className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};
