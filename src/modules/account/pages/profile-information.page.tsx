import React from "react";
import { HeaderComponent } from "../../core/components/header.component";
import { AccountBreadcrumbsComponent } from "../components/account-breadcrumbs.component";
import { ProfileInformationComponent } from "../components/profile-information.component";
import { FooterComponent } from "../../core/components/footer.component";

interface ProfileInformationPageProps {}

export const ProfileInformationPage: React.FC<ProfileInformationPageProps> = (
  props: ProfileInformationPageProps
) => {
  return (
    <div>
      <HeaderComponent />
      <AccountBreadcrumbsComponent />
      <ProfileInformationComponent />
      <FooterComponent />
    </div>
  );
};
