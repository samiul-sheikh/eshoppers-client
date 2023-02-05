import React from "react";
import { FaMoneyBill, FaPhone, FaShopify } from "react-icons/fa";

interface FeatureAreaComponentProps {}

export const FeatureAreaComponent: React.FC<FeatureAreaComponentProps> = (
  props: FeatureAreaComponentProps
) => {
  return (
    <div className="container py-16">
      <div className="w-10/12 grid grid-cols-3 gap-6 mx-auto justify-center">
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-cenetr items-center gap-5">
          {/* <img src={logo1} className="w-10 h-10 object-contain" alt="feature-1"/> */}
          <div className="text-primary text-3xl">
            <FaShopify />
          </div>
          <div className="">
            <h4 className="font-medium capitalize text-lg">Free Shopping</h4>
            <p className="text-gray-500 text-sm">Order over $100</p>
          </div>
        </div>
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-cenetr items-center gap-5">
          <div className="text-primary text-3xl">
            <FaMoneyBill />
          </div>
          <div className="">
            <h4 className="font-medium capitalize text-lg">Money Returns</h4>
            <p className="text-gray-500 text-sm">30 days money return</p>
          </div>
        </div>
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-cenetr items-center gap-5">
          <div className="text-primary text-3xl">
            <FaPhone />
          </div>
          <div className="">
            <h4 className="font-medium capitalize text-lg">24/7 Support</h4>
            <p className="text-gray-500 text-sm">Customer Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};
