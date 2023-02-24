import React from "react";
import copyright from "../../../assets/logo/payment-method.png";

interface CopyrightComponentProps {}

export const CopyrightComponent: React.FC<CopyrightComponentProps> = (
  props: CopyrightComponentProps
) => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className="bg-gray-800 py-4">
      <div className="container md:flex md:items-center md:justify-between">
        <img src={copyright} className="h-5" alt="copyrightImage" />
        <p className="mt-2 text-white md:mt-0 lg:mt-0">
          &copy; {year} Eshoppers - All Right Reserved.
        </p>
      </div>
    </div>
  );
};
