import React from "react";
import { HeaderComponent } from "../../core/components/header.component";
import { AddCategoryComponent } from "../components/add-category.component";
import { FooterComponent } from "../../core/components/footer.component";

interface AddCategoryPageProps {}

export const AddCategoryPage: React.FC<AddCategoryPageProps> = (
  props: AddCategoryPageProps
) => {
  return (
    <div>
      <HeaderComponent />
      <AddCategoryComponent />
      <FooterComponent />
    </div>
  );
};
