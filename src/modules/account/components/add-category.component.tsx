import React from "react";
import { AccountSidebarComponent } from "./account-sidebar.component";

interface AddCategoryComponentProps {}

export const AddCategoryComponent: React.FC<AddCategoryComponentProps> = (
  props: AddCategoryComponentProps
) => {
  return (
    <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
      <div className="col-span-3">
        <AccountSidebarComponent />
      </div>
      <div className="col-span-9 shadow rounded px-6 pt-5 pb-7 mt-6 lg:mt-0">
        <h4 className="text-lg font-medium capitalize mb-4">Add Category</h4>
        <div className="space-y-4">
          <div>
            <label htmlFor="" className="text-gray-600 mb-2 block">
              Category Name
            </label>
            <input
              type="text"
              className="input-box"
              placeholder="Enter category name"
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="block px-4 py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition font-roboto font-medium"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
