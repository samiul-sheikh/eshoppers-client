import React from "react";
import { AccountSidebarComponent } from "./account-sidebar.component";

interface VoucherComponentProps {}

export const VoucherComponent: React.FC<VoucherComponentProps> = (
  props: VoucherComponentProps
) => {
  return (
    <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
      <div className="col-span-3">
        <AccountSidebarComponent />
      </div>
      <div className="col-span-9 shadow rounded px-6 pt-5 pb-7 mt-6 lg:mt-0">
        <h4 className="text-lg text-gray-600 font-medium mb-4">
          There is no vouchers yet !!
        </h4>
      </div>
    </div>
  );
};
