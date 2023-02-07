import React from "react";

interface ShopPriceComponentProps {}

export const ShopPriceComponent: React.FC<ShopPriceComponentProps> = (
  props: ShopPriceComponentProps
) => {
  return (
    <div className="pt-4">
      <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
        Price
      </h3>
      <div className="mt-4 flex items-center">
        <input
          type="text"
          className="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 text-gray-600 text-sm shadow-sm rounded"
          placeholder="Min"
        />
        <span className="mx-3 text-gray-500">-</span>
        <input
          type="text"
          className="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 text-gray-600 text-sm shadow-sm rounded"
          placeholder="Max"
        />
      </div>
    </div>
  );
};
