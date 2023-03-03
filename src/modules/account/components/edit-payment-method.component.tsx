import React from "react";
import { AccountSidebarComponent } from "./account-sidebar.component";

interface EditPaymentMethodComponentProps {}

export const EditPaymentMethodComponent: React.FC<
  EditPaymentMethodComponentProps
> = (props: EditPaymentMethodComponentProps) => {
  return (
    <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
      <div className="col-span-3">
        <AccountSidebarComponent />
      </div>
      <div className="col-span-9 shadow rounded px-6 pt-5 pb-7 mt-6 lg:mt-0">
        <h4 className="text-lg font-medium capitalize mb-4">
          Edit Payment Method
        </h4>
        <div className="space-y-4">
          <div>
            <label className="text-gray-600 mb-2 block">
              Card Number <span className="text-primary">*</span>
            </label>
            <input type="text" className="input-box " />
          </div>
          <div>
            <label className="text-gray-600 mb-2 block">
              Name On Card <span className="text-primary">*</span>
            </label>
            <input type="text" className="input-box " />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="" className="text-gray-600 mb-2 block">
                Expiration Date <span className="text-primary">*</span>
              </label>
              <input type="text" className="input-box" placeholder="MM/YY" />
            </div>
            <div>
              <label htmlFor="" className="text-gray-600 mb-2 block">
                CVV <span className="text-primary">*</span>
              </label>
              <input type="text" className="input-box" placeholder="CVV" />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="default-card"
                className="text-primary border border-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label
                htmlFor="default-card"
                className="text-gray-600 ml-3 cursor-pointer"
              >
                Save as default
              </label>
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
