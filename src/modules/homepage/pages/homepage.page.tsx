import React from "react";
import { HomepageComponent } from "../components/homepage.component";
import { ShopPage } from "../../shop/pages/shop.page";
import { ProductDetailsPage } from "../../product/pages/product-details.page";
import { CopyrightComponent } from "../../core/components/copyright.component";
import { ProductInformationComponent } from "../../product/components/product-information.component";
import { LoginPage } from "../../authentication/pages/login.page";
import { RegisterPage } from "../../authentication/pages/register.page";
import { UserAccountPage } from "../../account/pages/user-account.page";
import { CheckoutPage } from "../../checkout/pages/checkout.page";
import { ProfileInformationPage } from "../../account/pages/profile-information.page";
import { WishlistPage } from "../../account/pages/wishlist.page";
import { CartPage } from "../../cart/pages/cart.page";

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
      <UserAccountPage />
      <CheckoutPage />
      <ProfileInformationPage />
      <WishlistPage />
      <CartPage />
      <CopyrightComponent />
    </div>
  );
};
