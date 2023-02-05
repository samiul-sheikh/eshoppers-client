import React from "react";
import { HeaderSectionComponent } from "../../core/components/header-section.component";

interface HomepageComponentProps {}

export const HomepageComponent: React.FC<HomepageComponentProps> = (
  props: HomepageComponentProps
) => {
  return (
    <div>
      <HeaderSectionComponent />
    </div>
  );
};
