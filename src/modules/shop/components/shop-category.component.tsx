import React from "react";
import { FaTimes } from "react-icons/fa";

interface ShopCategoryComponentProps {}

export const ShopCategoryComponent: React.FC<ShopCategoryComponentProps> = (
  props: ShopCategoryComponentProps
) => {
  return (
    <div className="relative">
      <div className="lg:hidden text-gray-400 hover:text-primary text-lg absolute right-0 top-0 cursor-pointer">
        <FaTimes />
      </div>
      <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
        Categories
      </h3>
      <div className="space-y-2">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="cat-1"
            className="text-primary focus:ring-0 rounded-sm cursor-pointer"
          />
          <label htmlFor="cat-1" className="text-gray-600 ml-3 cursor-pointer">
            Men
          </label>
          <div className="ml-auto text-gray-600 text-sm">(30)</div>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="cat-2"
            className="text-primary focus:ring-0 rounded-sm cursor-pointer"
          />
          <label htmlFor="cat-2" className="text-gray-600 ml-3 cursor-pointer">
            Women
          </label>
          <div className="ml-auto text-gray-600 text-sm">(20)</div>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="cat-3"
            className="text-primary focus:ring-0 rounded-sm cursor-pointer"
          />
          <label htmlFor="cat-3" className="text-gray-600 ml-3 cursor-pointer">
            Baby
          </label>
          <div className="ml-auto text-gray-600 text-sm">(10)</div>
        </div>
      </div>
    </div>
  );
};
