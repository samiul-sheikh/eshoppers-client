import React from "react";
import { HomepageComponent } from "../components/homepage.component";
import { ShopPage } from "../../shop/pages/shop.page";
import { ProductDetailsPage } from "../../product/pages/product-details.page";
import { CopyrightComponent } from "../../core/components/copyright.component";
import { ProductInformationComponent } from "../../product/components/product-information.component";
import { LoginPage } from "../../authentication/pages/login.page";
import { RegisterPage } from "../../authentication/pages/register.page";

interface HomepagePageProps {}

export const HomepagePage: React.FC<HomepagePageProps> = (
  props: HomepagePageProps
) => {
  return (
    <div>
      <HomepageComponent />
      <ShopPage />
      <ProductDetailsPage />
      <ProductInformationComponent />
      <LoginPage />
      <RegisterPage />
      <CopyrightComponent />
    </div>
  );
};
