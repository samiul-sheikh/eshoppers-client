import React from "react";
import { FooterComponent } from "../../core/components/footer.component";
import { HeaderComponent } from "../../core/components/header.component";
import { VoucherComponent } from "../components/voucher.component";

interface VoucherPageProps {}

export const VoucherPage: React.FC<VoucherPageProps> = (
  props: VoucherPageProps
) => {
  return (
    <div>
      <HeaderComponent />
      <VoucherComponent />
      <FooterComponent />
    </div>
  );
};
