import React from "react";
import { AccountSidebarComponent } from "./account-sidebar.component";
import product1 from "../../../assets/products/men01.jpg";

interface ReturnOrderDetailsComponentProps {}

export const ReturnOrderDetailsComponent: React.FC<
  ReturnOrderDetailsComponentProps
> = (props: ReturnOrderDetailsComponentProps) => {
  return (
    <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
      <div className="col-span-3">
        <AccountSidebarComponent />
      </div>
      <div className="col-span-9 shadow rounded px-6 pt-5 pb-7 mt-6 lg:mt-0">
        <h4 className="text-lg text-gray-600 font-medium capitalize mb-4">
          Return Order Details
        </h4>
        <div className="flex items-center md:justify-between gap-4 md:gap-6 flex-wrap md:flex-nowrap">
          <div className="w-10 flex-shrink-0">
            <img src={product1} className="w-full" alt="wishlistProduct1" />
          </div>
          <div>
            <h2 className="text-gray-600 font-semibold">Mens Jacket</h2>
            <p className="text-gray-500 text-xs">No warrenty available</p>
          </div>
          <div>
            <h2 className="text-gray-600 font-semibold">Sold By</h2>
            <p className="text-primary">Eshoppers</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Order Number</p>
            <p className="text-gray-500">123456789</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">$100</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Qut: 4</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 py-3 gap-4">
          <div>
            <label htmlFor="" className="text-gray-600 mb-2 block">
              Select a Reason
            </label>
            <select
              name=""
              id=""
              className="w-full text-gray-600 border border-gray-300 focus:ring-0"
            >
              <option value="">Select a reason</option>
              <option value="">Wrong size</option>
              <option value="">Not as advertised</option>
              <option value="">Missing accesories</option>
              <option value="">Deactive</option>
              <option value="">Damaged</option>
            </select>
          </div>
        </div>
        <div>
          <label className="text-gray-600 mb-2 block">Payment Method</label>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="refund"
              className="text-primary focus:ring-0 rounded-sm cursor-pointer"
            />
            <div>
              <label
                htmlFor="refund"
                className="text-gray-600 ml-3 cursor-pointer"
              >
                Refund by credit card
              </label>
              <p className="text-gray-600 text-xs ml-3">
                Money will be return your credit card that you used for
                purchased
              </p>
            </div>
          </div>
        </div>
        <div className="py-3">
          <label className="text-gray-600 mb-2 block">
            Select Shipment Option
          </label>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="courier"
              className="text-primary focus:ring-0 rounded-sm cursor-pointer"
            />
            <label
              htmlFor="courier"
              className="text-gray-600 ml-3 cursor-pointer"
            >
              Courier pick up
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="dropoff"
              className="text-primary focus:ring-0 rounded-sm cursor-pointer"
            />
            <label
              htmlFor="dropoff"
              className="text-gray-600 ml-3 cursor-pointer"
            >
              Drop off
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="" className="text-gray-600 mb-2 block">
            Additional Information (optional)
          </label>
          <input
            type="text"
            className="input-box"
            placeholder="Example: wrong size"
          />
        </div>
        <div className="flex items-center my-3">
          <input
            type="checkbox"
            id="courier"
            className="text-primary focus:ring-0 rounded-sm cursor-pointer"
          />
          <label
            htmlFor="courier"
            className="text-gray-600 ml-3 cursor-pointer"
          >
            I have Read and accepted the{" "}
            <span className="text-primary">
              <a href="/return-policy">Return Policy</a>
            </span>{" "}
            of Eshoppers
          </label>
        </div>
        <div className="">
          <button
            type="submit"
            className="block px-4 py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
