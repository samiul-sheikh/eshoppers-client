import React from "react";
import { HeaderComponent } from "../../core/components/header.component";
import { ChangePasswordComponent } from "../components/change-password.component";
import { FooterComponent } from "../../core/components/footer.component";

interface ChangePasswordPageProps {}

export const ChangePasswordPage: React.FC<ChangePasswordPageProps> = (
  props: ChangePasswordPageProps
) => {
  return (
    <div>
      <HeaderComponent />
      <ChangePasswordComponent />
      <FooterComponent />
    </div>
  );
};
