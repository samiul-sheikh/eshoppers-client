import React from "react";
import { FooterComponent } from "../../core/components/footer.component";
import { HeaderComponent } from "../../core/components/header.component";
import { LoginComponent } from "../components/login.component";

interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = (props: LoginPageProps) => {
  return (
    <div>
      <HeaderComponent />
      <LoginComponent />
      <FooterComponent />
    </div>
  );
};
