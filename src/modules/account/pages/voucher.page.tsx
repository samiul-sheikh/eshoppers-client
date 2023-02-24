import React from "react";
import { HeaderComponent } from "../../core/components/header.component";
import { AccountBreadcrumbsComponent } from "../components/account-breadcrumbs.component";
import { VoucherComponent } from "../components/voucher.component";
import { FooterComponent } from "../../core/components/footer.component";

interface VoucherPageProps {}

export const VoucherPage: React.FC<VoucherPageProps> = (
  props: VoucherPageProps
) => {
  return (
    <div>
      <HeaderComponent />
      <AccountBreadcrumbsComponent />
      <VoucherComponent />
      <FooterComponent />
    </div>
  );
};
