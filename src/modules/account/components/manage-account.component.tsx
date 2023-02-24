import React from "react";

interface ManageAccountComponentProps {}

export const ManageAccountComponent: React.FC<ManageAccountComponentProps> = (
  props: ManageAccountComponentProps
) => {
  return (
    <div className="grid md:grid-cols-3 gap-4 mt-6 lg:mt-0">
      <div className="shadow rounded bg-white px-4 pt-6 pb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-gray-800 text-lg">
            Personal profile
          </h3>
          <a href="/" className="text-primary">
            Edit
          </a>
        </div>
        <div className="space-y-1">
          <h4 className="text-gray-700 font-medium">Samiul Sheikh</h4>
          <p className="text-gray-800">samiul@gmail.com</p>
          <p className="text-gray-800">01784097404</p>
        </div>
      </div>
      <div className="shadow rounded bg-white px-4 pt-6 pb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-gray-800 text-lg">
            Shipping Address
          </h3>
          <a href="/" className="text-primary">
            Edit
          </a>
        </div>
        <div className="space-y-1">
          <h4 className="text-gray-700 font-medium">Sami</h4>
          <p className="text-gray-800">
            House: 14 Road: 25, Block: D, Mirpur-10, Dhaka, Bangladesh
          </p>
          <p className="text-gray-800">01323401006</p>
        </div>
      </div>
      <div className="shadow rounded bg-white px-4 pt-6 pb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-gray-800 text-lg">Billing Address</h3>
          <a href="/" className="text-primary">
            Edit
          </a>
        </div>
        <div className="space-y-1">
          <h4 className="text-gray-700 font-medium">Sami</h4>
          <p className="text-gray-800">
            House: 14 Road: 25, Block: D, Mirpur-10, Dhaka, Bangladesh
          </p>
          <p className="text-gray-800">01323401006</p>
        </div>
      </div>
    </div>
  );
};
