import React from "react";
import { HeaderComponent } from "../../core/components/header.component";
import { AccountBreadcrumbsComponent } from "../components/account-breadcrumbs.component";
import { WishlistComponent } from "../components/wishlist.component";
import { FooterComponent } from "../../core/components/footer.component";

interface WishlistPageProps {}

export const WishlistPage: React.FC<WishlistPageProps> = (
  props: WishlistPageProps
) => {
  return (
    <div>
      <HeaderComponent />
      <AccountBreadcrumbsComponent />
      <WishlistComponent />
      <FooterComponent />
    </div>
  );
};
