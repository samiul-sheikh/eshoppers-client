import React from "react";
import { AccountSidebarComponent } from "./account-sidebar.component";
import product1 from "../../../assets/products/men01.jpg";

interface OrderDetailsComponentProps {}

export const OrderDetailsComponent: React.FC<OrderDetailsComponentProps> = (
  props: OrderDetailsComponentProps
) => {
  return (
    <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
      <div className="col-span-3">
        <AccountSidebarComponent />
      </div>
      <div className="col-span-9 shadow rounded px-6 pt-5 pb-7 mt-6 lg:mt-0">
        <h4 className="text-lg text-gray-600 font-medium capitalize mb-4">
          Order Details
        </h4>
        <div className="flex items-center md:justify-between gap-4 md:gap-6 p-4 flex-wrap md:flex-nowrap">
          <div>
            <h2 className="text-gray-600 font-semibold">Sold By</h2>
            <p className="text-primary">Eshoppers</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Order Number</p>
            <p className="text-gray-500">123456789</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Shipped Date</p>
            <p className="text-gray-500">01.04.2023</p>
          </div>
          <a
            href="/write-edit-review"
            className="ml-auto md:ml-0 block px-6 py-2 text-center text-sm text-primary border border-primary rounded 
          hover:bg-primary hover:text-white transition font-roboto font-medium"
          >
            Write A Review
          </a>
        </div>
        <div className="">
          <ul
            data-te-stepper-init
            className="relative m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out"
          >
            <li
              data-te-stepper-step-ref
              data-te-stepper-step-active
              className="w-[4.5rem] flex-auto"
            >
              <div
                data-te-stepper-head-ref
                className="flex cursor-pointer items-center pl-2 leading-[1.3rem] no-underline after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]"
              >
                <span
                  data-te-stepper-head-icon-ref
                  className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]"
                >
                  1
                </span>
                <span
                  data-te-stepper-head-text-ref
                  className="font-medium text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300"
                >
                  Processing
                </span>
              </div>
              <div
                data-te-stepper-content-ref
                className="absolute w-full p-4 transition-all duration-500 ease-in-out"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </li>
            <li data-te-stepper-step-ref className="w-[4.5rem] flex-auto">
              <div
                data-te-stepper-head-ref
                className="flex cursor-pointer items-center leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]"
              >
                <span
                  data-te-stepper-head-icon-ref
                  className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]"
                >
                  2
                </span>
                <span
                  data-te-stepper-head-text-ref
                  className="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300"
                >
                  Shipped
                </span>
              </div>
              <div
                data-te-stepper-content-ref
                className="absolute left-0 w-full translate-x-[150%] p-4 transition-all duration-500 ease-in-out"
              >
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </div>
            </li>
            <li data-te-stepper-step-ref className="w-[4.5rem] flex-auto">
              <div
                data-te-stepper-head-ref
                className="flex cursor-pointer items-center pr-2 leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]"
              >
                <span
                  data-te-stepper-head-icon-ref
                  className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]"
                >
                  3
                </span>
                <span
                  data-te-stepper-head-text-ref
                  className="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300"
                >
                  Delivered
                </span>
              </div>
              <div
                data-te-stepper-content-ref
                className="absolute left-0 w-full translate-x-[150%] p-4 transition-all duration-500 ease-in-out"
              >
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </div>
            </li>
          </ul>
        </div>
        <div className="flex items-center md:justify-between gap-4 md:gap-6 p-4 flex-wrap md:flex-nowrap">
          <div className="w-10 flex-shrink-0">
            <img src={product1} className="w-full" alt="wishlistProduct1" />
          </div>
          <div>
            <h2 className="text-gray-600 font-semibold">Mens Jacket</h2>
            <p className="text-gray-500 text-xs">No warrenty available</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">$100</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Qut: 4</p>
          </div>
          <div>
            <a href="/my-returns" className="text-primary font-semibold">
              Return
            </a>
            <p className="text-gray-600">Untill 14 Nov 2023</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-6 lg:mt-0">
          <div className="shadow rounded bg-white px-4 pt-6 pb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-600 font-semibold">Shipping Address</h3>
            </div>
            <div className="space-y-1">
              <h4 className="text-gray-600 font-semibold">Samiul Sheikh</h4>
              <p className="text-gray-800">
                House: 14 Road: 25, Block: D, Mirpur-10, Dhaka, Bangladesh
              </p>
              <p className="text-gray-800">01784097404</p>
            </div>
          </div>
          <div className="shadow rounded bg-white px-4 pt-6 pb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-600 font-semibold">Billing Address</h3>
            </div>
            <div className="space-y-1">
              <h4 className="text-gray-600 font-semibold">Payload IT</h4>
              <p className="text-gray-800">
                House: 14 Road: 25, Block: D, Mirpur-10, Dhaka, Bangladesh
              </p>
              <p className="text-gray-800">01784097404</p>
            </div>
          </div>
          <div className="shadow rounded bg-white px-4 pt-6 pb-8">
            <h3 className="text-gray-600 font-semibold">Total Summary</h3>
            <div className="flex justify-between text-gray-800 font-medium pt-3">
              <p>Subtotal</p>
              <p>$400</p>
            </div>
            <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3">
              <p>Shipping Fee</p>
              <p>$20</p>
            </div>
            <div className="flex justify-between text-gray-600 font-semibold py-3">
              <p>Total</p>
              <p>$420</p>
            </div>
            <p className="text-gray-600 text-xs">Paid by Cash on Delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
};
