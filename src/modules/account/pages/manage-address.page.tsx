import React from "react";
import { HeaderComponent } from "../../core/components/header.component";
import { AccountBreadcrumbsComponent } from "../components/account-breadcrumbs.component";
import { ManageAddressComponent } from "../components/manage-address.component";
import { FooterComponent } from "../../core/components/footer.component";

interface ManageAddressPageProps {}

export const ManageAddressPage: React.FC<ManageAddressPageProps> = (
  props: ManageAddressPageProps
) => {
  return (
    <div>
      <HeaderComponent />
      <AccountBreadcrumbsComponent />
      <ManageAddressComponent />
      <FooterComponent />
    </div>
  );
};
