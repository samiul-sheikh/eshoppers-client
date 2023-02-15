import React from "react";
import { FooterComponent } from "../../core/components/footer.component";
import { HeaderComponent } from "../../core/components/header.component";
import { CheckoutBreadcrumsComponent } from "../components/checkout-breadcrum.component";
import { CheckoutComponent } from "../components/checkout.component";

interface CheckoutPageProps {}

export const CheckoutPage: React.FC<CheckoutPageProps> = (
  props: CheckoutPageProps
) => {
  return (
    <div>
      <HeaderComponent />
      <CheckoutBreadcrumsComponent />
      <CheckoutComponent />
      <FooterComponent />
    </div>
  );
};
