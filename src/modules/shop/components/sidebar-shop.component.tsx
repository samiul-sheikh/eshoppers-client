import React from "react";
import { ShopBrandComponent } from "./shop-brand.component";
import { ShopCategoryComponent } from "./shop-category.component";
import { ShopColorComponent } from "./shop-color.component";
import { ShopPriceComponent } from "./shop-price.component";
import { ShopSizeComponent } from "./shop-size.component";

interface SidebarShopComponentProps {}

export const SidebarShopComponent: React.FC<SidebarShopComponentProps> = (
  props: SidebarShopComponentProps
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
    </div>
  );
};
