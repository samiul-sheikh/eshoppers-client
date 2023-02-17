import React from "react";
import { AccountSidebarComponent } from "./account-sidebar.component";

interface ChangePasswordComponentProps {}

export const ChangePasswordComponent: React.FC<ChangePasswordComponentProps> = (
  props: ChangePasswordComponentProps
) => {
  return (
    <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
      <div className="col-span-3">
        <AccountSidebarComponent />
      </div>
      <div className="col-span-9 shadow rounded px-6 pt-5 pb-7">
        <h4 className="text-lg font-medium capitalize mb-4">Change Password</h4>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="" className="text-gray-600 mb-2 block">
                Current Password
              </label>
              <input
                type="password"
                className="input-box"
                placeholder="enter current password"
              />
            </div>
            <div>
              <label htmlFor="" className="text-gray-600 mb-2 block">
                New Password
              </label>
              <input
                type="password"
                className="input-box"
                placeholder="enter new password"
              />
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
