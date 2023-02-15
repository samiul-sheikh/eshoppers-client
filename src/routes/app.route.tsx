import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomepagePage } from "../modules/homepage/pages/homepage.page";
import { ShopPage } from "../modules/shop/pages/shop.page";
import { AboutUsPage } from "../modules/about/pages/about-us.page";
import { ContactUsPage } from "../modules/contact/pages/contact-us.page";
import { WishlistPage } from "../modules/account/pages/wishlist.page";
import { CartPage } from "../modules/cart/pages/cart.page";
import { UserAccountPage } from "../modules/account/pages/user-account.page";
import { LoginPage } from "../modules/authentication/pages/login.page";
import { RegisterPage } from "../modules/authentication/pages/register.page";
import { SingleProductPage } from "../modules/product/pages/single-product.page";
import { CheckoutPage } from "../modules/checkout/pages/checkout.page";
import { ProfileInformationPage } from "../modules/account/pages/profile-information.page";
import { MissingPagePage } from "../modules/core/pages/missing-page.page";

export const AppRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomepagePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/account" element={<UserAccountPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/product-details" element={<SingleProductPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/profile-information" element={<ProfileInformationPage />} />
      <Route path="*" element={<MissingPagePage />} />
    </Routes>
  );
};
