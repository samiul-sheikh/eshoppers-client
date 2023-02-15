import React from "react";
import { HomepageComponent } from "../components/homepage.component";
import { ShopPage } from "../../shop/pages/shop.page";
import { ProductDetailsPage } from "../../product/pages/product-details.page";
import { ProductInformationComponent } from "../../product/components/product-information.component";
import { UserAccountPage } from "../../account/pages/user-account.page";
import { ProfileInformationPage } from "../../account/pages/profile-information.page";

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
      <UserAccountPage />
      <ProfileInformationPage />
    </div>
  );
};
