import React from "react";
import { AccountSidebarComponent } from "./account-sidebar.component";
import { ManageAccountComponent } from "./manage-account.component";

interface UserAccountComponentProps {}

export const UserAccountComponent: React.FC<UserAccountComponentProps> = (
  props: UserAccountComponentProps
) => {
  return (
    <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
      <div className="col-span-3">
        <AccountSidebarComponent />
      </div>
      <div className="col-span-9 ">
        <ManageAccountComponent />
      </div>
    </div>
  );
};
