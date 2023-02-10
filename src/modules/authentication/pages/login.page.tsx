import React from "react";
import { LoginComponent } from "../components/login.component";

interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = (props: LoginPageProps) => {
  return (
    <div>
      <LoginComponent />
    </div>
  );
};
