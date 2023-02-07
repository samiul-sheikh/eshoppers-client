import React from "react";
import { ShopPage } from "../../shop/pages/shop.page";
import { HomepageComponent } from "../components/homepage.component";

interface HomepagePageProps {}

export const HomepagePage: React.FC<HomepagePageProps> = (
  props: HomepagePageProps
) => {
  return (
    <div>
      <HomepageComponent />
      <ShopPage />
    </div>
  );
};
