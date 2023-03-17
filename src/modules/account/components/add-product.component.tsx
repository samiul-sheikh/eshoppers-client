import React from "react";
import { AccountSidebarComponent } from "./account-sidebar.component";

interface AddProductComponentProps {}

export const AddProductComponent: React.FC<AddProductComponentProps> = (
  props: AddProductComponentProps
) => {
  return (
    <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
      <div className="col-span-3">
        <AccountSidebarComponent />
      </div>
      <div className="col-span-9 shadow rounded px-6 pt-5 pb-7 mt-6 lg:mt-0">
        <h4 className="text-lg font-medium capitalize mb-4">Add Product</h4>
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="" className="text-gray-600 mb-2 block">
                Product Name
              </label>
              <input
                type="text"
                className="input-box"
                placeholder="Enter product name"
              />
            </div>
            <div>
              <label htmlFor="" className="text-gray-600 mb-2 block">
                Price
              </label>
              <input
                type="number"
                className="input-box"
                placeholder="Enter price"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="" className="text-gray-600 mb-2 block">
                Brand
              </label>
              <select
                name=""
                id=""
                className="w-full text-gray-600 border border-gray-300 focus:ring-0"
              >
                <option value="">Yellow</option>
                <option value="">Estacy</option>
                <option value="">Sara</option>
              </select>
            </div>
            <div>
              <label htmlFor="" className="text-gray-600 mb-2 block">
                Category
              </label>
              <select
                name=""
                id=""
                className="w-full text-gray-600 border border-gray-300 focus:ring-0"
              >
                <option value="">Men</option>
                <option value="">Women</option>
                <option value="">Baby</option>
                <option value="">Sunglass</option>
                <option value="">Bag</option>
                <option value="">Belt</option>
              </select>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="" className="text-gray-600 mb-2 block">
                Color
              </label>
              <select
                name=""
                id=""
                className="w-full text-gray-600 border border-gray-300 focus:ring-0"
              >
                <option value="">White</option>
                <option value="">Black</option>
                <option value="">Red</option>
                <option value="">Green</option>
                <option value="">Pink</option>
                <option value="">Purple</option>
                <option value="">Yellow</option>
                <option value="">Blue</option>
                <option value="">Brown</option>
              </select>
            </div>
            <div>
              <label htmlFor="" className="text-gray-600 mb-2 block">
                Material
              </label>
              <input
                type="text"
                className="input-box"
                placeholder="Product materials"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="" className="text-gray-600 mb-2 block">
                Weight
              </label>
              <input
                type="text"
                className="input-box"
                placeholder="Product weight"
              />
            </div>
            <div>
              <label htmlFor="" className="text-gray-600 mb-2 block">
                Title
              </label>
              <input
                type="text"
                className="input-box"
                placeholder="Enter product title"
              />
            </div>
          </div>
          <div>
            <label htmlFor="" className="text-gray-600 mb-2 block">
              Product Description
            </label>
            <input
              type="text"
              className="input-box"
              placeholder="Enter product description"
            />
          </div>
          <div className="grid  gap-4">
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    className="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="block px-4 py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition font-roboto font-medium"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
