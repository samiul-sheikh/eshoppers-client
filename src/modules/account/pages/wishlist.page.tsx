import React from "react";
import { WishlistComponent } from "../components/wishlist.component";

interface WishlistPageProps {}

export const WishlistPage: React.FC<WishlistPageProps> = (
  props: WishlistPageProps
) => {
  return (
    <div>
      <WishlistComponent />
    </div>
  );
};
