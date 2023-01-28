import React from "react";
import { HeaderComponent } from "../../core/components/header.component";
import { NavbarComponent } from "../../core/components/navbar.component";

interface HomepageComponentProps {}

export const HomepageComponent: React.FC<HomepageComponentProps> = (
  props: HomepageComponentProps
) => {
  return (
    <div>
      <HeaderComponent />
      <NavbarComponent />
    </div>
  );
};
