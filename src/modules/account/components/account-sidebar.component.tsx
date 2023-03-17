import React from "react";
import {
  FaAddressCard,
  FaCreditCard,
  FaGift,
  FaHeart,
  FaHome,
  FaPowerOff
} from "react-icons/fa";
import { UserNameComponent } from "./user-name.component";

interface AccountSidebarComponentProps {}

export const AccountSidebarComponent: React.FC<AccountSidebarComponentProps> = (
  props: AccountSidebarComponentProps
) => {
  return (
    <div>
      <UserNameComponent />
      <div className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
        <div className="space-y-1 pl-8">
          <a
            href="/account"
            className="relative text-primary block font-medium capitalize transition"
          >
            <span className="absolute -left-8 top-1 text-base">
              <FaAddressCard />
            </span>
            manage account
          </a>
          <a
            href="/profile-information"
            className="relative hover:text-primary block capitalize transition"
          >
            profile information
          </a>
          <a
            href="/manage-address"
            className="relative hover:text-primary block capitalize transition"
          >
            manage address
          </a>
          <a
            href="/change-password"
            className="relative hover:text-primary block capitalize transition"
          >
            change password
          </a>
        </div>
        <div className="space-y-1 pl-8 pt-4">
          <a
            href="/order-history"
            className="relative hover:text-primary block font-medium capitalize transition"
          >
            <span className="absolute -left-8 top-1 text-base">
              <FaGift />
            </span>
            my order history
          </a>
          <a
            href="/my-returns"
            className="relative hover:text-primary block capitalize transition"
          >
            my returns
          </a>
          <a
            href="/my-cancellations"
            className="relative hover:text-primary block capitalize transition"
          >
            my cancellations
          </a>
          <a
            href="/my-reviews"
            className="relative hover:text-primary block capitalize transition"
          >
            my reviews
          </a>
        </div>
        <div className="space-y-1 pl-8 pt-4">
          <a
            href="/payment-method"
            className="relative hover:text-primary block font-medium capitalize transition"
          >
            <span className="absolute -left-8 top-1 text-base">
              <FaCreditCard />
            </span>
            payment methods
          </a>
          <a
            href="/voucher"
            className="relative hover:text-primary block capitalize transition"
          >
            voucher
          </a>
        </div>
        <div className="space-y-1 pl-8 pt-4">
          <a
            href="/wishlist"
            className="relative hover:text-primary block font-medium capitalize transition"
          >
            <span className="absolute -left-8 top-1 text-base">
              <FaHeart />
            </span>
            my wishlist
          </a>
        </div>
        <div className="space-y-1 pl-8 pt-4">
          <a
            href="/admin-panel"
            className="relative hover:text-primary block font-medium capitalize transition"
          >
            <span className="absolute -left-8 top-1 text-base">
              <FaHome />
            </span>
            Admin Dashboard
          </a>
          <a
            href="/add-product"
            className="relative hover:text-primary block capitalize transition"
          >
            Add Product
          </a>
          <a
            href="/all-products"
            className="relative hover:text-primary block capitalize transition"
          >
            All Produts
          </a>
          <a
            href="/user-list"
            className="relative hover:text-primary block capitalize transition"
          >
            User List
          </a>
        </div>
        <div className="space-y-1 pl-8 pt-4">
          <a
            href="/login"
            className="relative hover:text-primary block font-medium capitalize transition"
          >
            <span className="absolute -left-8 top-1 text-base">
              <FaPowerOff />
            </span>
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};
