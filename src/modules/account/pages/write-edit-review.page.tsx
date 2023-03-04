import React from "react";
import { HeaderComponent } from "../../core/components/header.component";
import { AccountBreadcrumbsComponent } from "../components/account-breadcrumbs.component";
import { WriteEditReviewComponent } from "../components/write-edit-review.component";
import { FooterComponent } from "../../core/components/footer.component";

interface WriteEditReviewPageProps {}

export const WriteEditReviewPage: React.FC<WriteEditReviewPageProps> = (
  props: WriteEditReviewPageProps
) => {
  return (
    <div>
      <HeaderComponent />
      <AccountBreadcrumbsComponent />
      <WriteEditReviewComponent />
      <FooterComponent />
    </div>
  );
};
