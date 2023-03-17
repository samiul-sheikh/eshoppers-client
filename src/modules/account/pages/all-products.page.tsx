import React from "react";
import { HeaderComponent } from "../../core/components/header.component";
import { AllProductsComponent } from "../components/all-products.component";
import { FooterComponent } from "../../core/components/footer.component";

interface AllProductsPageProps {}

export const AllProductsPage: React.FC<AllProductsPageProps> = (
  props: AllProductsPageProps
) => {
  return (
    <div>
      <HeaderComponent />
      <AllProductsComponent />
      <FooterComponent />
    </div>
  );
};
