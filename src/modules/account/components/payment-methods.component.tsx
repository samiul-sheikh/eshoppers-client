import React from "react";
import { FaCreditCard } from "react-icons/fa";

interface PaymentMethodComponentProps {}

export const PaymentMethodComponent: React.FC<PaymentMethodComponentProps> = (
  props: PaymentMethodComponentProps
) => {
  return (
    <div className="space-y-1 pl-8 pt-4">
      <a
        href="/"
        className="relative hover:text-primary block font-medium capitalize transition"
      >
        <span className="absolute -left-8 top-1 text-base">
          <FaCreditCard />
        </span>
        payment methods
      </a>
      <a
        href="/"
        className="relative hover:text-primary block capitalize transition"
      >
        voucher
      </a>
    </div>
  );
};
