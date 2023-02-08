import React from "react";
import { FooterComponent } from "../../core/components/footer.component";
import { ShopPage } from "../../shop/pages/shop.page";
import { AdComponent } from "../components/ad.component";
import { HomepageComponent } from "../components/homepage.component";
import { RecomendedProductsComponent } from "../components/recomended-products.component";

interface HomepagePageProps {}

export const HomepagePage: React.FC<HomepagePageProps> = (
  props: HomepagePageProps
) => {
  return (
    <div>
      <HomepageComponent />
      <ShopPage />
      <AdComponent />
      <RecomendedProductsComponent />
      <FooterComponent />
    </div>
  );
};
