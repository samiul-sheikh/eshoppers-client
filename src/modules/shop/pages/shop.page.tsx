import React from "react";
import { BreadcrumsComponent } from "../components/breadcrums.component";
import { ShopComponent } from "../components/shop.component";

interface ShopPageProps {}

export const ShopPage: React.FC<ShopPageProps> = (props: ShopPageProps) => {
  return (
    <div>
      <BreadcrumsComponent />
      <ShopComponent />
    </div>
  );
};
