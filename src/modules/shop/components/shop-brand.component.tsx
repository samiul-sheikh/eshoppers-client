import React from "react";

interface ShopBrandComponentProps {}

export const ShopBrandComponent: React.FC<ShopBrandComponentProps> = (
  props: ShopBrandComponentProps
) => {
  return (
    <div className="pt-4">
      <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
        Brands
      </h3>
      <div className="space-y-2">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="cat-1"
            className="text-primary focus:ring-0 rounded-sm cursor-pointer"
          />
          <label className="text-gray-600 ml-3 cursor-pointer">Yellow</label>
          <div className="ml-auto text-gray-600 text-sm">(20)</div>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="cat-2"
            className="text-primary focus:ring-0 rounded-sm cursor-pointer"
          />
          <label className="text-gray-600 ml-3 cursor-pointer">Estacy</label>
          <div className="ml-auto text-gray-600 text-sm">(30)</div>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="cat-3"
            className="text-primary focus:ring-0 rounded-sm cursor-pointer"
          />
          <label className="text-gray-600 ml-3 cursor-pointer">Sara</label>
          <div className="ml-auto text-gray-600 text-sm">(50)</div>
        </div>
      </div>
    </div>
  );
};
