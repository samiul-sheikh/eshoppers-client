import React from "react";
import { HeaderComponent } from "./header.component";
import { NavbarComponent } from "./navbar.component";
import { BannerComponent } from "./banner-component";
import { FeatureAreaComponent } from "./feature-area.component";

interface HeaderSectionComponentProps {}

export const HeaderSectionComponent: React.FC<HeaderSectionComponentProps> = (
  props: HeaderSectionComponentProps
) => {
  return (
    <div>
      <HeaderComponent />
      <NavbarComponent />
      <BannerComponent />
      <FeatureAreaComponent />{" "}
    </div>
  );
};
