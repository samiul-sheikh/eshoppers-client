import React from "react";
import { HeaderComponent } from "../../core/components/header.component";
import { AccountBreadcrumbsComponent } from "../components/account-breadcrumbs.component";
import { UserAccountComponent } from "../components/user-account.component";
import { FooterComponent } from "../../core/components/footer.component";

interface UserAccountPageProps {}

export const UserAccountPage: React.FC<UserAccountPageProps> = (
  props: UserAccountPageProps
) => {
  return (
    <div>
      <HeaderComponent />
      <AccountBreadcrumbsComponent />
      <UserAccountComponent />
      <FooterComponent />
    </div>
  );
};
