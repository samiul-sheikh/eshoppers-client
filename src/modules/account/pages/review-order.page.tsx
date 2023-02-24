import React from "react";
import { HeaderComponent } from "../../core/components/header.component";
import { AccountBreadcrumbsComponent } from "../components/account-breadcrumbs.component";
import { ReviewOrderComponent } from "../components/review-order.component";
import { FooterComponent } from "../../core/components/footer.component";

interface ReviewOrderPageProps {}

export const ReviewOrderPage: React.FC<ReviewOrderPageProps> = (
  props: ReviewOrderPageProps
) => {
  return (
    <div>
      <HeaderComponent />
      <AccountBreadcrumbsComponent />
      <ReviewOrderComponent />
      <FooterComponent />
    </div>
  );
};
