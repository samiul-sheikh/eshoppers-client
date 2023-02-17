import React from "react";
import {
  FaAddressCard,
  FaCreditCard,
  FaGift,
  FaHeart,
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
            href="/"
            className="relative hover:text-primary block capitalize transition"
          >
            manage address
          </a>
          <a
            href="/"
            className="relative hover:text-primary block capitalize transition"
          >
            change password
          </a>
        </div>
        <div className="space-y-1 pl-8 pt-4">
          <a
            href="/"
            className="relative hover:text-primary block font-medium capitalize transition"
          >
            <span className="absolute -left-8 top-1 text-base">
              <FaGift />
            </span>
            my order history
          </a>
          <a
            href="/"
            className="relative hover:text-primary block capitalize transition"
          >
            my returns
          </a>
          <a
            href="/"
            className="relative hover:text-primary block capitalize transition"
          >
            my cancelletion
          </a>
          <a
            href="/"
            className="relative hover:text-primary block capitalize transition"
          >
            my reviews
          </a>
        </div>
        <div className="space-y-1 pl-8 pt-4">
          <a
            href="/"
            className="relative hover:text-primary block font-medium capitalize transition"
          >
            <span className="absolute -left-8 top-1 text-base">
              <FaCreditCard />
            </span>
            payment methods
          </a>
          <a
            href="/"
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