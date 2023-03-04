import React from "react";
import { AccountSidebarComponent } from "./account-sidebar.component";
import product1 from "../../../assets/products/men01.jpg";
import { FaStar } from "react-icons/fa";

interface WriteEditReviewComponentProps {}

export const WriteEditReviewComponent: React.FC<
  WriteEditReviewComponentProps
> = (props: WriteEditReviewComponentProps) => {
  return (
    <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
      <div className="col-span-3">
        <AccountSidebarComponent />
      </div>
      <div className="col-span-9 shadow rounded px-6 pt-5 pb-7 mt-6 lg:mt-0">
        <h4 className="text-lg font-medium capitalize mb-4">Write Review</h4>
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 md:gap-6">
              <div className="w-8 flex-shrink-0">
                <img src={product1} className="w-full" alt="wishlistProduct1" />
              </div>
              <div>
                <h2 className="text-gray-600 text-lg xl:text-xl font-medium">
                  Mens Jacket
                </h2>
                <p className="text-gray-500 font-sm">No Warranty Available</p>
              </div>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">Purchased</p>
              <p className="text-gray-500">14 Nov 2022</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <h6 className="text-lg text-gray-600 font-medium">
                Rate and review your product
              </h6>
              <div className="flex items-center mt-2">
                <div className="flex gap-1 text-sm text-gray-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="text-sm text-gray-600 ml-3">Good</div>
              </div>
            </div>

            <div>
              <h6 className="text-lg text-gray-600 font-medium">
                Rate and review your seller
              </h6>
              <div className="flex items-center mt-2">
                <div className="flex gap-1 text-sm text-gray-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="text-sm text-gray-600 ml-3">Good</div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <h6 className="text-lg text-gray-600 font-medium">
                Rate your rider
              </h6>
              <div className="flex items-center mt-2">
                <div className="flex gap-1 text-sm text-gray-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="text-sm text-gray-600 ml-3">Good</div>
              </div>
            </div>
            <div>
              <label htmlFor="" className="text-gray-600 mb-2 block">
                Review Details
              </label>
              <textarea
                className="input-box"
                placeholder="please share your feedback about the product."
              ></textarea>
            </div>
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
              className="block px-4 py-3 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
