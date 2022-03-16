import React from "react";
import CartItem from "../../components/Customer/CartItem";

function CustomerCart() {
  return (
    <div className="container mx-auto">
      <div className="w-3/4 grid grid-cols-3 mx-auto mt-5 mb-10 gap-x-3">
        <div className="col-span-1">
          <div className="p-5 shadow-xl">
            <p>Summary</p>
            <div className="grid grid-cols-2">
              <p>Product amount</p>
              <p>₱ 400.00</p>
            </div>
            <div className="grid grid-cols-2">
              <p>Shipping Fee</p>
              <p>₱ 50.00</p>
            </div>
            <div className="border border-gray-500 my-5"></div>
            <div className="grid grid-cols-2">
              <p>Total Amount</p>
              <p>₱ 450.00</p>
            </div>
            <button className="uppercase text-white bg-blue-600 px-4 py-2 rounded-md mt-5">
              Checkout
            </button>
          </div>

          <div className="p-5 shadow-xl mt-5">
            <p>Customer Information</p>
            <div className="mt-5">
              <p>Full Name:</p>
              <p>Aj Malda Candelaria</p>
            </div>
            <div className="mt-5">
              <p>Address:</p>
              <p>MANILA</p>
            </div>
            <div className="mt-5">
              <p>Contact Number:</p>
              <p>123123123</p>
            </div>
            <div className="mt-5">
              <p>Mode of Payment:</p>
              <p>Cash On Delivery (COD)</p>
            </div>
            <div className="mt-5">
              <p>Expected delivery date:</p>
              <p>March 7th 2022 - March 14th 2022</p>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="p-5 shadow-xl">
            <p>Cart (2 items)</p>
            <CartItem />
            <CartItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerCart;
