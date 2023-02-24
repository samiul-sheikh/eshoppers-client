import React from "react";
import { HeaderComponent } from "../components/header.component";
import { MissingComponent } from "../components/missing-component";
import { FooterComponent } from "../components/footer.component";

export const MissingPagePage: React.FC = () => {
  return (
    <div>
      <HeaderComponent />
      <MissingComponent />
      <FooterComponent />
    </div>
  );
};
