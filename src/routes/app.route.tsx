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
import { ProfileInformationPage } from "../modules/account/pages/profile-information.page";
import { ManageAddressPage } from "../modules/account/pages/manage-address.page";
import { ChangePasswordPage } from "../modules/account/pages/change-password.page";
import { OrderHistoryPage } from "../modules/account/pages/order-history.page";
import { ReturnOrderPage } from "../modules/account/pages/return-order.page";
import { CancelOrderPage } from "../modules/account/pages/cancel-order.page";
import { ReviewOrderPage } from "../modules/account/pages/review-order.page";
import { PaymentMethodPage } from "../modules/account/pages/payment-method.page";
import { VoucherPage } from "../modules/account/pages/voucher.page";
import { SingleProductPage } from "../modules/product/pages/single-product.page";
import { CheckoutPage } from "../modules/checkout/pages/checkout.page";
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
      <Route path="/profile-information" element={<ProfileInformationPage />} />
      <Route path="/manage-address" element={<ManageAddressPage />} />
      <Route path="/change-password" element={<ChangePasswordPage />} />
      <Route path="/order-history" element={<OrderHistoryPage />} />
      <Route path="/my-returns" element={<ReturnOrderPage />} />
      <Route path="/my-cancellations" element={<CancelOrderPage />} />
      <Route path="/my-reviews" element={<ReviewOrderPage />} />
      <Route path="/payment-method" element={<PaymentMethodPage />} />
      <Route path="/voucher" element={<VoucherPage />} />
      <Route path="/product-details" element={<SingleProductPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="*" element={<MissingPagePage />} />
    </Routes>
  );
};
