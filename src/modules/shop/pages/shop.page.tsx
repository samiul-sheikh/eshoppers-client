import React from "react";
import { HeaderComponent } from "../../core/components/header.component";
import { BreadcrumsComponent } from "../../core/components/breadcrums.component";
import { ShopComponent } from "../components/shop.component";
import { FooterComponent } from "../../core/components/footer.component";

interface ShopPageProps {}

export const ShopPage: React.FC<ShopPageProps> = (props: ShopPageProps) => {
  return (
    <div>
      <HeaderComponent />
      <BreadcrumsComponent />
      <ShopComponent />
      <FooterComponent />
    </div>
  );
};
