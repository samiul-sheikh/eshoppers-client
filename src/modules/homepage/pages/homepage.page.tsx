import React from "react";
import { HomepageComponent } from "../components/homepage.component";
import { ShopPage } from "../../shop/pages/shop.page";

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
