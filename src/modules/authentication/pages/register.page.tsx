import React from "react";
import { RegisterComponent } from "../components/register.component";

interface RegisterPageProps {}

export const RegisterPage: React.FC<RegisterPageProps> = (
  props: RegisterPageProps
) => {
  return (
    <div>
      <RegisterComponent />
    </div>
  );
};
