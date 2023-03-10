import React from "react";
import { AccountSidebarComponent } from "./account-sidebar.component";
import product1 from "../../../assets/products/men01.jpg";

interface ReturnOrderComponentProps {}

export const ReturnOrderComponent: React.FC<ReturnOrderComponentProps> = (
  props: ReturnOrderComponentProps
) => {
  return (
    <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
      <div className="col-span-3">
        <AccountSidebarComponent />
      </div>
      <div className="col-span-9 space-y-4 mt-6 lg:mt-0">
        <div className="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
          <div className="w-10 flex-shrink-0">
            <img src={product1} className="w-full" alt="wishlistProduct1" />
          </div>
          <div>
            <h2 className="text-gray-600 text-lg xl:text-xl font-semibold uppercase">
              Mens Jacket
            </h2>
            <p className="text-gray-500 text-lg font-semibold">$300</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Order Number</p>
            <p className="text-gray-500">123456789</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Return status</p>
            <p className="text-green-500">Successful</p>
          </div>
          <a
            href="/order-details"
            className="ml-auto md:ml-0 block px-6 py-2 text-center text-sm text-primary border border-primary rounded 
          hover:bg-primary hover:text-white transition font-roboto font-medium"
          >
            View Order
          </a>
        </div>
        <div className="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
          <div className="w-10 flex-shrink-0">
            <img src={product1} className="w-full" alt="wishlistProduct1" />
          </div>
          <div>
            <h2 className="text-gray-600 text-lg xl:text-xl font-semibold uppercase">
              Mens Jacket
            </h2>
            <p className="text-gray-500 text-lg font-semibold">$300</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Order Number</p>
            <p className="text-gray-500">123456789</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Return status</p>
            <p className="text-yellow-500">Processing</p>
          </div>
          <a
            href="/order-details"
            className="ml-auto md:ml-0 block px-6 py-2 text-center text-sm text-primary border border-primary rounded 
          hover:bg-primary hover:text-white transition font-roboto font-medium"
          >
            View Order
          </a>
        </div>
      </div>
    </div>
  );
};
