import React from "react";
import { HeaderComponent } from "../../core/components/header.component";

interface HomepageComponentProps {}

export const HomepageComponent: React.FC<HomepageComponentProps> = (
  props: HomepageComponentProps
) => {
  return (
    <div>
      <HeaderComponent />
    </div>
  );
};
