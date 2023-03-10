import React from "react";
import { HeaderComponent } from "../../core/components/header.component";
import { AccountBreadcrumbsComponent } from "../components/account-breadcrumbs.component";
import { OrderDetailsComponent } from "../components/order-details.component";
import { FooterComponent } from "../../core/components/footer.component";

interface OrderDetailsPageProps {}

export const OrderDetailsPage: React.FC<OrderDetailsPageProps> = (
  props: OrderDetailsPageProps
) => {
  return (
    <>
      <HeaderComponent />
      <AccountBreadcrumbsComponent />
      <OrderDetailsComponent />
      <FooterComponent />
    </>
  );
};
