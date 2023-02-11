import React from "react";
import { FaHeart, FaPowerOff, FaTrash } from "react-icons/fa";
import { ManageAccountComponent } from "./manage-account.component";
import { OrderHistoryComponent } from "./order-history.component";
import { PaymentMethodComponent } from "./payment-methods.component";
import { UserNameComponent } from "./user-name.component";
import product1 from "../../../assets/products/men01.jpg";

interface WishlistComponentProps {}

export const WishlistComponent: React.FC<WishlistComponentProps> = (
  props: WishlistComponentProps
) => {
  return (
    <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
      <div className="col-span-3">
        <UserNameComponent />
        <div className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
          <ManageAccountComponent />
          <OrderHistoryComponent />
          <PaymentMethodComponent />
          <div className="space-y-1 pl-8 pt-4">
            <a
              href="/"
              className="relative hover:text-primary block font-medium capitalize transition"
            >
              <span className="absolute -left-8 top-1 text-base">
                <FaHeart />
              </span>
              my wishlist
            </a>
          </div>
          <div className="space-y-1 pl-8 pt-4">
            <a
              href="/"
              className="relative hover:text-primary block font-medium capitalize transition"
            >
              <span className="absolute -left-8 top-1 text-base">
                <FaPowerOff />
              </span>
              Logout
            </a>
          </div>
        </div>
      </div>
      <div className="col-span-9 space-y-4">
        <div className="flex items-center justify-between gap-6 p-4 border border-gray-200 rounded">
          <div className="w-28 flex-shrink-0">
            <img src={product1} className="w-full" alt="wishlistProduct1" />
          </div>
          <div className="w-1/3">
            <h2 className="text-gray-800 text-xl font-medium uppercase">
              Mens Jacket
            </h2>
            <p className="text-gray-500 text-sm">
              Availability: <span className="text-green-600">In Stock</span>
            </p>
          </div>
          <div className="text-primary text-lg font-semibold">$300</div>
          <a
            href="/"
            className="px-8 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
          >
            Add to cart
          </a>
          <div className="text-gray-600 cursor-pointer hover:text-primary">
            <FaTrash />
          </div>
        </div>
        <div className="flex items-center justify-between gap-6 p-4 border border-gray-200 rounded">
          <div className="w-28 flex-shrink-0">
            <img src={product1} className="w-full" alt="wishlistProduct1" />
          </div>
          <div className="w-1/3">
            <h2 className="text-gray-800 text-xl font-medium uppercase">
              Mens Jacket
            </h2>
            <p className="text-gray-500 text-sm">
              Availability: <span className="text-red-600">Out of Stock</span>
            </p>
          </div>
          <div className="text-primary text-lg font-semibold">$300</div>
          <a
            href="/"
            className="cursor-not-allowed px-8 py-2 text-center text-sm text-white bg-red-500 border border-red-400 rounded transition uppercase font-roboto font-medium"
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
