import React from "react";
import { HeaderComponent } from "../../core/components/header.component";
import { UserListComponent } from "../components/user-list.component";
import { FooterComponent } from "../../core/components/footer.component";

interface UserListPageProps {}

export const UserListPage: React.FC<UserListPageProps> = (
  props: UserListPageProps
) => {
  return (
    <div>
      <HeaderComponent />
      <UserListComponent />
      <FooterComponent />
    </div>
  );
};
