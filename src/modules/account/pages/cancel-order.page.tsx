import React from "react";
import { HeaderComponent } from "../../core/components/header.component";
import { AccountBreadcrumbsComponent } from "../components/account-breadcrumbs.component";
import { CancelOrderComponent } from "../components/cancel-order.component";
import { FooterComponent } from "../../core/components/footer.component";

interface CancelOrderPageProps {}

export const CancelOrderPage: React.FC<CancelOrderPageProps> = (
  props: CancelOrderPageProps
) => {
  return (
    <div>
      <HeaderComponent />
      <AccountBreadcrumbsComponent />
      <CancelOrderComponent />
      <FooterComponent />
    </div>
  );
};
