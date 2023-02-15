import React from "react";
import { FaHeart, FaPowerOff } from "react-icons/fa";
import { ManageAccountComponent } from "./manage-account.component";
import { OrderHistoryComponent } from "./order-history.component";
import { PaymentMethodComponent } from "./payment-methods.component";
import { UserNameComponent } from "./user-name.component";

interface ProfileInformationComponentProps {}

export const ProfileInformationComponent: React.FC<
  ProfileInformationComponentProps
> = (props: ProfileInformationComponentProps) => {
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
              href="/wishlist"
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
              href="/login"
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
      <div className="col-span-9 shadow rounded px-6 pt-5 pb-7">
        <h4 className="text-lg font-medium capitalize mb-4">
          Profile Information
        </h4>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="" className="text-gray-600 mb-2 block">
                First Name
              </label>
              <input
                type="text"
                className="input-box"
                placeholder="Enter first name"
              />
            </div>
            <div>
              <label htmlFor="" className="text-gray-600 mb-2 block">
                Last Name
              </label>
              <input
                type="text"
                className="input-box"
                placeholder="Enter last name"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="" className="text-gray-600 mb-2 block">
                Birthday
              </label>
              <input type="date" className="input-box" />
            </div>
            <div>
              <label htmlFor="" className="text-gray-600 mb-2 block">
                Gender
              </label>
              <select
                name=""
                id=""
                className=" border border-gray-300 focus:ring-0"
              >
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="" className="text-gray-600 mb-2 block">
                Email Address
              </label>
              <input
                type="email"
                className="input-box"
                placeholder="Enter email address"
              />
            </div>
            <div>
              <label htmlFor="" className="text-gray-600 mb-2 block">
                Phone Number
              </label>
              <input
                type="number"
                className="input-box"
                placeholder="Enter phone number"
              />
            </div>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="block px-4 py-3 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
