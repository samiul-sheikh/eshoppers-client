import React from "react";
import { CheckoutBreadcrumsComponent } from "../components/checkout-breadcrum.component";
import { CheckoutComponent } from "../components/checkout.component";

interface CheckoutPageProps {}

export const CheckoutPage: React.FC<CheckoutPageProps> = (
  props: CheckoutPageProps
) => {
  return (
    <div>
      <CheckoutBreadcrumsComponent />
      <CheckoutComponent />
    </div>
  );
};
