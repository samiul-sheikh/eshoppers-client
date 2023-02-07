import React from "react";
import { ShopCategoryComponent } from "./shop-category.component";
import { ShopBrandComponent } from "./shop-brand.component";
import { ShopPriceComponent } from "./shop-price.component";
import { ShopSizeComponent } from "./shop-size.component";
import { ShopColorComponent } from "./shop-color.component";
import { ShopHeaderComponent } from "./shop-header.component";
import { ShopProductComponent } from "./shop-product.component";

interface ShopComponentProps {}

export const ShopComponent: React.FC<ShopComponentProps> = (
  props: ShopComponentProps
) => {
  return (
    <div className="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
      <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden">
        <div className="divide-y divide-gray-200 space-y-5">
          <ShopCategoryComponent />
          <ShopBrandComponent />
          <ShopPriceComponent />
          <ShopSizeComponent />
          <ShopColorComponent />
        </div>
      </div>
      <div className="col-span-3">
        <ShopHeaderComponent />
        <ShopProductComponent />
      </div>
    </div>
  );
};
