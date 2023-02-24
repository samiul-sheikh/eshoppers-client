import React from "react";
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
      <div className="col-span-9 shadow rounded px-6 pt-5 pb-7 mt-6 lg:mt-0">
        <h4 className="text-lg font-medium capitalize mb-4">Comming Soon</h4>
      </div>
    </div>
  );
};
