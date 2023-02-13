import React from "react";
import { CartComponent } from "../components/cart.component";

interface CartPageProps {}

export const CartPage: React.FC<CartPageProps> = (props: CartPageProps) => {
  return (
    <div>
      <CartComponent />
    </div>
  );
};
