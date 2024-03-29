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
import { OrderDetailsPage } from "../modules/account/pages/order-details.page";
import { ReturnOrderPage } from "../modules/account/pages/return-order.page";
import { ReturnOrderDetailsPage } from "../modules/account/pages/return-order-details.page";
import { CancelOrderPage } from "../modules/account/pages/cancel-order.page";
import { ReviewOrderPage } from "../modules/account/pages/review-order.page";
import { WriteEditReviewPage } from "../modules/account/pages/write-edit-review.page";
import { PaymentMethodPage } from "../modules/account/pages/payment-method.page";
import { EditPaymentMethodPage } from "../modules/account/pages/edit-payment-method.page";
import { VoucherPage } from "../modules/account/pages/voucher.page";
import { SingleProductPage } from "../modules/product/pages/single-product.page";
import { CheckoutPage } from "../modules/checkout/pages/checkout.page";
import { MissingPagePage } from "../modules/core/pages/missing-page.page";
import { AdminPanelPage } from "../modules/account/pages/admin-panel.page";
import { AddProductPage } from "../modules/account/pages/add-product.page";
import { AddCategoryPage } from "../modules/account/pages/add-category.page";
import { AllProductsPage } from "../modules/account/pages/all-products.page";
import { UserListPage } from "../modules/account/pages/user-list.page";

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
      <Route path="/order-details" element={<OrderDetailsPage />} />
      <Route path="/my-returns" element={<ReturnOrderPage />} />
      <Route
        path="/return-order-details"
        element={<ReturnOrderDetailsPage />}
      />
      <Route path="/my-cancellations" element={<CancelOrderPage />} />
      <Route path="/my-reviews" element={<ReviewOrderPage />} />
      <Route path="/write-edit-review" element={<WriteEditReviewPage />} />
      <Route path="/payment-method" element={<PaymentMethodPage />} />
      <Route path="/edit-payment-method" element={<EditPaymentMethodPage />} />
      <Route path="/voucher" element={<VoucherPage />} />
      <Route path="/product-details" element={<SingleProductPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="*" element={<MissingPagePage />} />
      <Route path="/admin-panel" element={<AdminPanelPage />} />
      <Route path="/add-product" element={<AddProductPage />} />
      <Route path="/all-products" element={<AllProductsPage />} />
      <Route path="/user-list" element={<UserListPage />} />
      <Route path="/add-category" element={<AddCategoryPage />} />
    </Routes>
  );
};
