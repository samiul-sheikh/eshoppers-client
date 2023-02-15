import React from "react";
import { FooterComponent } from "../../core/components/footer.component";
import { HeaderComponent } from "../../core/components/header.component";
import { CartComponent } from "../components/cart.component";

interface CartPageProps {}

export const CartPage: React.FC<CartPageProps> = (props: CartPageProps) => {
  return (
    <div>
      <HeaderComponent />
      <CartComponent />
      <FooterComponent />
    </div>
  );
};
