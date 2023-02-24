import React from "react";
import { FaTrash } from "react-icons/fa";
import product1 from "../../../assets/products/men01.jpg";
import { AccountSidebarComponent } from "./account-sidebar.component";

interface WishlistComponentProps {}

export const WishlistComponent: React.FC<WishlistComponentProps> = (
  props: WishlistComponentProps
) => {
  return (
    <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
      <div className="col-span-3">
        <AccountSidebarComponent />
      </div>
      <div className="col-span-9 space-y-4 mt-6 lg:mt-0">
        <div className="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
          <div className="w-28 flex-shrink-0">
            <img src={product1} className="w-full" alt="wishlistProduct1" />
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-gray-800 mb-1 text-lg xl:text-xl font-medium uppercase">
              Mens Jacket
            </h2>
            <p className="text-gray-500 text-sm">
              Availability: <span className="text-green-600">In Stock</span>
            </p>
          </div>
          <div className="text-primary text-lg font-semibold">$300</div>
          <a
            href="/cart"
            className="ml-auto md:ml-0 block px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
          >
            Add to cart
          </a>
          <div className="text-gray-600 cursor-pointer hover:text-primary">
            <FaTrash />
          </div>
        </div>
        <div className="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
          <div className="w-28 flex-shrink-0">
            <img src={product1} className="w-full" alt="wishlistProduct1" />
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-gray-800 mb-1 text-lg xl:text-xl font-medium uppercase">
              Mens Jacket
            </h2>
            <p className="text-gray-500 text-sm">
              Availability: <span className="text-red-600">Out of Stock</span>
            </p>
          </div>
          <div className="text-primary text-lg font-semibold">$300</div>
          <a
            href="/"
            className="ml-auto md:ml-0 block px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded 
            uppercase font-roboto font-medium cursor-not-allowed bg-opacity-80"
          >
            Add to cart
          </a>
          <div className="text-gray-600 cursor-pointer hover:text-primary">
            <FaTrash />
          </div>
        </div>
      </div>
    </div>
  );
};
