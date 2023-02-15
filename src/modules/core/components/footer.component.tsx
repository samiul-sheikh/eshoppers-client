import React from "react";
import { FooterContentComponent } from "./footer-content.component";
import { CopyrightComponent } from "./copyright.component";

interface FooterComponentProps {}

export const FooterComponent: React.FC<FooterComponentProps> = (
  props: FooterComponentProps
) => {
  return (
    <div>
      <FooterContentComponent />
      <CopyrightComponent />
    </div>
  );
};
