import React from "react";

interface CheckoutInformationComponentProps {}

export const CheckoutInformationComponent: React.FC<
  CheckoutInformationComponentProps
> = (props: CheckoutInformationComponentProps) => {
  return (
    <div>
      <h3 className="text-lg font-medium capitalize mb-4">Checkout</h3>
      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-gray-600 mb-2 block">
              First Name <span className="text-primary">*</span>
            </label>
            <input type="text" className="input-box " />
          </div>
          <div>
            <label className="text-gray-600 mb-2 block">
              Last Name <span className="text-primary">*</span>
            </label>
            <input type="text" className="input-box " />
          </div>
        </div>
        <div>
          <label className="text-gray-600 mb-2 block">Company Name</label>
          <input type="text" className="input-box " />
        </div>
        <div>
          <label className="text-gray-600 mb-2 block">
            Country/Region <span className="text-primary">*</span>
          </label>
          <input type="text" className="input-box " />
        </div>
        <div>
          <label className="text-gray-600 mb-2 block">
            Street Address <span className="text-primary">*</span>
          </label>
          <input type="text" className="input-box " />
        </div>
        <div>
          <label className="text-gray-600 mb-2 block">
            Town/City <span className="text-primary">*</span>
          </label>
          <input type="text" className="input-box " />
        </div>
        <div>
          <label className="text-gray-600 mb-2 block">
            Zip Code <span className="text-primary">*</span>
          </label>
          <input type="text" className="input-box " />
        </div>
        <div>
          <label className="text-gray-600 mb-2 block">
            Phone Number <span className="text-primary">*</span>
          </label>
          <input type="text" className="input-box " />
        </div>
        <div>
          <label className="text-gray-600 mb-2 block">
            Email Address <span className="text-primary">*</span>
          </label>
          <input type="text" className="input-box " />
        </div>
      </div>
    </div>
  );
};
