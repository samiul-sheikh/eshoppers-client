import React from "react";
import { FooterComponent } from "../../core/components/footer.component";
import { HeaderComponent } from "../../core/components/header.component";
import { ProfileInformationComponent } from "../components/profile-information.component";

interface ProfileInformationPageProps {}

export const ProfileInformationPage: React.FC<ProfileInformationPageProps> = (
  props: ProfileInformationPageProps
) => {
  return (
    <div>
      <HeaderComponent />
      <ProfileInformationComponent />
      <FooterComponent />
    </div>
  );
};
