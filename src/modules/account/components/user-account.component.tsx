import React from "react";
import { FaHeart, FaPowerOff } from "react-icons/fa";
import { ManageAccountComponent } from "./manage-account.component";
import { OrderHistoryComponent } from "./order-history.component";
import { PaymentMethodComponent } from "./payment-methods.component";
import { UserNameComponent } from "./user-name.component";

interface UserAccountComponentProps {}

export const UserAccountComponent: React.FC<UserAccountComponentProps> = (
  props: UserAccountComponentProps
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
      <div className="col-span-9 grid grid-cols-3 gap-4">
        <div className="shadow rounded bg-white px-4 pt-6 pb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-gray-800 text-lg">
              Personal profile
            </h3>
            <a href="/" className="text-primary">
              Edit
            </a>
          </div>
          <div className="space-y-1">
            <h4 className="text-gray-700 font-medium">Samiul Sheikh</h4>
            <p className="text-gray-800">samiul@gmail.com</p>
            <p className="text-gray-800">01784097404</p>
          </div>
        </div>
        <div className="shadow rounded bg-white px-4 pt-6 pb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-gray-800 text-lg">
              Shipping Address
            </h3>
            <a href="/" className="text-primary">
              Edit
            </a>
          </div>
          <div className="space-y-1">
            <h4 className="text-gray-700 font-medium">Sami</h4>
            <p className="text-gray-800">
              House: 14 Road: 25, Block: D, Mirpur-10, Dhaka, Bangladesh
            </p>
            <p className="text-gray-800">01323401006</p>
          </div>
        </div>
        <div className="shadow rounded bg-white px-4 pt-6 pb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-gray-800 text-lg">
              Billing Address
            </h3>
            <a href="/" className="text-primary">
              Edit
            </a>
          </div>
          <div className="space-y-1">
            <h4 className="text-gray-700 font-medium">Sami</h4>
            <p className="text-gray-800">
              House: 14 Road: 25, Block: D, Mirpur-10, Dhaka, Bangladesh
            </p>
            <p className="text-gray-800">01323401006</p>
          </div>
        </div>
      </div>
    </div>
  );
};
