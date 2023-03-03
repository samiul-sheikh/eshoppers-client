import React from "react";
import { HeaderComponent } from "../../core/components/header.component";
import { AccountBreadcrumbsComponent } from "../components/account-breadcrumbs.component";
import { EditPaymentMethodComponent } from "../components/edit-payment-method.component";
import { FooterComponent } from "../../core/components/footer.component";

interface EditPaymentMethodPageProps {}

export const EditPaymentMethodPage: React.FC<EditPaymentMethodPageProps> = (
  props: EditPaymentMethodPageProps
) => {
  return (
    <div className="">
      <HeaderComponent />
      <AccountBreadcrumbsComponent />
      <EditPaymentMethodComponent />
      <FooterComponent />
    </div>
  );
};
