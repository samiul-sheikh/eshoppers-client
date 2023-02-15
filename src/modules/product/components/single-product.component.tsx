import React from "react";
import { ProductDetailsComponent } from "./product-details.component";
import { ProductInformationComponent } from "./product-information.component";

interface SingleProductComponentProps {}

export const SingleProductComponent: React.FC<SingleProductComponentProps> = (
  props: SingleProductComponentProps
) => {
  return (
    <div>
      <ProductDetailsComponent />
      <ProductInformationComponent />
    </div>
  );
};
