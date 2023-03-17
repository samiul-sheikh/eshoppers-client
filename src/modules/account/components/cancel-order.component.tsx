import React from "react";
import product1 from "../../../assets/products/men01.jpg";
import { AccountSidebarComponent } from "./account-sidebar.component";

interface CancelOrderComponentProps {}

export const CancelOrderComponent: React.FC<CancelOrderComponentProps> = (
  props: CancelOrderComponentProps
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
            <h2 className="text-gray-600 font-semibold">Mens Jacket</h2>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Order Number</p>
            <p className="text-gray-500">1234567</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Purchased</p>
            <p className="text-gray-500">14 Nov 22</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Qut</p>
            <p className="text-gray-500">x3</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Total</p>
            <p className="text-gray-500">$300</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Status</p>
            <p className="text-red-500">Cancelled</p>
          </div>
          <a
            href="/order-details"
            className="px-6 py-2 text-center text-sm text-primary
            bg-white border border-primary rounded hover:bg-primary hover:text-white transition font-roboto font-medium"
          >
            View Order
          </a>
        </div>
        <div className="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
          <div className="w-10 flex-shrink-0">
            <img src={product1} className="w-full" alt="wishlistProduct1" />
          </div>
          <div>
            <h2 className="text-gray-600 font-semibold">Mens Jacket</h2>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Order Number</p>
            <p className="text-gray-500">1234567</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Purchased</p>
            <p className="text-gray-500">14 Nov 22</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Qut</p>
            <p className="text-gray-500">x3</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Total</p>
            <p className="text-gray-500">$300</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Status</p>
            <p className="text-red-500">Cancelled</p>
          </div>
          <a
            href="/order-details"
            className="px-6 py-2 text-center text-sm text-primary
            bg-white border border-primary rounded hover:bg-primary hover:text-white transition font-roboto font-medium"
          >
            View Order
          </a>
        </div>
      </div>
    </div>
  );
};
