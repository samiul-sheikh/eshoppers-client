import React from "react";
import { FaList, FaTh } from "react-icons/fa";

interface ShopHeaderComponentProps {}

export const ShopHeaderComponent: React.FC<ShopHeaderComponentProps> = (
  props: ShopHeaderComponentProps
) => {
  return (
    <div className="flex items-center mb-4">
      <select className="w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary">
        <option>Default Sorting</option>
        <option>Price low-high</option>
        <option>Price high-low</option>
        <option>Latest products</option>
      </select>
      <div className="flex gap-2 ml-auto">
        <div className="borer border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer">
          <FaTh />
        </div>
        <div className="borer border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer">
          <FaList />
        </div>
      </div>
    </div>
  );
};
