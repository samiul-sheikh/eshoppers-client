import React from "react";
import { FooterComponent } from "../../core/components/footer.component";
import { HeaderComponent } from "../../core/components/header.component";
import { ManageAddressComponent } from "../components/manage-address.component";

interface ManageAddressPageProps {}

export const ManageAddressPage: React.FC<ManageAddressPageProps> = (
  props: ManageAddressPageProps
) => {
  return (
    <div>
      <HeaderComponent />
      <ManageAddressComponent />
      <FooterComponent />
    </div>
  );
};
