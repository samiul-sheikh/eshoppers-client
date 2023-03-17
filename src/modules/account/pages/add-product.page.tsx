import React from "react";
import { HeaderComponent } from "../../core/components/header.component";
import { AddProductComponent } from "../components/add-product.component";
import { FooterComponent } from "../../core/components/footer.component";

interface AddProductPageProps {}

export const AddProductPage: React.FC<AddProductPageProps> = (
  props: AddProductPageProps
) => {
  return (
    <div>
      <HeaderComponent />
      <AddProductComponent />
      <FooterComponent />
    </div>
  );
};
