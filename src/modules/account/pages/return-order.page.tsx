import React from "react";
import { HeaderComponent } from "../../core/components/header.component";
import { AccountBreadcrumbsComponent } from "../components/account-breadcrumbs.component";
import { ReturnOrderComponent } from "../components/return-order.component";
import { FooterComponent } from "../../core/components/footer.component";

interface ReturnOrderPageProps {}

export const ReturnOrderPage: React.FC<ReturnOrderPageProps> = (
  props: ReturnOrderPageProps
) => {
  return (
    <div>
      <HeaderComponent />
      <AccountBreadcrumbsComponent />
      <ReturnOrderComponent />
      <FooterComponent />
    </div>
  );
};
