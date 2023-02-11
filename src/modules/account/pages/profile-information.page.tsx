import React from "react";
import { ProfileInformationComponent } from "../components/profile-information.component";

interface ProfileInformationPageProps {}

export const ProfileInformationPage: React.FC<ProfileInformationPageProps> = (
  props: ProfileInformationPageProps
) => {
  return (
    <div>
      <ProfileInformationComponent />
    </div>
  );
};
