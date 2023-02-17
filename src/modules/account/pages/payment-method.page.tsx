import React from "react";
import { HeaderComponent } from "../../core/components/header.component";
import { PaymentMethodComponent } from "../components/payment-methods.component";
import { FooterComponent } from "../../core/components/footer.component";

interface PaymentMethodPageProps {}

export const PaymentMethodPage: React.FC<PaymentMethodPageProps> = (
  props: PaymentMethodPageProps
) => {
  return (
    <div>
      <HeaderComponent />
      <PaymentMethodComponent />
      <FooterComponent />
    </div>
  );
};
