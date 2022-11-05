import React from "react";
import { HomepageComponent } from "../components/homepage.component";

interface HomepagePageProps {}

export const HomepagePage: React.FC<HomepagePageProps> = (
  props: HomepagePageProps
) => {
  return (
    <div>
      <HomepageComponent />
    </div>
  );
};
