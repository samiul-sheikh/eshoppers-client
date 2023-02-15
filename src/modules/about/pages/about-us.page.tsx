import React from "react";
import { HeaderComponent } from "../../core/components/header.component";
import { AboutUsComponent } from "../components/about-us.component";
import { FooterComponent } from "../../core/components/footer.component";

interface AboutUsPageProps {}

export const AboutUsPage: React.FC<AboutUsPageProps> = (
  props: AboutUsPageProps
) => {
  return (
    <div>
      <HeaderComponent />
      <AboutUsComponent />
      <FooterComponent />
    </div>
  );
};
