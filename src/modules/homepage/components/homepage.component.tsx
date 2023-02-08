import React from "react";
import { HeaderComponent } from "../../core/components/header.component";
import { NavbarComponent } from "../../core/components/navbar.component";
import { BannerComponent } from "./banner-component";
import { FeatureAreaComponent } from "./feature-area.component";
import { CategoryComponent } from "./category.component";
import { TopNewArrivalComponent } from "./top-new-arrival-products.component";
import { AdComponent } from "./ad.component";
import { RecomendedProductsComponent } from "./recomended-products.component";
import { FooterComponent } from "../../core/components/footer.component";

interface HomepageComponentProps {}

export const HomepageComponent: React.FC<HomepageComponentProps> = (
  props: HomepageComponentProps
) => {
  return (
    <div>
      <HeaderComponent />
      <NavbarComponent />
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
