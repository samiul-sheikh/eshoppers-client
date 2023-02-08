import React from "react";
import copyright from "../../../assets/logo/payment-method.png";

interface CopyrightComponentProps {}

export const CopyrightComponent: React.FC<CopyrightComponentProps> = (
  props: CopyrightComponentProps
) => {
  return (
    <div className="bg-gray-800 py-4">
      <div className="container flex items-center justify-between">
        <p className="text-white">&copy; Eshoppers - All Right Reserved</p>
        <img src={copyright} className="h-5" alt="copyrightImage" />
      </div>
    </div>
  );
};
