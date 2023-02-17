import React from "react";
import { AccountSidebarComponent } from "./account-sidebar.component";

interface ManageAddressComponentProps {}

export const ManageAddressComponent: React.FC<ManageAddressComponentProps> = (
  props: ManageAddressComponentProps
) => {
  return (
    <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
      <div className="col-span-3">
        <AccountSidebarComponent />
      </div>
      <div className="col-span-9 shadow rounded px-6 pt-5 pb-7">
        <h4 className="text-lg font-medium capitalize mb-4">Manage Address</h4>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="" className="text-gray-600 mb-2 block">
                Full Name
              </label>
              <input
                type="text"
                className="input-box"
                placeholder="enter full name"
              />
            </div>
            <div>
              <label htmlFor="" className="text-gray-600 mb-2 block">
                Phone Number
              </label>
              <input
                type="text"
                className="input-box"
                placeholder="enter phone number"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="" className="text-gray-600 mb-2 block">
                Country
              </label>
              <select
                name=""
                id=""
                className="w-full text-gray-600 border border-gray-300 focus:ring-0"
              >
                <option value="">Bangladesh</option>
                <option value="">India</option>
                <option value="">USA</option>
              </select>
            </div>
            <div>
              <label htmlFor="" className="text-gray-600 mb-2 block">
                Region
              </label>
              <select
                name=""
                id=""
                className="w-full text-gray-600 border border-gray-300 focus:ring-0"
              >
                <option value="">Dhaka</option>
                <option value="">Chittagong</option>
                <option value="">Rangpur</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="" className="text-gray-600 mb-2 block">
                City
              </label>
              <select
                name=""
                id=""
                className="w-full text-gray-600 border border-gray-300 focus:ring-0"
              >
                <option value="">Dhaka North</option>
                <option value="">Dhaka South</option>
                <option value="">Kurigram</option>
              </select>
            </div>
            <div>
              <label htmlFor="" className="text-gray-600 mb-2 block">
                Area
              </label>
              <select
                name=""
                id=""
                className="w-full border text-gray-600 border-gray-300 focus:ring-0"
              >
                <option value="">Mirpur 10</option>
                <option value="">Mirpur 12</option>
                <option value="">Fulbari</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="" className="text-gray-600 mb-2 block">
                Address
              </label>
              <input
                type="text"
                className="input-box"
                placeholder="Paris Road"
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
