import React from "react";
import { HeaderComponent } from "../../core/components/header.component";
import { OrderHistoryComponent } from "../components/order-history.component";
import { FooterComponent } from "../../core/components/footer.component";

interface OrderHistoryPageProps {}

export const OrderHistoryPage: React.FC<OrderHistoryPageProps> = (
  props: OrderHistoryPageProps
) => {
  return (
    <div>
      <HeaderComponent />
      <OrderHistoryComponent />
      <FooterComponent />
    </div>
  );
};
