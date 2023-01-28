import React from "react";

interface MissingComponentProps {}

export const MissingComponent: React.FC<MissingComponentProps> = (
  props: MissingComponentProps
) => {
  return (
    <div>
      <h1>Missing Page</h1>
    </div>
  );
};
