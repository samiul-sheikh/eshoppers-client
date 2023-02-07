import React from "react";

interface ShopSizeComponentProps {}

export const ShopSizeComponent: React.FC<ShopSizeComponentProps> = (
  props: ShopSizeComponentProps
) => {
  return (
    <div className="pt-4">
      <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Size</h3>
      <div className="flex items-center gap-2">
        <div className="size-selector">
          <input type="radio" name="size" className="hidden" id="size-s" />
          <label
            htmlFor="size-s"
            className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
          >
            S
          </label>
        </div>
        <div className="size-selector">
          <input type="radio" name="size" className="hidden" id="size-m" />
          <label
            htmlFor="size-m"
            className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
          >
            M
          </label>
        </div>
        <div className="size-selector">
          <input type="radio" name="size" className="hidden" id="size-l" />
          <label
            htmlFor="size-l"
            className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
          >
            L
          </label>
        </div>
        <div className="size-selector">
          <input type="radio" name="size" className="hidden" id="size-xl" />
          <label
            htmlFor="size-xl"
            className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
          >
            XL
          </label>
        </div>
      </div>
    </div>
  );
};
