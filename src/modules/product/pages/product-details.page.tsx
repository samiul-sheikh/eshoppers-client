import React from "react";
import { ProductDetailsComponent } from "../components/product-details.component";

interface ProductDetailsPageProps {}

export const ProductDetailsPage: React.FC<ProductDetailsPageProps> = (
  props: ProductDetailsPageProps
) => {
  return (
    <div>
      <ProductDetailsComponent />
    </div>
  );
};
