import React from "react";
import { HeaderComponent } from "../../core/components/header.component";
import { AccountBreadcrumbsComponent } from "../components/account-breadcrumbs.component";
import { ReturnOrderDetailsComponent } from "../components/return-order-details.component";
import { FooterComponent } from "../../core/components/footer.component";

interface ReturnOrderDetailsPageProps {}

export const ReturnOrderDetailsPage: React.FC<ReturnOrderDetailsPageProps> = (
  props: ReturnOrderDetailsPageProps
) => {
  return (
    <div>
      <HeaderComponent />
      <AccountBreadcrumbsComponent />
      <ReturnOrderDetailsComponent />
      <FooterComponent />
    </div>
  );
};
