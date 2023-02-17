import React from "react";

interface OrderSummaryComponentProps {}

export const OrderSummaryComponent: React.FC<OrderSummaryComponentProps> = (
  props: OrderSummaryComponentProps
) => {
  return (
    <div>
      <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
        Order Summary
      </h4>
      <div className="space-y-2">
        <div className="flex justify-between">
          <div>
            <h5 className="text-gray-800 font-medium">Men Jacket</h5>
            <p className="text-sm text-gray-600">Size: L</p>
          </div>
          <p className="text-gray-600">x3</p>
          <p className="text-gray-800 font-medium">$300</p>
        </div>
        <div className="flex justify-between">
          <div>
            <h5 className="text-gray-800 font-medium">Blue Dress</h5>
            <p className="text-sm text-gray-600">Size: M</p>
          </div>
          <p className="text-gray-600">x2</p>
          <p className="text-gray-800 font-medium">$300</p>
        </div>
        <div className="flex justify-between">
          <div>
            <h5 className="text-gray-800 font-medium">Baby Dress</h5>
            <p className="text-sm text-gray-600">Size: S</p>
          </div>
          <p className="text-gray-600">x1</p>
          <p className="text-gray-800 font-medium">$200</p>
        </div>
      </div>
      <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase">
        <p>Subtotal</p>
        <p>$800</p>
      </div>
      <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase">
        <p>Shipping</p>
        <p>Free</p>
      </div>
      <div className="flex justify-between text-gray-800 font-semibold py-3 uppercase">
        <p>Total</p>
        <p>$800</p>
      </div>
      <div className="flex items-center mb-4 mt-2">
        <input
          type="checkbox"
          id="agreement"
          className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
        />
        <label
          htmlFor="agreement"
          className="text-gray-600 ml-3 cursor-pointer text-sm"
        >
          Agree to our{" "}
          <a href="/" className="text-primary">
            terms & condition
          </a>
        </label>
      </div>
      <a
        href="/order-history"
        className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
      >
        place order
      </a>
    </div>
  );
};
