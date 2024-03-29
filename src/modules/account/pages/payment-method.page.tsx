import React from "react";
import { HeaderComponent } from "../../core/components/header.component";
import { AccountBreadcrumbsComponent } from "../components/account-breadcrumbs.component";
import { PaymentMethodComponent } from "../components/payment-method.component";
import { FooterComponent } from "../../core/components/footer.component";

interface PaymentMethodPageProps {}

export const PaymentMethodPage: React.FC<PaymentMethodPageProps> = (
  props: PaymentMethodPageProps
) => {
  return (
    <div>
      <HeaderComponent />
      <AccountBreadcrumbsComponent />
      <PaymentMethodComponent />
      <FooterComponent />
    </div>
  );
};
