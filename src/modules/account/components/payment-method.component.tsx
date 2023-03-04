import React from "react";
import express from "../../../assets/logo/american-express.png";
import visa from "../../../assets/logo/visa.png";
import { AccountSidebarComponent } from "./account-sidebar.component";

interface PaymentMethodComponentProps {}

export const PaymentMethodComponent: React.FC<PaymentMethodComponentProps> = (
  props: PaymentMethodComponentProps
) => {
  return (
    <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
      <div className="col-span-3">
        <AccountSidebarComponent />
      </div>
      <div className="col-span-9 space-y-4 mt-6 lg:mt-0">
        <div className="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
          <div className="flex-shrink-0">
            <img src={express} className="w-full" alt="express" />
          </div>
          <div className="md:w-full">
            <h5 className="text-gray-600 font-semibold">Method</h5>
            <p className="text-gray-500">American Express</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Last Four</p>
            <p className="text-gray-500">0011</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Expires</p>
            <p className="text-gray-500">01/27</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Default</p>
            <p className="text-gray-500">Yes</p>
          </div>
          <a
            href="/edit-payment-method"
            className="px-6 py-2 text-center text-sm text-primary
            bg-white border border-primary rounded hover:bg-primary hover:text-white transition uppercase font-roboto font-medium"
          >
            Edit
          </a>
          <a
            href="/payment-method"
            className="px-6 py-2 text-center text-sm text-primary
            bg-white border border-primary rounded hover:bg-primary hover:text-white transition uppercase font-roboto font-medium"
          >
            Delete
          </a>
        </div>

        <div className="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
          <div className="flex-shrink-0">
            <img src={visa} className="w-full" alt="visa" />
          </div>
          <div className="md:w-full">
            <h5 className="text-gray-600 font-semibold">Method</h5>
            <p className="text-gray-500">Visa Card</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Last Four</p>
            <p className="text-gray-500">4242</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Expires</p>
            <p className="text-gray-500">01/28</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Default</p>
            <p className="text-gray-500">No</p>
          </div>
          <a
            href="/edit-payment-method"
            className="px-6 py-2 text-center text-sm text-primary
            bg-white border border-primary rounded hover:bg-primary hover:text-white transition uppercase font-roboto font-medium"
          >
            Edit
          </a>
          <a
            href="/payment-method"
            className="px-6 py-2 text-center text-sm text-primary
            bg-white border border-primary rounded hover:bg-primary hover:text-white transition uppercase font-roboto font-medium"
          >
            Delete
          </a>
        </div>
      </div>
    </div>
  );
};
