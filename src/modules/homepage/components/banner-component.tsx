import React from "react";

interface BannerComponentProps {}

export const BannerComponent: React.FC<BannerComponentProps> = (
  props: BannerComponentProps
) => {
  return (
    <div className="bg-banner bg-cover bg-no-repeat bg-center">
      <div className="container py-16">
        <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize">
          best collections
        </h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.{" "}
        </p>
        <div className="mt-12">
          <a
            href="/shop"
            className="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary transition"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};
