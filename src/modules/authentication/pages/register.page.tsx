import React from "react";
import { HeaderComponent } from "../../core/components/header.component";
import { RegisterComponent } from "../components/register.component";
import { FooterComponent } from "../../core/components/footer.component";

interface RegisterPageProps {}

export const RegisterPage: React.FC<RegisterPageProps> = (
  props: RegisterPageProps
) => {
  return (
    <div>
      <HeaderComponent />
      <RegisterComponent />
      <FooterComponent />
    </div>
  );
};
