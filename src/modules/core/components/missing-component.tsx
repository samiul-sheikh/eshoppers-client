import React from "react";

interface MissingComponentProps {}

export const MissingComponent: React.FC<MissingComponentProps> = (
  props: MissingComponentProps
) => {
  return (
    <div className="container py-16">
      <h1 className="text-center text-gray-600">
        Something went wrong! page not found !!
      </h1>
    </div>
  );
};
