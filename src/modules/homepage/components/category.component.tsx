import React from "react";
import men from "../../../assets/category/men.jpg";
import women from "../../../assets/category/815VJpmh7PL._AC_UY550_.jpg";
import baby from "../../../assets/category/baby.jpg";
import sunglass from "../../../assets/category/Ray-Ban RB3576n Blaze Clubmaster Square Sunglasses.jpg";
import belt from "../../../assets/category/Timberland Men's Casual Leather Belt.jpg";
import bag from "../../../assets/category/Skip Hop Diaper Bag Backpack.jpg";

interface CategoryComponentProps {}

export const CategoryComponent: React.FC<CategoryComponentProps> = (
  props: CategoryComponentProps
) => {
  return (
    <div className="container pb-16">
      <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">
        Shop By Category
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
        <div className="relative rounded-sm overflow-hidden group">
          <img src={men} alt="men" className="w-full" />
          <a
            href="/"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium tracking-wide group-hover:bg-opacity-50 transition"
          >
            Men
          </a>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <img src={women} alt="men" className="w-full" />
          <a
            href="/"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium tracking-wide group-hover:bg-opacity-50 transition"
          >
            Women
          </a>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <img src={baby} alt="men" className="w-full" />
          <a
            href="/"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium tracking-wide group-hover:bg-opacity-50 transition"
          >
            Baby
          </a>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <img src={sunglass} alt="men" className="w-full" />
          <a
            href="/"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium tracking-wide group-hover:bg-opacity-50 transition"
          >
            Sunglass
          </a>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <img src={belt} alt="men" className="w-full" />
          <a
            href="/"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium tracking-wide group-hover:bg-opacity-50 transition"
          >
            Belt
          </a>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <img src={bag} alt="men" className="w-full" />
          <a
            href="/"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium tracking-wide group-hover:bg-opacity-50 transition"
          >
            Bag
          </a>
        </div>
      </div>
    </div>
  );
};
