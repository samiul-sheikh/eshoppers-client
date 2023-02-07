import React from "react";
import { BreadcrumsComponent } from "../components/breadcrums.component";
import { SidebarShopComponent } from "../components/sidebar-shop.component";

interface ShopPageProps {}

export const ShopPage: React.FC<ShopPageProps> = (props: ShopPageProps) => {
  return (
    <div>
      <BreadcrumsComponent />
      <SidebarShopComponent />
    </div>
  );
};
