import React from "react";
import { FaChevronRight, FaHome } from "react-icons/fa";

interface CheckoutBreadcrumsComponentProps {}

export const CheckoutBreadcrumsComponent: React.FC<
  CheckoutBreadcrumsComponentProps
> = (props: CheckoutBreadcrumsComponentProps) => {
  return (
    <div className="container p-4 flex items-center gap-3">
      <a href="/" className="text-primary text-base">
        <FaHome />
      </a>
      <span className="text-sm text-gray-400">
        <FaChevronRight />
      </span>
      <p className="text-gray-600 font-medium">Checkout</p>
    </div>
  );
};
