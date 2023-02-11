import React from "react";
import { CheckoutInformationComponent } from "./checkout-information.component";
import { OrderSummaryComponent } from "./order-summary.component";

interface CheckoutComponentProps {}

export const CheckoutComponent: React.FC<CheckoutComponentProps> = (
  props: CheckoutComponentProps
) => {
  return (
    <div className="container grid grid-cols-12 gap-6 items-start pb-16 pt-4">
      <div className="col-span-8 border border-gray-200 p-4 rounded">
        <CheckoutInformationComponent />
      </div>
      <div className="col-span-4 border border-gray-200 p-4 rounded">
        <OrderSummaryComponent />
      </div>
    </div>
  );
};
