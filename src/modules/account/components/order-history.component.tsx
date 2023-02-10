import React from "react";
import { FaGift } from "react-icons/fa";

interface OrderHistoryComponentProps {}

export const OrderHistoryComponent: React.FC<OrderHistoryComponentProps> = (
  props: OrderHistoryComponentProps
) => {
  return (
    <div className="space-y-1 pl-8 pt-4">
      <a
        href="/"
        className="relative hover:text-primary block font-medium capitalize transition"
      >
        <span className="absolute -left-8 top-1 text-base">
          <FaGift />
        </span>
        my order history
      </a>
      <a
        href="/"
        className="relative hover:text-primary block capitalize transition"
      >
        my returns
      </a>
      <a
        href="/"
        className="relative hover:text-primary block capitalize transition"
      >
        my cancelletion
      </a>
      <a
        href="/"
        className="relative hover:text-primary block capitalize transition"
      >
        my reviews
      </a>
    </div>
  );
};
