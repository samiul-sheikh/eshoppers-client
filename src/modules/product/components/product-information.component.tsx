import React from "react";

interface ProductInformationComponentProps {}

export const ProductInformationComponent: React.FC<
  ProductInformationComponentProps
> = (props: ProductInformationComponentProps) => {
  return (
    <div className="container pb-16">
      <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
        Product Details
      </h3>
      <div className="w-3/5 pt-5">
        <div className="text-gray-600 space-y-3">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
            minima vitae! Ullam unde quaerat tempora magni nulla voluptatibus
            iure, molestiae alias molestias minus laudantium cupiditate
            perspiciatis. Provident consectetur id voluptates!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            quos maxime cumque obcaecati, officiis accusantium earum recusandae,
            blanditiis animi iure amet quis rem ad ullam dolorum quia omnis enim
            deserunt!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eum
            et inventore magnam natus aperiam soluta culpa. Temporibus aliquid
            magni adipisci dolores rem reiciendis nam dolorum atque, beatae
            numquam similique.
          </p>
        </div>
        <table className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
          <tr>
            <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
              Color
            </th>
            <td className="py-2 px-4 border border-gray-300">
              Black, Brown, Red
            </td>
          </tr>
          <tr>
            <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
              Material
            </th>
            <td className="py-2 px-4 border border-gray-300">Leather</td>
          </tr>
          <tr>
            <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
              Weight
            </th>
            <td className="py-2 px-4 border border-gray-300">0.5 kg</td>
          </tr>
        </table>
      </div>
    </div>
  );
};
