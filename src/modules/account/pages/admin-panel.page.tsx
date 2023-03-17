import React from "react";
import { HeaderComponent } from "../../core/components/header.component";
import { AdminPanelComponent } from "../components/admin-panel.component";
import { FooterComponent } from "../../core/components/footer.component";

interface AdminPanelPageProps {}

export const AdminPanelPage: React.FC<AdminPanelPageProps> = (
  props: AdminPanelPageProps
) => {
  return (
    <div>
      <HeaderComponent />
      <AdminPanelComponent />
      <FooterComponent />
    </div>
  );
};
