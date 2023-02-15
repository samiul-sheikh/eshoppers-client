import React from "react";
import { HeaderComponent } from "../../core/components/header.component";
import { BannerComponent } from "../components/banner-component";
import { FeatureAreaComponent } from "../components/feature-area.component";
import { CategoryComponent } from "../components/category.component";
import { TopNewArrivalComponent } from "../components/top-new-arrival-products.component";
import { AdComponent } from "../components/ad.component";
import { RecomendedProductsComponent } from "../components/recomended-products.component";
import { FooterComponent } from "../../core/components/footer.component";

interface HomepagePageProps {}

export const HomepagePage: React.FC<HomepagePageProps> = (
  props: HomepagePageProps
) => {
  return (
    <div>
      <HeaderComponent />
      <BannerComponent />
      <FeatureAreaComponent />
      <CategoryComponent />
      <TopNewArrivalComponent />
      <AdComponent />
      <RecomendedProductsComponent />
      <FooterComponent />
    </div>
  );
};
