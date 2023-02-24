import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import footerlogo from "../../../assets/logo/PayloadIT.png";

interface FooterContentComponentProps {}

export const FooterContentComponent: React.FC<FooterContentComponentProps> = (
  props: FooterContentComponentProps
) => {
  return (
    <div className="bg-white pt-16 pb-12 border-t border-gray-100">
      <div className="container xl:grid xl:grid-cols-3 xl:gap-8">
        <div className="space-y-8 xl:col-span-1">
          <img src={footerlogo} className="w-20" alt="something went wrong" />
          <p className="text-gray-500 text-base">
            Lorem ipsum dolor sit amet elit. Maxime mollitia, molestiae quas vel
            sint commodi repudiandae consequuntur.
          </p>
          <div className="flex space-x-6">
            <a href="/" className="text-gray-400 hover:text-gray-500">
              <FaFacebook />
            </a>
            <a href="/" className="text-gray-400 hover:text-gray-500">
              <FaTwitter />
            </a>
            <a href="/" className="text-gray-400 hover:text-gray-500">
              <FaLinkedin />
            </a>
            <a href="/" className="text-gray-400 hover:text-gray-500">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                My Account
              </h3>
              <div className="mt-4 space-y-4">
                <a
                  href="/order-history"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Orders
                </a>
                <a
                  href="/wishlist"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Wishlist
                </a>
                <a
                  href="/track-order"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Track Order
                </a>
                <a
                  href="/return-order"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Return Order
                </a>
                <a
                  href="/account"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Manage Account
                </a>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Information
              </h3>
              <div className="mt-4 space-y-4">
                <a
                  href="/about"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  About Us
                </a>
                <a
                  href="/return-policy"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Return Policy
                </a>
                <a
                  href="/terms&condition"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Terms & Condition
                </a>
                <a
                  href="/privacy-policy"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Privacy Policy
                </a>
                <a
                  href="/faq"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  FAQ
                </a>
              </div>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Shop
              </h3>
              <div className="mt-4 space-y-4">
                <a
                  href="/"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Men
                </a>
                <a
                  href="/"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Women
                </a>
                <a
                  href="/"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Baby
                </a>
                <a
                  href="/"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Others
                </a>
                <a
                  href="/"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Sunglass
                </a>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Category
              </h3>
              <div className="mt-4 space-y-4">
                <a
                  href="/"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Men
                </a>
                <a
                  href="/"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Women
                </a>
                <a
                  href="/"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Baby
                </a>
                <a
                  href="/"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Belt
                </a>
                <a
                  href="/"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Bag
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
