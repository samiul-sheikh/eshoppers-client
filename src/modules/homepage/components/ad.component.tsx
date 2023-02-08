import React from "react";
import ad from "../../../assets/others/ecommerce-website-banner.jpg";

interface AdComponentProps {}

export const AdComponent: React.FC<AdComponentProps> = (
  props: AdComponentProps
) => {
  return (
    <div className="container pb-16">
      <a href="/">
        <img src={ad} className="w-full" alt="ad" />
      </a>
    </div>
  );
};
