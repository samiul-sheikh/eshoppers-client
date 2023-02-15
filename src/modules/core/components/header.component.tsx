import React from "react";
import { TopbarComponent } from "./topbar.component";
import { NavbarComponent } from "./navbar.component";

interface HeaderComponentProps {}

export const HeaderComponent: React.FC<HeaderComponentProps> = (
  props: HeaderComponentProps
) => {
  return (
    <div>
      <TopbarComponent />
      <NavbarComponent />
    </div>
  );
};
