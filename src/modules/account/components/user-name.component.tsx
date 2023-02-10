import React from "react";
import user from "../../../assets/others/Samiul.png";

interface UserNameComponentProps {}

export const UserNameComponent: React.FC<UserNameComponentProps> = (
  props: UserNameComponentProps
) => {
  return (
    <div className="px-4 py-3 shadow flex items-center gap-4">
      <div className="text-shrink-0">
        <img
          src={user}
          className="rounded-full h-14 w-14 border border-gray-200 p-1 object-cover"
          alt="user"
        />
      </div>
      <div className="flex-grow">
        <p className="text-gray-600">Hello,</p>
        <h4 className="text-gray-800 font-medium">Samiul Sheikh</h4>
      </div>
    </div>
  );
};
