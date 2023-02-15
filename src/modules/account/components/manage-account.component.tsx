import React from "react";
import { FaAddressCard } from "react-icons/fa";

interface ManageAccountComponentProps {}

export const ManageAccountComponent: React.FC<ManageAccountComponentProps> = (
  props: ManageAccountComponentProps
) => {
  return (
    <div className="space-y-1 pl-8">
      <a
        href="/"
        className="relative text-primary block font-medium capitalize transition"
      >
        <span className="absolute -left-8 top-1 text-base">
          <FaAddressCard />
        </span>
        manage account
      </a>
      <a
        href="/profile-information"
        className="relative hover:text-primary block capitalize transition"
      >
        profile information
      </a>
      <a
        href="/"
        className="relative hover:text-primary block capitalize transition"
      >
        manage address
      </a>
      <a
        href="/"
        className="relative hover:text-primary block capitalize transition"
      >
        change password
      </a>
    </div>
  );
};
