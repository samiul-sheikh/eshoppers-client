import React from "react";
import { UserAccountComponent } from "../components/user-account.component";

interface UserAccountPageProps {}

export const UserAccountPage: React.FC<UserAccountPageProps> = (
  props: UserAccountPageProps
) => {
  return (
    <div>
      <UserAccountComponent />
    </div>
  );
};
