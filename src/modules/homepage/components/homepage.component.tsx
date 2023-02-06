import React from "react";
import { HeaderSectionComponent } from "../../core/components/header-section.component";
import { CategoryComponent } from "./category.component";
import { ProductComponent } from "./product.component";

interface HomepageComponentProps {}

export const HomepageComponent: React.FC<HomepageComponentProps> = (
  props: HomepageComponentProps
) => {
  return (
    <div>
      <HeaderSectionComponent />
      <CategoryComponent />
      <ProductComponent />
    </div>
  );
};
