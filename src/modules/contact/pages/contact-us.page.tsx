import React from "react";
import { HeaderComponent } from "../../core/components/header.component";
import { ContactUsComponent } from "../components/contact-us.component";
import { FooterComponent } from "../../core/components/footer.component";

interface ContactUsPageProps {}

export const ContactUsPage: React.FC<ContactUsPageProps> = (
  props: ContactUsPageProps
) => {
  return (
    <div>
      <HeaderComponent />
      <ContactUsComponent />
      <FooterComponent />
    </div>
  );
};
