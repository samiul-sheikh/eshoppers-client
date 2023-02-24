import React from "react";
import product1 from "../../../assets/products/men01.jpg";
import { AccountSidebarComponent } from "./account-sidebar.component";

interface OrderHistoryComponentProps {}

export const OrderHistoryComponent: React.FC<OrderHistoryComponentProps> = (
  props: OrderHistoryComponentProps
) => {
  return (
    <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
      <div className="col-span-3">
        <AccountSidebarComponent />
      </div>
      <div className="col-span-9 space-y-4 mt-6 lg:mt-0">
        <div className="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
          <div className="w-32 flex-shrink-0">
            <img src={product1} className="w-full" alt="product1" />
          </div>
          <div className="md:w-1/3 w-full">
            <h2 className="text-gray-800 mb-3 xl:text-xl textl-lg font-medium uppercase">
              MENS JACKET
            </h2>
            <p className="text-primary font-semibold">$300.00</p>
            <p className="text-gray-500">Size: M</p>
          </div>
          <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300">
            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
              -
            </div>
            <div className="h-8 w-10 flex items-center justify-center">4</div>
            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
              +
            </div>
          </div>
          <div className="ml-auto md:ml-0">
            <p className="text-primary text-lg font-semibold">$1200.00</p>
          </div>
          <div className="text-gray-600 hover:text-primary cursor-pointer">
            <i className="fas fa-trash"></i>
          </div>
        </div>
        <div className="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
          <div className="w-32 flex-shrink-0">
            <img src={product1} className="w-full" alt="product1" />
          </div>
          <div className="md:w-1/3 w-full">
            <h2 className="text-gray-800 mb-3 xl:text-xl textl-lg font-medium uppercase">
              MENS JACKET
            </h2>
            <p className="text-primary font-semibold">$300.00</p>
            <p className="text-gray-500">Size: M</p>
          </div>

          <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300">
            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
              -
            </div>
            <div className="h-8 w-10 flex items-center justify-center">4</div>
            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
              +
            </div>
          </div>
          <div className="ml-auto md:ml-0">
            <p className="text-primary text-lg font-semibold">$1200.00</p>
          </div>
          <div className="text-gray-600 hover:text-primary cursor-pointer">
            <i className="fas fa-trash"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
