import React from "react";

interface ShopColorComponentProps {}

export const ShopColorComponent: React.FC<ShopColorComponentProps> = (
  props: ShopColorComponentProps
) => {
  return (
    <div className="pt-4">
      <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
        Color
      </h3>
      <div className="flex items-center gap-2">
        <div className="color-selector">
          <input
            type="radio"
            name="color"
            className="hidden"
            id="color-primary"
          />
          <label
            htmlFor="color-primary"
            className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block bg-primary"
          ></label>
        </div>
        <div className="color-selector">
          <input
            type="radio"
            name="color"
            className="hidden"
            id="color-white"
          />
          <label
            htmlFor="color-white"
            className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block bg-white"
          ></label>
        </div>
        <div className="color-selector">
          <input
            type="radio"
            name="color"
            className="hidden"
            id="color-black"
          />
          <label
            htmlFor="color-black"
            className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block bg-black"
          ></label>
        </div>
      </div>
    </div>
  );
};
