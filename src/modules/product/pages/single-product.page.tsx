import React from "react";
import { HeaderComponent } from "../../core/components/header.component";
import { SingleProductComponent } from "../components/single-product.component";
import { FooterComponent } from "../../core/components/footer.component";

interface SingleProductPageProps {}

export const SingleProductPage: React.FC<SingleProductPageProps> = (
  props: SingleProductPageProps
) => {
  return (
    <div>
      <HeaderComponent />
      <SingleProductComponent />
      <FooterComponent />
    </div>
  );
};
