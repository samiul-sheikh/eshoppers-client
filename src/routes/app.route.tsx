import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomepagePage } from "../modules/homepage/pages/homepage.page";
import { ShopPage } from "../modules/shop/pages/shop.page";
import { CartPage } from "../modules/cart/pages/cart.page";
import { WishlistPage } from "../modules/account/pages/wishlist.page";
import { ProfileInformationPage } from "../modules/account/pages/profile-information.page";
import { LoginPage } from "../modules/authentication/pages/login.page";
import { RegisterPage } from "../modules/authentication/pages/register.page";
import { MissingPagePage } from "../modules/core/pages/missing-page.page";
import { CheckoutPage } from "../modules/checkout/pages/checkout.page";
import { UserAccountPage } from "../modules/account/pages/user-account.page";

export const AppRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomepagePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/profile-information" element={<ProfileInformationPage />} />
      <Route path="/account" element={<UserAccountPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<MissingPagePage />} />
    </Routes>
  );
};
